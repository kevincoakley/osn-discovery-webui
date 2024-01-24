import Loading from '../../src/components/Loading.tsx'
import { Suspense, lazy } from 'react'

const BucketListView = () => {
    const BucketList = lazy(() => import("../../src/components/BucketList.tsx"))
    const BucketColumnHeaders = lazy(() => import("../../src/components/BucketColumnHeaders.tsx"))
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