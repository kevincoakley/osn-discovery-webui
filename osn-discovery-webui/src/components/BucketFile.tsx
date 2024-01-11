import { useLayoutEffect, } from 'react';
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
    // const el = useRef(null)
    // const [isOverflowing, setIsOverflowing] = useState(false)

    useLayoutEffect(() => {
        // console.log("Text content: " + el.current.textContent)
        // setIsOverflowing(checkOverflow(el.current))
        // ellipsize(el.current, isOverflowing)
    })

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
        if (key.length > 36) {
            let fileExtension: string = key.split(".").slice(-1)[0]
            let first6Chars: string = key.slice(0,6)
            let last6Chars: string = key.split(".").slice(-2,-1)[0].slice(-6)
            key = first6Chars + "..." + last6Chars + "." + fileExtension
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