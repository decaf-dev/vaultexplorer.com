import React from "react";

export default function PremiumButton(): JSX.Element {
	return (
		<a
			className="button button--primary"
			href="https://ko-fi.com/decaf_dev/shop"
			target="_blank"
			rel="noopener"
			data-umami-event="Buy a license button"
		>
			Buy a license
		</a>
	);
}
