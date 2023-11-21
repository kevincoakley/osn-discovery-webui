import axios from 'axios';
import { useState, useEffect } from 'react'
import Bucket from './Bucket'
import '../assets/styles/BucketList.css'
import config from 'config/config'

interface BucketDetails {
    'bucket': string,
    'bytes-used': number,
    'name': string,
    'object-count': number,
    'site': string

}
function BucketList() {
    const [bucketDetails, setBucketDetails] = useState<Array<BucketDetails>>([{
        'bucket': "",
        'bytes-used': 0,
        'name': "",
        'object-count': 0,
        'site': ""
    }])

    const getBucketDetails = async (bucket: string) => {
        const { data } = await axios.get(`${config.API_BASE_URL}/details/${bucket}`)
        return data
    }

    const getBuckets = async () => {
        const { data } = await axios.get(`${config.API_BASE_URL}/buckets`)
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
            {/* {console.log(`Type of bucketDetails: ${typeof(bucketDetails)}`)}
            {bucketDetails.map((details) => {
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