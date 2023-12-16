import '../assets/styles/BucketFile.css'

type BucketFileProps = {
    etag: string;
    objKey: string,
    lastMod: string,
    size: number,
    url: string
}

export const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export const onClickUrl = (url: string): (() => void) => () => openInNewTab(url)

function BucketFile({ etag, objKey, lastMod, size, url }: BucketFileProps) {
    console.log(url)
    return (
        <>
            <div className='rowItem'>
                <a onClick={onClickUrl(url)} className='objKey'>{objKey}</a>
                <div className='objLastMod'>{lastMod}</div>
                <div className='objSize'>{size}</div>
            </div>
        </>
        
    )
}

export default BucketFile