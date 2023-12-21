import axios from 'axios';
import { useState, useEffect } from 'react'
import Bucket from './Bucket'
import '../assets/styles/BucketList.css'
import { transformBytes } from 'utils/transformBytes';

interface BucketDetails {
        'bytes-used': number,
        'name': string,
        'object-count': number,
        'site': string
}

function getLocation(server: string) {
    return server.split('.')[0].toUpperCase()
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

    const [loading, setLoading] = useState(false)

    // Api call to get buckets and their details
    const getBuckets = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/buckets`)
        setBucketDetails(data)
    }

    useEffect(() => {
        setLoading(true)
        getBuckets().then(function(data) {
            setLoading(false)
        })
    }, [])
    return (
        <>
            {/* Get the key-value pairs of each bucket, and use the properties of the value-object */}
                {loading && (
                    <p>Loading...</p>
                )}
                {!loading && (
                    Object.keys(bucketDetails).map((key) => (
                        <Bucket bucketName={bucketDetails[key]['name']} bucketLoc={getLocation(bucketDetails[key]['site'])} bucketNumFiles={bucketDetails[key]['object-count']} bucketSize={bucketDetails[key]['bytes-used']} bucketPath={key} key={key}/>            
                    ))
                )}
        </>
        
    )
}

export default BucketList