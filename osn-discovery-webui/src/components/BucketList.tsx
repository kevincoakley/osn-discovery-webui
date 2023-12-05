import axios from 'axios';
import { useState, useEffect } from 'react'
import Bucket from './Bucket'
import '../assets/styles/BucketList.css'

interface BucketDetails {
        'bytes-used': number,
        'name': string,
        'object-count': number,
        'site': string
}

// Utility functions for managing Records
export function recordKeys<K extends PropertyKey, T>(object: Record<K, T>) {
    return Object.keys(object) as (K)[];
  };
  
  export function recordEntries<K extends PropertyKey, T>(object: Record<K, T>) {
    return Object.entries(object) as ([K,T])[];
  };

function transformBytes(numBytes: number) {

}
function BucketList() {
    const [bucketDetails, setBucketDetails] = useState<Record<string, BucketDetails>> ({
        'bucket': {
            'bytes-used': 0,
            'name': 'name not found',
            'object-count': 0,
            'site': 'site not found'
        }
    })

    // Api call to get buckets and their details
    const getBuckets = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/buckets`)
        setBucketDetails(data)
    }

    useEffect(() => {
        getBuckets()
    }, [])
    return (
        <>
            <h1>BucketList</h1>
            {/* Get the key-value pairs of each bucket, and use the properties of the value-object */}
            {
                Object.keys(bucketDetails).map((key) => (
                    <Bucket bucketName={bucketDetails[key]['name']} bucketLoc={bucketDetails[key]['site']} bucketNumFiles={bucketDetails[key]['object-count']} bucketSize={bucketDetails[key]['bytes-used']} key={key}/>            
                ))
            }
        </>
        
    )
}

export default BucketList