---
sidebar_label: "Favorite filter"
sidebar_position: 2
title: Favorite filter
---

import Image from "@site/src/components/Image";

The favorite filter tells a view to only display files that have been labeled as a favorite.

<Image src="filters/img/favorite-filter.png" alt="Favorite filter" maxWidth="350px"/>

<br/>
<br/>

In order for this filter to work, you must choose a property to filter by. You may configure this by updating the [favorite property setting](/docs/settings/#favorite-property).

## Add to favorites

To label a file as a favorite, right click on it and select **Add to favorites**

<Image src="filters/img/add-to-favorites.png" alt="Add to favorites" maxWidth="900px"/>

## Remove from favorites

To unlabel a file as a favorite, right click on it and select **Remove from favorites**

<Image src="filters/img/remove-from-favorites.png" alt="Remove from favorites" maxWidth="900px"/>

## Storage

Markdown files have their favorite data stored in the configured frontmatter property.

Non-markdown files have their favorite data stored in a file in the plugin configuration folder. By default this will be `.vaultexplorer/favorites.json`.
