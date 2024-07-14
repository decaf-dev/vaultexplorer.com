import React from "react";
import FeedbackModal from "@site/src/components/FeedbackModal";
import Banner from "@site/src/components/Banner";

//See: https://docusaurus.io/docs/swizzling
export default function Root({ children }) {
	return (
		<>
			<Banner />
			{children}
			<FeedbackModal />
		</>
	);
}
