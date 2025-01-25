import { Link } from "react-router-dom"
import '../assets/styles/Bucket.css'
import { transformBytes } from "../utils/transformBytes.tsx"

type BucketProps = {
    bucketName: string;
    bucketLoc: string,
    bucketSize: number,
    bucketNumFiles: number,
    bucketPath: string
}

/**
 * Base component for a bucket of files in the OSN group.
 * @param BucketProps a map of props that displays information about the bucket
 * @returns a row item that has the following attributes:
 *   - The name of the bucket with a link to a path that shows all the files inside the bucket
 *   - The bucket location
 *   - The size of the bucket in nearest magnitude of bytes
 *   - Number of files in the bucket
 */
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