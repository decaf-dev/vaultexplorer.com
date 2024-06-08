import React from "react";
import styles from './styles.module.css';

export default function PremiumButton(): JSX.Element {
	return (
		<a
			href="https://ko-fi.com/s/d26f793688"
			target="_blank"
			rel="noopener"
		>
			<button className={styles.premium}>Buy a license</button>
		</a>
	);
}