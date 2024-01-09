import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bucket from './Bucket'
import { transformBytes } from "../utils/transformBytes"
import '../assets/styles/BucketList.css'
import '../assets/styles/Bucket.css'

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
    const [bucketDetails, setBucketDetails] = useState<Record<string, BucketDetails>> ({})

    const [loading, setLoading] = useState(false)

    // Api call to get buckets and their details
    const getBuckets = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/buckets`)
            setBucketDetails(data)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        setLoading(true)
        getBuckets()
    }, [])
    return (
        <>
            {/* Get the key-value pairs of each bucket, and use the properties of the value-object */}
                {/* {loading && (
                    <p>Loading...</p>
                )} */}
                {/* {!loading && ( */}
                    {Object.keys(bucketDetails).map((key) => (
                        <div className='rowItem' key={`${key}`}>
                            <Link to={`/details/${key}`} className='bucketName' >{bucketDetails[key]['name']}</Link>
                            <div className='bucketLocation'>{getLocation(bucketDetails[key]['site'])}</div>
                            <div className='bucketSize'>{transformBytes(bucketDetails[key]['bytes-used'])}</div>
                            <div className='bucketNumFiles'>{bucketDetails[key]['object-count']}</div>
                        </div>
                        // <Bucket bucketName={bucketDetails[key]['name']} bucketLoc={getLocation(bucketDetails[key]['site'])} bucketNumFiles={bucketDetails[key]['object-count']} bucketSize={bucketDetails[key]['bytes-used']} bucketPath={key} key={key}/>            
                    ))}
                {/* )} */}
        </>
        
    )
}

export default BucketList