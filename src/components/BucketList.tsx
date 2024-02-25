import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom'
import { useQuery, useMutation, QueryCache } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { transformBytes } from "../utils/transformBytes.tsx"
import Loading from './Loading.tsx';
import '../assets/styles/BucketList.css'
import '../assets/styles/Bucket.css'

function getLocation(server: string) {
    return server.split('.')[0].toUpperCase()
}

function BucketList() {
    const { isPending, data, error, isFetching } = 
    useQuery({
        queryKey: ['bucketList'],
        queryFn: () => 
            axios
                .get('/api/buckets')
                .then((res) => res.data),
        })

    if (isPending || isFetching) return <Loading />

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            {Object.keys(data).map((key) => (
                <div className='rowItem' key={`${key}`}>
                    <Link to={`/details/${key}`} className='bucketName' >{data[key]['name']}</Link>
                    <div className='bucketLocation'>{getLocation(data[key]['site'])}</div>
                    <div className='bucketSize'>{transformBytes(data[key]['bytes-used'])}</div>
                    <div className='bucketNumFiles'>{data[key]['object-count']}</div>
                </div>
                // <Bucket bucketName={bucketDetails[key]['name']} bucketLoc={getLocation(bucketDetails[key]['site'])} bucketNumFiles={bucketDetails[key]['object-count']} bucketSize={bucketDetails[key]['bytes-used']} bucketPath={key} key={key}/>            
            ))}
        </>
        
    )
}

export default BucketList