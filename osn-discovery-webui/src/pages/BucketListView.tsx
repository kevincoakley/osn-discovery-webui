import Loading from '../components/Loading.tsx'
import { Suspense, lazy } from 'react'

const BucketListView = () => {
    const BucketList = lazy(() => import("../components/BucketList.tsx"))
    const BucketColumnHeaders = lazy(() => import("../components/BucketColumnHeaders.tsx"))
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <BucketColumnHeaders />
                <BucketList/>
            </Suspense>
        </>
    )
}

export default BucketListView