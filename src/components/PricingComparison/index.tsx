import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

enum LicenseType {
	CASUAL,
	PREMIUM,
}

interface TierItem {
	id: LicenseType;
	title: string;
	description: string;
	price: number;
	priceDescription: string;
	url?: string;
}

interface FeatureItem {
	title: string;
	available: LicenseType[];
	url: string;
}

const TierList: TierItem[] = [
	{
		id: LicenseType.CASUAL,
		title: "Basic",
		price: 0,
		description: "For casual users",
		priceDescription: "No license required",
	},
	// {
	// 	id: LicenseType.LITE,
	// 	title: "Lite",
	// 	description: "For users who prefer a flexible, month-to-month plan",
	// 	price: 3.99,
	// 	priceDescription: "Monthly subscription",
	// 	url: "https://ko-fi.com/summary/4d6664d3-b7f5-4163-b30f-c53949cee1ba",
	// },
	{
		id: LicenseType.PREMIUM,
		title: "Premium",
		// description:
		// 	"For users who want lifetime access without recurring fees. ",
		description: "For users who want lifetime access to premium features",
		priceDescription: "One time payment",
		price: 19,
		url: "https://ko-fi.com/s/d26f793688",
	},
];

const FeatureList: FeatureItem[] = [
	{
		title: "Grid view",
		available: [LicenseType.CASUAL, LicenseType.PREMIUM],
		url: "/docs/views/grid",
	},
	{
		title: "List view",
		available: [LicenseType.CASUAL, LicenseType.PREMIUM],
		url: "/docs/views/list",
	},
	{
		title: "Feed view",
		available: [LicenseType.PREMIUM],
		url: "/docs/views/feed",
	},
	{
		title: "Filter by property",
		available: [LicenseType.CASUAL, LicenseType.PREMIUM],
		url: "/docs/filters/custom-filter/#property",
	},
	{
		title: "Filter by file name",
		available: [LicenseType.CASUAL, LicenseType.PREMIUM],
		url: "/docs/filters/custom-filter/#file-name",
	},
	{
		title: "Filter by folder name",
		available: [LicenseType.CASUAL, LicenseType.PREMIUM],
		url: "/docs/filters/custom-filter/#folder-name",
	},
	{
		title: "Filter by content",
		available: [LicenseType.PREMIUM],
		url: "/docs/filters/custom-filter/#content",
	},
];

function Tier({
	id,
	title,
	description,
	priceDescription,
	price,
	url,
}: TierItem) {
	return (
		<div className={styles.tierCard}>
			<div className={styles.tierCard__title}>{title}</div>
			<div className={styles.tierCard__description}>{description}</div>
			<div className={styles.tierCard__price}>
				{price !== 0 ? `$${price}` : "Free"}
			</div>
			<div className={styles.tierCard__priceDescription}>
				{priceDescription}
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
