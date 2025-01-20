const imageExtensions = new Set([
    "apng",
    "avif",
    "gif",
    "jpg",
    "jpeg",
    "jfif",
    "pjpeg",
    "pjp",
    "png",
    "svg",
    "webp",
]);

export const isImage = (fileExtension: string): Boolean => {
    if (imageExtensions.has(fileExtension)) return true
    return false
}