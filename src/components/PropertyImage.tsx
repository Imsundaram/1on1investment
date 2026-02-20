
"use client";

import { useState } from "react";

export function PropertyImage({ src, alt }: { src: string; alt: string }) {
    const [imgSrc, setImgSrc] = useState(src);
    const [errored, setErrored] = useState(false);

    return (
        <img
            src={imgSrc}
            alt={alt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={() => {
                if (!errored) {
                    setImgSrc("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80");
                    setErrored(true);
                }
            }}
        />
    );
}
