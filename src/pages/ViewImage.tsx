import { useParams, useLocation } from "react-router-dom"
import '../assets/styles/ViewImage.css'

const ViewImage = () => {
    const location = useLocation();
    const { imageUrl } = location.state;
    const routeParams = useParams();
    // Bypass 'string | undefined' typeError when using params
    // let key : string = (routeParams['key'] ?? "")
    let file: string = (routeParams['file'] ?? "")
    return (
        <>
            <p>{file}</p>
            <img src={imageUrl} alt={file} className="imgPreview"/>
        </>
    )
}

export default ViewImage