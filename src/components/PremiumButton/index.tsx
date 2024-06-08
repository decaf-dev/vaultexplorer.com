import React from "react";
import styles from './styles.module.css';

export default function PremiumButton(): JSX.Element {
	return (
		<a
			href="https://ko-fi.com/decaf_dev/shop"
			target="_blank"
			rel="noopener"
		>
			<button className={styles.premium}>Buy a license</button>
		</a>
	);
}