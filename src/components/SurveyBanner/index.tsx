import React from "react";
import styles from "./styles.module.css";

const BANNER_KEY = "survey";

export default function SurveyBanner() {
	const [isOpen, setIsOpen] = React.useState(false);

	React.useLayoutEffect(() => {
		const bannerKey = localStorage.getItem(BANNER_KEY);
		if (bannerKey === null) {
			setIsOpen(true);
		}
	}, []);

	function handleCloseClick() {
		localStorage.setItem(BANNER_KEY, "true");
		setIsOpen(false);
	}

	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.surveyBanner}>
			<div>
				We are looking for feedback. The first 5 participants will get a
				free premium license. Click&nbsp;
				<a
					href="https://forms.gle/aUUEKofz5uE26xaN7"
					data-umami-event="Feedback survey button"
				>
					here
				</a>
				<span> for more information.</span>
			</div>
			<button
				className={styles.closeButton}
				onClick={handleCloseClick}
			></button>
		</div>
	);
}
