---
sidebar_label: "Grid"
sidebar_position: 1
title: Grid
---

import Image from "@site/src/components/Image";

The grid view displays vault files as cards in a grid. The grid will expand to as many columns as the screen size allows.

<Image src="views/img/grid-view.png"/>

## Link

When you have a URL property and have configured the [URL property](/docs/settings/#url-property) setting, a link button will appear in the grid card. Clicking the link will open the URL in a new browser tab.

<br/>

<Image src="views/img/url-property-1.png" maxWidth="900px"/>

<br/>
<br/>

```markdown
---
url: https://images.pexels.com/photos/15238854/pexels-photo-15238854/free-photo-of-ruins-of-ancient-greek-amphitheatre.jpeg?auto=compress&cs=tinysrgb&w=800
---
```

<Image src="views/img/url-property-2.png" maxWidth="350px"/>

## Properties

When you have a text property and one of the [custom property](/docs/settings/#custom-properties) settings configured, a text property button will appear in the grid card.

When you click on a property, the search view will open and filter by that property.

<br/>

<Image src="views/img/text-property-1.png" maxWidth="900px"/>

<br/>
<br/>

```markdown
---
comments: Went here in 2019
---
```

<Image src="views/img/text-property-2.png" maxWidth="350px"/>

<br/>
<br/>

<Image src="views/img/text-property-3.png" maxWidth="350px"/>

## Tags

Tags are displayed for a markdown file. When you click on a tag, the search view will open and filter by that tag.

<Image src="views/img/grid-tags.png" maxWidth="350px"/>

<br/>
<br/>

<Image src="views/img/search-tag.png" maxWidth="250px"/>

## Cover image

By default, the grid card will display a gray background with a file icon as a placeholder.

<Image src="views/img/image-placeholder.png" alt="Cover image placeholder" maxWidth="350px"/>

### Image file

If a vault file has an image extension, the file image will be displayed as the cover image.

### Cover image sources

The [cover image sources](/docs/settings#cover-image-sources) setting is used to configure cover image loading. The order of the sources determines how cover images are loaded.

Consider the default sources:

<Image src="views/img/image-sources.png" maxWidth="900px"/>

For these sources the plugin will:

1. Look for a **wiki link** or **URL** in the [image property](/docs/settings#image-property). If the property isn't configured, the property doesn't exist, or no link is found, then move on.
2. Look for a **wiki link** or **URL** in the [URL property](/docs/settings#url-property). If the property isn't configured, the property doesn't exist, or no link is found, then move on.
3. Look for a **wiki link** or **URL** in any other property in the frontmatter. If no other properties exist, or no link is found, then move on.
4. Look for for first **internal embed** or **external embed** in the body. If no link exists, then move on.
5. Display a default placeholder

#### Cover image links

Here are some examples of each type of link

##### Wiki link

```markdown
---
image: [[seagull-bird-animal-nature-162992.jpeg]]
---
```

##### URL

```markdown
---
url: https://images.pexels.com/photos/162292/seagull-bird-animal-nature-162292.jpeg?auto=compress&cs=tinysrgb&w=800
---
```

##### Internal embed

```markdown
![[seagull-bird-animal-nature-162992.jpeg]]
```

##### External embed

```markdown
![](https://images.pexels.com/photos/162292/seagull-bird-animal-nature-162292.jpeg?auto=compress&cs=tinysrgb&w=800)
```

### Social media image

A non-image URL may have a _social media image_. This is a public image that repesents the link on social media sites.

When the [load social media image](/docs/settings/#load-social-media-image) setting is enabled, the plugin will make a `GET` request to the image URL and look for a social media URL. If a URL is found, the image will be loaded and the URL will be cached for future access.

Example non-image URL

```markdown
---
url: https://vaultexplorer.com
---
```

Example social media URL

```markdown
https://vaultexplorer.com/img/social-card.png
```

Cached social media image URLs expire after 1 week.

You may force an update to the social media image by [clearing](/docs/settings/#social-media-image-cache) the social media image cache.
