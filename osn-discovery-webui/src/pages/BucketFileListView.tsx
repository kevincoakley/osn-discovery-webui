import FileColumnHeaders from '../components/FileColumnHeaders.tsx';
import Loading from '../components/Loading.tsx'
import { useParams } from "react-router-dom"
import React, { Suspense } from 'react'

const BucketFileListView = () => {
    const BucketFileList = React.lazy(() => import("../components/BucketFileList.tsx"))
    const routeParams = useParams();
    // Bypass 'string | undefined' typeError when using params
    let key : string = (routeParams['key'] ?? "")
    console.log("In BucketFileListView")
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <FileColumnHeaders/>
                <BucketFileList bucketPath={key}/>
            </Suspense>
            
        </>
    )
}

export default BucketFileListView