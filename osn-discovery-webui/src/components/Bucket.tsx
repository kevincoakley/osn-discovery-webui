import axios from 'axios';
import { useState, useEffect } from 'react'
// import { useQuery } from '@tanstack/react-query'
import '../assets/styles/Bucket.css'

type BucketProps = {
    bucketName: string;
    bucketLoc: string,
    bucketSize: number,
    bucketNumFiles: number
}

function Bucket({ bucketName, bucketLoc, bucketSize, bucketNumFiles }: BucketProps) {
    // const {status, data, error, isFetching} = useQuery(
    //     ['data'],
    //     async () => {
    //         const data = await (
    //             await fetch(`${API_BASE_URL}/details/${bucketVal}`)
    //         )
    //         if (isFetching) {
    //             console.log(`Fetching...`)
    //         }
    //         console.log(`Status: ${status}\n`)
    //         if (error) {
    //             console.log(`Error encountered: ${error}`)
    //         }
    //         return data
    //     }
    // )
    // const [details, setDetails] = useState({
    //     'bucket': "",
    //     'bytes-used': 0,
    //     'name': "",
    //     'object-count': 0,
    //     'site': ""
    // })

    // useEffect(() => {
    //     axios.get(`https://osn-api.sdsc.edu/details/${bucketVal}`)
    //         .then(response => {
    //             setDetails(response.data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [])
    return (
        <>
            <div className='rowItem'>
                <div className='bucketName'>{bucketName}</div>
                <div className='bucketLocation'>{bucketLoc}</div>
                <div className='bucketSize'>{bucketSize}</div>
                <div className='bucketNumFiles'>{bucketNumFiles}</div>
            </div>
        </>
        
    )
}

export default Bucket