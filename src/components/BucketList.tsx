import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom'
import { transformBytes } from "../utils/transformBytes.tsx"
import '../assets/styles/BucketList.css'
import '../assets/styles/Bucket.css'

function getLocation(server: string) {
    return server.split('.')[0].toUpperCase()
}

// This variable helps us track the status of our data fetch call and we use
// it in our own logic
let status = "pending"
// This variable is the return object of the the fetch call
let result: AxiosResponse

// Api call outside of the component; fetch-then-render
// Returns a function
const getBuckets = () => {
    // We fetch from the external API
    let fetching = axios.get(`${import.meta.env.VITE_API_BASE_URL}/buckets`)
        // Take the response...
        .then((res) => res)
        // If the response was a success and we get a non-null value
        .then((success) => {
            status = "fulfilled"  // Change the status accordingly
            result = success  // Our result is the data that was returned
            // console.log(`Type of result as success: ${typeof(result)}`)
            // console.log(`Result in fetching: ${result}`)
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

// fetchedData is a function; we call that function
// Returns a response object
const fetchedData = getBuckets()

function BucketList() {
    // We want to get the data property from the response object
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