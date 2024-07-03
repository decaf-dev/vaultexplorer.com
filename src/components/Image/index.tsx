import React from "react";

interface Props {
    src: string;
    alt: string;
    width?: string;
    maxWidth?: string;
}

export default function Image({src, alt, width, maxWidth}: Props): JSX.Element {
    const imageSrc = require(`@site/docs/${src}`).default;

	return (
        <img src={imageSrc} style={{ width: width ? width : "100%", maxWidth}} alt={alt}/>
	);
}