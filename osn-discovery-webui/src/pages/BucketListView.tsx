// import BucketColumnHeaders from '../components/BucketColumnHeaders'
// import BucketList from '../components/BucketList'
import Loading from '../components/Loading'
import { Suspense, lazy } from 'react'

const BucketListView = () => {
    const BucketList = lazy(() => import("../components/BucketList"))
    const BucketColumnHeaders = lazy(() => import("../components/BucketColumnHeaders"))
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