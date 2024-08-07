import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "Vault Explorer",
	tagline: "Explore your vault in visual format",
	favicon: "img/favicon.gif",
	trailingSlash: true,

	// Set the production url of your site here
	url: "https://vaultexplorer.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "decaf-dev", // Usually your GitHub org/user name.
	projectName: "vaultexplorer.com", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	scripts: [
		{
			src: "https://analytics.vaultexplorer.com/script.js",
			async: true,
			defer: true,
			"data-website-id": "8edf4fa1-a9cb-4003-a6fb-eb0fcef3d4f2",
		},
		// <script defer src="https://analytics.vaultexplorer.com/script.js" data-website-id="8edf4fa1-a9cb-4003-a6fb-eb0fcef3d4f2"></script>
	],
	plugins: [require.resolve("docusaurus-lunr-search")],

	presets: [
		[
			"classic",
			{
				docs: {
					versions: {
						current: {
							banner: "none",
						},
					},
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/decaf-dev/vaultexplorer.com/tree/main/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//   'https://github.com/decaf-dev/vaultexplorer.com/tree/main/',
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/social-card.png",
		navbar: {
			// title: 'Vault Explorer',
			logo: {
				alt: "Vault Explorer logo",
				src: "img/logo-light.svg",
				srcDark: "img/logo-dark.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "docsSidebar",
					position: "left",
					label: "Docs",
				},
				// { to: '/blog', label: 'Blog', position: 'left' },
				{
					href: "https://github.com/decaf-dev/obsidian-vault-explorer",
					position: "right",
					className: "fa-brands fa-github fa-xl",
				},
			],
		},
		footer: {
			style: "dark",
			links: [],
			copyright: `Copyright © ${new Date().getFullYear()} DecafDev. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
