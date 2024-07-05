import React from 'react';
import FeedbackModal from "@site/src/components/FeedbackModal";

// Default implementation, that you can customize
export default function Root({children}) {

  return(
		<>
			{children}
			<FeedbackModal/>
		</>
	);
}
