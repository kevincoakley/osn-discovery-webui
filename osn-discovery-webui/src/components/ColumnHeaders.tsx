import '../assets/styles/ColumnHeaders.css'


function ColumnHeaders() {
    return (
        <div className="columnHeaders">
            <b className="header headerName">Name</b>
            <b className="header headerLocation">Location</b>
            <b className="header headerSize">Size</b>
            <b className="header headerNumFiles">Number of Files</b>
        </div>
    )
}

export default ColumnHeaders