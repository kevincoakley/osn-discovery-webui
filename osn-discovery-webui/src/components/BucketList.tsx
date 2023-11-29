import axios from 'axios';
import { useState, useEffect } from 'react'
import Bucket from './Bucket'
import '../assets/styles/BucketList.css'

interface BucketDetails {
    'bucket': string,
    'bytes-used': number,
    'name': string,
    'object-count': number,
    'site': string

}
function BucketList() {
    const [bucketDetails, setBucketDetails] = useState<Array<BucketDetails>>([{
        'bucket': "bucket not found",
        'bytes-used': 0,
        'name': "name not found",
        'object-count': 0,
        'site': "site not found"
    }])

    // Api call to get details of buckets
    const getBucketDetails = async (bucket: string) => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/details/${bucket}`)
        return data
    }

    // Api call to get names of buckets
    const getBuckets = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/buckets`)
        const buckets = await Promise.all(
            data.map((bucket: string) => getBucketDetails(bucket))
        )
        setBucketDetails(buckets)
    }

    useEffect(() => {
        getBuckets()
    }, [])
    return (
        <>
            {console.log(`Env variable: ${import.meta.env.VITE_API_BASE_URL}`)}
            {/* {bucketDetails.map((details) => {
                console.log(details['bucket'])
            })} */}
            <h1>BucketList</h1>
            <ul>
                
                {(bucketDetails).map((bucket) => (
                    <Bucket bucketName={bucket['name']} bucketLoc={bucket['site'].split(".")[0]} bucketSize={bucket['bytes-used']} bucketNumFiles={bucket['object-count']} key={bucket['name']}/>
                ))}
            </ul>
        </>
        
    )
}

export default BucketList