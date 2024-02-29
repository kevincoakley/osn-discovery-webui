import '../assets/styles/BucketFile.css'
import { transformBytes } from '../utils/transformBytes.tsx';

type BucketFileProps = {
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

function BucketFile({ objKey, lastMod, size, url }: BucketFileProps) {
    /**
     * TODO: Update this function to check for overflow based on size of elements
     * and not on number of characters in the string.
     * @param el 
     * @returns 
     */
    // const checkOverflow = (el: any) => {
    //     if (el === undefined || el === null)  return false
    
    //     let curOverflow = el.style.overflow
    
    //     // if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden"

    //     console.log("Scroll width:  " + el.scrollWidth)
    //     console.log("client width: " + el.clientWidth)
    
    //     let isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight
    
    //     el.style.overflow = curOverflow

    //     console.log(isOverflowing)
    
    //     return isOverflowing
    // }
    const ellipsize = (key: string) => {
        const X = 16
        if (key.length > 36) {
            let fileExtension: string = ""
            let firstXChars: string = ""
            let lastXChars: string = ""
            // If there is a file extension...
            if (key.split(".").length > 1) {
                // File extension is of format ".<file_extension>" e.g. ".txt"
                fileExtension = "." + key.split(".").slice(-1)[0]
                firstXChars = key.slice(0,X)
                lastXChars = key.slice(( - fileExtension.length - X - 1), (- fileExtension.length - 1))
            // There isn't a file extension...
            } else {
                firstXChars = key.slice(0,X)
                lastXChars = key.slice(-X)
            }
            key = firstXChars + "..." + lastXChars + fileExtension
        }
        return key
    }
    return (
        <>
            <div className='rowItem'>
                <div className='objKey'>
                    <a onClick={onClickUrl(url)} className='objKeyText' href={url}>
                        {ellipsize(objKey)}
                    </a>
                </div>
                <div className='objLastMod'>{lastMod}</div>
                <div className='objSize'>{transformBytes(size)}</div>
            </div>
        </>
        
    )
}

export default BucketFile