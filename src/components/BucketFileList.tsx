import axios, { AxiosResponse } from 'axios'
import BucketFile from './BucketFile.tsx'

type FileListProps = {
    bucketPath: string
}

interface BucketFileDetails {
    'etag': string,
    'key': string,
    'last-modified': string,
    'size': number,
    'url': string
}
/**
     * Parses the url so that it can be accessed without error
     * and rearranges it if the bucket name contains any capital letters
     * Capital Letters: https://[bucket].[server]/[filename] -> https://[server]/[bucket]/[filename]
     * @param url 
     * @returns newUrl
     */
    
const transformUrl = (url: string, bucketPath: string) => {
    const bucketName: string = bucketPath.split(".")[0]
    let newUrl : string = url
    // Test to see if string contains capital letters
    if (/[A-Z]/.test(bucketName)) {
        let splitBySlash = url.split("/")
        const path : string = splitBySlash[2]
        let splitByDot = path.split(".")
        const bucket: string = (splitByDot.shift() ?? "")
        splitBySlash[2] = splitByDot.join(".")
        splitBySlash.splice(3,0, bucket)
        newUrl = splitBySlash.join("/")
    }
    return encodeURI(newUrl)
}

// This variable helps us track the status of our data fetch call and we use
// it in our own logic
let status = "pending"
// This variable is the return object of the the fetch call
let result: AxiosResponse

const getBucketDetails = (bucketPath: string) => {
    let fetching = axios.get(`${import.meta.env.VITE_API_BASE_URL}/object-list/${bucketPath}`)
        // Take ethe response
        .then((res) => res)
        // If the response was a success and we get a non-null value
        .then((success) => {
            status = "fulfilled"  // Change the status accordingly
            result = success  // Our result is the data that was returned
        })
        // If there is an error...
        .catch((error) => {
            status = "rejected"  // Change the status accordingly
            result = error  // Our result is the error object that is thrown
        })
    return () => {
        // While our status is still pending...
        if (status === "pending") {
            throw fetching // Suspend (Way to tell React data is still fetching)
        } else if (status === "rejected") {  // An error was encountered
            throw result
        } else if (status === "fulfilled") { // Successful data fetch
            return result  // Safely return our data
        }
    }
}

const BucketFileList = ({bucketPath}: FileListProps) => {    
    const fetchedData = getBucketDetails(bucketPath)
    const bucketFileDetails = fetchedData()!['data']

    return (
        <>
            {/* {   loading && (
                <p>Loading...</p>
            )}
            {   !loading && ( */}
                    {bucketFileDetails.map((object: BucketFileDetails) => (
                        <BucketFile objKey={object['key']} lastMod={object['last-modified']} size={object['size']} url={transformUrl(object['url'], bucketPath)} key={object['key']}/>
                    ))}
                {/* ) */}
            {/* } */}
        </>
    )
}

export default BucketFileList