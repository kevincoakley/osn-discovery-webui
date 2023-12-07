import NavBar from '../components/NavBar'
import ColumnHeaders from '../components/ColumnHeaders'
import BucketList from '../components/BucketList'

const BucketListView = () => {
    return (
        <>
            <div>
                <NavBar />
                <ColumnHeaders />
                <BucketList/>
            </div>
        </>
    )
}

export default BucketListView