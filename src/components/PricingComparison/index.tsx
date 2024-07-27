import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface FeatureItem {
	title: string;
	available: string[];
	url: string;
}

interface TierItem {
	id: string;
	title: string;
	description: string;
	price: number;
	url?: string;
}

const FeatureList: FeatureItem[] = [
	{
		title: "Grid view",
		available: ["casual", "basic", "extended"],
		url: "/docs/views/grid",
	},
	{
		title: "List view",
		available: ["casual", "basic", "extended"],
		url: "/docs/views/list",
	},
	{
		title: "Feed view",
		available: ["basic", "extended"],
		url: "/docs/views/feed",
	},
	{
		title: "Filter by property",
		available: ["casual", "basic", "extended"],
		url: "/docs/filters/custom-filter/#property",
	},
	{
		title: "Filter by file name",
		available: ["casual", "basic", "extended"],
		url: "/docs/filters/custom-filter/#file-name",
	},
	{
		title: "Filter by folder name",
		available: ["casual", "basic", "extended"],
		url: "/docs/filters/custom-filter/#folder-name",
	},
	{
		title: "Filter by content",
		available: ["basic", "extended"],
		url: "/docs/filters/custom-filter/#content",
	},
];

const TierList: TierItem[] = [
	{
		id: "casual",
		title: "Casual",
		price: 0,
		description: "For casual users",
	},
	{
		id: "basic",
		title: "Basic",
		price: 15,
		description: "For power users",
		url: "https://ko-fi.com/s/a70932e3f4",
	},
	{
		id: "extended",
		title: "Extended",
		description: "For power users",
		price: 20,
		url: "https://ko-fi.com/s/d26f793688",
	},
];

function Tier({ id, title, description, price, url }: TierItem) {
	return (
		<div className={styles.tierCard}>
			<div className={styles.tierCard__title}>{title}</div>
			<div className={styles.tierCard__description}>{description}</div>
			<div className={styles.tierCard__price}>
				{price !== 0 ? `$${price}` : "Free"}
			</div>
			<div className={styles.tierCard__priceDescription}>
				{url !== undefined ? "One time payment" : "No license required"}
			</div>
			{url !== undefined ? (
				<a
					className="button button--primary"
					data-umami-event={`${title} button`}
					href={url}
					target="_blank"
					rel="noopener"
				>
					Get {title}
				</a>
			) : (
				<div className={styles.tierCard__buttonPlaceholder} />
			)}
			<div className={styles.tierCard__featuresTitle}>Features</div>
			<div className={styles.tierCard__featuresContainer}>
				{FeatureList.map((feature, idx) => {
					const { title } = feature;
					return (
						<div
							key={idx}
							className={clsx(
								styles.tierCardFeature,
								feature.available.includes(id)
									? styles.tierCard__feature_available
									: styles.tierCard__feature_unavailable
							)}
						>
							<span
								className={clsx(
									"faicon",
									feature.available.includes(id)
										? styles.tierCard__featureIcon_available
										: styles.tierCard__featureIcon_unavailable
								)}
							></span>
							<a
								href={feature.url}
								target="_blank"
								rel="noopener"
								className={clsx(
									styles.tierCard__featureTitle,
									feature.available.includes(id)
										? styles.tierCard__featureTitle_available
										: styles.tierCard__featureTitle_unavailable
								)}
							>
								{title}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default function PricingComparison(): JSX.Element {
	return (
		<div className={styles.pricingComparison}>
			{TierList.map((props, idx) => (
				<Tier key={idx} {...props} />
			))}
		</div>
	);
}
