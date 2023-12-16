import BucketFileList from '../components/BucketFileList'
import { useParams } from "react-router-dom"

const BucketFileListView = () => {
    const routeParams = useParams();
    // Bypass 'string | undefined' typeError when using params
    let key : string = (routeParams['key'] ?? "")
    console.log("In BucketFileListView")
    return (
        <>
            <BucketFileList bucketPath={key}/>
        </>
    )
}

export default BucketFileListView