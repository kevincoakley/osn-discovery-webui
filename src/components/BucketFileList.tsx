import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Loading from './Loading.tsx'
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

const BucketFileList = ({bucketPath}: FileListProps) => {    
    const { isPending, data, error, isFetching } = 
    useQuery({
        queryKey: ['bucketFileList'],
        queryFn: () => 
            axios
                .get(`${import.meta.env.VITE_API_BASE_URL}/object-list/${bucketPath}`)
                .then((res) => res.data),
        })

    if (isPending || isFetching) return <Loading />

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            {data.map((object: BucketFileDetails) => (
                <BucketFile objKey={object['key']} lastMod={object['last-modified']} size={object['size']} url={transformUrl(object['url'], bucketPath)} key={object['key']}/>
            ))}
        </>
    )
}

export default BucketFileList