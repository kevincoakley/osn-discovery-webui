import '../assets/styles/BucketFile.css'

type BucketFileProps = {
    etag: string;
    objKey: string,
    lastMod: string,
    size: number,
    url: string
}

function BucketFile({ etag, objKey, lastMod, size, url }: BucketFileProps) {
    console.log(url)
    return (
        <>
            <div className='rowItem'>
                <a href={`${url}`} className='objKey'>{objKey}</a>
                <div className='objLastMod'>{lastMod}</div>
                <div className='objSize'>{size}</div>
            </div>
        </>
        
    )
}

export default BucketFile