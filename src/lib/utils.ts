import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatGoogleDriveUrl(url: string) {
    if (!url) return "";

    // Check if it's a Google Drive share link
    if (url.includes("drive.google.com")) {
        // Extract ID (d/ID/...)
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            // Use the thumbnail endpoint which is more reliable for embedding images
            return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
        }
    }

    return url;
}
