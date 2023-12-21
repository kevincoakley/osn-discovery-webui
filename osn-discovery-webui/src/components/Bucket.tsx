// import { useQuery } from '@tanstack/react-query'
import { NavLink, Link } from "react-router-dom"
import '../assets/styles/Bucket.css'
import { transformBytes } from "../utils/transformBytes"

type BucketProps = {
    bucketName: string;
    bucketLoc: string,
    bucketSize: number,
    bucketNumFiles: number,
    bucketPath: string
}

function Bucket({ bucketName, bucketLoc, bucketSize, bucketNumFiles, bucketPath }: BucketProps) {
    return (
        <>
            <div className='rowItem'>
                <Link to={`/details/${bucketPath}`} className='bucketName' >{bucketName}</Link>
                <div className='bucketLocation'>{bucketLoc}</div>
                <div className='bucketSize'>{transformBytes(bucketSize)}</div>
                <div className='bucketNumFiles'>{bucketNumFiles}</div>
            </div>
        </>
        
    )
}

export default Bucket