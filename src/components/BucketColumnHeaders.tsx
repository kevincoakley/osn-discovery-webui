import '../assets/styles/BucketColumnHeaders.css'

/**
 * Basic component that can be used to style the headers of each column
 * @returns column headers for Name, Location, Size, and Number of Files in a bucket
 */
function BucketColumnHeaders() {
    return (
        <div className="bucketColumnHeaders">
            <b className="header headerName">Name</b>
            <b className="header headerLocation">Location</b>
            <b className="header headerSize">Size</b>
            <b className="header headerNumFiles">Number of Files</b>
        </div>
    )
}

export default BucketColumnHeaders