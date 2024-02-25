import BucketList from '../components/BucketList.tsx'
import BucketColumnHeaders from '../components/BucketColumnHeaders.tsx'

const BucketListView = () => {
    return (
        <>
            <BucketColumnHeaders />
            <BucketList/>
        </>
    )
}

export default BucketListView