import React from "react";

interface Props {
	name: string;
	width?: string;
	maxWidth?: string;
}

const BUNNY_CDN_URL = "https://vaultexplorer.b-cdn.net";

export default function Video({ name, width, maxWidth }: Props): JSX.Element {
	const src = `${BUNNY_CDN_URL}/${name}`;

	return (
		<video
			src={src}
			controls
			style={{ width: width ? width : "100%", maxWidth }}
		>
			Your browser does not support the video tag.
		</video>
	);
}
