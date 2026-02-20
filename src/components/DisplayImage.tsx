
"use client";

import { useState } from "react";

interface DisplayImageProps {
    src: string;
    alt: string;
    fallbackSrc?: string;
    className?: string;
}

export function DisplayImage({ src, alt, fallbackSrc, className }: DisplayImageProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [errored, setErrored] = useState(false);

    const defaultFallback = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80"; // Generic fallback property/office

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className || "w-full h-full object-cover"}
            referrerPolicy="no-referrer"
            onError={() => {
                if (!errored) {
                    setImgSrc(fallbackSrc || defaultFallback);
                    setErrored(true);
                }
            }}
        />
    );
}
