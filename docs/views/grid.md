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

```markdown
---
url: https://images.pexels.com/photos/15238854/pexels-photo-15238854/free-photo-of-ruins-of-ancient-greek-amphitheatre.jpeg?auto=compress&cs=tinysrgb&w=800
---
```

<Image src="views/img/grid-card-url.png" maxWidth="350px"/>

## Tags

Tags are displayed for a markdown file. When you click on a tag, the search view will open and filter by that tag.

<Image src="views/img/grid-tags.png" maxWidth="350px"/>

<br/>
<br/>

<Image src="views/img/search-tag.png" maxWidth="250px"/>

## Cover image

### Default

By default, the grid card will display a gray background with a file icon as a placeholder.

<Image src="views/img/image-placeholder.png" alt="Cover image placeholder" maxWidth="350px"/>

### Image file

If a vault file has an image extension, the file image will be displayed as the cover image.

### Automatic image loading

If [automatic cover image detection](/docs/settings/#automatic-cover-image-detection) is enabled, the plugin will automatically load a cover image.

**Detection priority**

| Name          | Priority | Area                   |
| ------------- | -------- | ---------------------- |
| WikiLink      | 1        | Frontmatter or content |
| Image URL     | 2        | Frontmatter only       |
| Non-image URL | 3        | Frontmatter only       |

#### WikiLink

```markdown
---
cover: [[seagull-bird-animal-nature-162992.jpeg]]
---
```

#### Image URL

```markdown
---
url: https://images.pexels.com/photos/162292/seagull-bird-animal-nature-162292.jpeg?auto=compress&cs=tinysrgb&w=800
---
```

#### Non-image URL

```markdown
---
url: https://vaultexplorer.com
---
```

### Social media image

A non-image URL may have a _social media image_. This is a public image that repesents the website or article on social media sites. To find this URL, the plugin will preform a `GET` request to the URL and parse the social media URL. The social media image URL is stored in a cache for future access.

You can disable this by toggling the [load social media image](/docs/settings/#load-social-media-image) setting.

Cached social media image URLs expire after 1 week. If a website frequently updates their social media image, you will need to wait 1 week for the updated image to appear in the cover image.

You may force an update to the social media image by [clearing](/docs/settings/#social-media-image) the image cache.
