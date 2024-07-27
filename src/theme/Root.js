import React from "react";
import FeedbackModal from "@site/src/components/FeedbackModal";
import Banner from "@site/src/components/Banner";
import { useLocation } from "react-router-dom";

//See: https://docusaurus.io/docs/swizzling
export default function Root({ children }) {
	const ScrollToHashElement = () => {
		const { hash } = useLocation();

		React.useEffect(() => {
			if (hash) {
				const element = document.getElementById(hash.substring(1));
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}
		}, [hash]);

		return null;
	};

	return (
		<>
			<ScrollToHashElement />
			<Banner />
			{children}
			<FeedbackModal />
		</>
	);
}
