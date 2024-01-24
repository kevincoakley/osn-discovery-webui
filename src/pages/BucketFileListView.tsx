import FileColumnHeaders from '../../src/components/FileColumnHeaders.tsx';
import Loading from '../../src/components/Loading.tsx'
import { useParams } from "react-router-dom"
import React, { Suspense } from 'react'

const BucketFileListView = () => {
    const BucketFileList = React.lazy(() => import("../../src/components/BucketFileList.tsx"))
    const routeParams = useParams();
    // Bypass 'string | undefined' typeError when using params
    let key : string = (routeParams['key'] ?? "")
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