export const transformBytes = (numBytes: number) => {
    const powerOfBytes = 2**10
    let magnitude = 0
    while (numBytes > powerOfBytes) {
        numBytes = numBytes / powerOfBytes
        magnitude++
    }
    let prefix = ''
    switch(magnitude) {
        case 1:
            prefix = ' KiB'
            break
        case 2:
            prefix = ' MiB'
            break
        case 3:
            prefix = ' GiB'
            break
        case 4:
            prefix = ' TiB'
            break
        default:
            prefix = ' B'
    }
    return `${Math.round(numBytes) + prefix}`
}