import React from "react";
import { useLocation } from "react-router-dom";
import UpdateBanner from "@site/src/components/UpdateBanner";
import SurveyBanner from "../components/SurveyBanner";

//See: https://docusaurus.io/docs/swizzling
export default function Root({ children }) {
	const ScrollToHashElement = () => {
		const { hash } = useLocation();

		React.useEffect(() => {
			if (hash) {
				const element = document.getElementById(hash.substring(1));
				if (element) {
					element.scrollIntoView({ behavior: "instant" });
				}
			}
		}, [hash]);

		return null;
	};

	return (
		<>
			<ScrollToHashElement />
			<UpdateBanner />
			<SurveyBanner />
			{children}
			{/* <FeedbackModal /> */}
		</>
	);
}
