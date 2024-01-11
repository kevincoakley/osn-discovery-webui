import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom'
import { transformBytes } from "../utils/transformBytes.tsx"
import '../assets/styles/BucketList.css'
import '../assets/styles/Bucket.css'

function getLocation(server: string) {
    return server.split('.')[0].toUpperCase()
}

let status = "pending"
let result: AxiosResponse

// Api call to get buckets and their details
// Returns a function
const getBuckets = () => {
    let fetching = axios.get(`${import.meta.env.VITE_API_BASE_URL}/buckets`)
        .then((res) => res)
        .then((success) => {
            status = "fulfilled"
            result = success
            // console.log(`Type of result as success: ${typeof(result)}`)
            // console.log(`Result in fetching: ${result}`)
        })
        .catch((error) => {
            status = "rejected"
            result = error
        })
    return () => {
        if (status === "pending") {
            throw fetching // Suspend (Way to tell React data is still fetching)
        } else if (status === "rejected") {
            throw result
        } else if (status === "fulfilled") {
            return result
        }
    }   
}

// fetchedData is a function
// Returns a response object
const fetchedData = getBuckets()

function BucketList() {
    // We want to get the data from the response object
    const bucketDetails = fetchedData()!['data']
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