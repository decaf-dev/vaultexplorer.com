import React from "react";
import styles from "./styles.module.css";
import packageJson from "../../../package.json";
import { isVersionLessThan } from "./utils";

const BANNER_KEY = "version";

export default function UpdateBanner() {
	const [isOpen, setIsOpen] = React.useState(false);

	React.useLayoutEffect(() => {
		const bannerKey = localStorage.getItem(BANNER_KEY);
		if (
			bannerKey === null ||
			isVersionLessThan(bannerKey, packageJson.version)
		) {
			setIsOpen(true);
		}
	}, []);

	function handleCloseClick() {
		localStorage.setItem(BANNER_KEY, packageJson.version);
		setIsOpen(false);
	}

	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.banner}>
			<div>
				<a href="https://github.com/decaf-dev/obsidian-vault-explorer/releases">
					{packageJson.version}
				</a>
				<span> is now available.</span>
				&nbsp;🎉&nbsp;
				<span>Check out the updated documentation.</span>
			</div>
			<button
				className={styles.closeButton}
				onClick={handleCloseClick}
			></button>
		</div>
	);
}
