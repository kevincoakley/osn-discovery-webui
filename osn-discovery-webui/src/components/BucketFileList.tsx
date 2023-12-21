import axios from 'axios'
import { useState, useEffect } from 'react'
import BucketFile from './BucketFile'

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
const BucketFileList = ({bucketPath}: FileListProps) => {
    const [fileDetails, setFileDetails] = useState<Array<BucketFileDetails>>([{
        'etag': 'N/A',
        'key': 'N/A',
        'last-modified': 'N/A',
        'size': 0,
        'url': 'N/A'
    }])

    const [loading, setLoading] = useState(false)

    /**
     * Parses the url so that it can be accessed without error
     * and rearranges it if the bucket name contains any capital letters
     * Capital Letters: https://[bucket].[server]/[filename] -> https://[server]/[bucket]/[filename]
     * @param url 
     * @returns newUrl
     */
    const transformUrl = (url: string) => {
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
    const getBucketDetails = async (bucketPath: string) => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/object-list/${bucketPath}`)
            data.map((object: BucketFileDetails) => (
                object['url'] = transformUrl(object['url'])
            ))
            setFileDetails(data)
        } catch (error) {
            console.log(error)
        }
        
    }
    // console.log("In BucketFileList")
    useEffect(() => {
        setLoading(true)
        getBucketDetails(bucketPath).then(function(data) {
            setLoading(false)
        })
    }, [])

    return (
        <>
            {   loading && (
                <p>Loading...</p>
            )}
            {   !loading && (
                    fileDetails.map((object: BucketFileDetails) => (
                        <BucketFile etag={object['etag']} objKey={object['key']} lastMod={object['last-modified']} size={object['size']} url={object['url']} key={object['key']}/>
                    ))
                )
            }
        </>
    )
}

export default BucketFileList