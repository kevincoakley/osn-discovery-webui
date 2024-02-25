import FileColumnHeaders from '../components/FileColumnHeaders.tsx';
import BucketFileList from '../components/BucketFileList.tsx';
import { useParams } from "react-router-dom"

const BucketFileListView = () => {
    const routeParams = useParams();
    // Bypass 'string | undefined' typeError when using params
    let key : string = (routeParams['key'] ?? "")
    return (
        <>
            <FileColumnHeaders/>
            <BucketFileList bucketPath={key}/>
            
        </>
    )
}

export default BucketFileListView