import '../assets/styles/FileColumnHeaders.css'

function FileColumnHeaders() {
    return (
        <div className="fileColumnHeaders">
            <b className="header headerName">Name</b>
            <b className="header headerLastMod">Last Modified</b>
            <b className="header headerSize">Size</b>
        </div>
    )
}

export default FileColumnHeaders