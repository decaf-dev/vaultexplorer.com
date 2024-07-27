---
sidebar_label: "Grid"
sidebar_position: 1
title: Grid
---

import Image from "@site/src/components/Image";

The grid view displays vault files as cards in a grid. The grid will expand to as many columns as the screen size allows.

<Image src="views/img/grid-view.png"/>

## Cover image

### Default

By default, the grid card will display a gray background with a file icon as a placeholder.

<Image src="views/img/image-placeholder.png" alt="Cover image placeholder" maxWidth="350px"/>

### Image file

If a vault file has an image extension (`.jpeg`, `.png`, etc). The file image will be displayed as the cover image.

### Automatic image loading

If [automatic cover image detection](/docs/settings/#automatic-cover-image-detection) is active, the plugin will automatically load a cover image.

**Detection priority**

| Name        | Priority | Area                   |
| ----------- | -------- | ---------------------- |
| WikiLink    | 1        | Frontmatter or content |
| Image URL   | 2        | Frontmatter only       |
| Reguarl URL | 3        | Frontmatter only       |

**WikiLink**

```markdown
---
cover: [[seagull-bird-animal-nature-162992.jpeg]]
---
```

**Image URL**

```markdown
---
url: https://images.pexels.com/photos/162292/seagull-bird-animal-nature-162292.jpeg?auto=compress&cs=tinysrgb&w=800
---
```

**Regular URL**

```markdown
---
url: https://vaultexplorer.com
---
```

### Social media image

A regular URL may have a _social media image_. This is a public image that is used to represent the website or article on social media sites. To find this URL, the plugin will preform a `GET` request to fetch the entire website. The found url is stored in a cache for quick access.

Cached social media images expire after 1 week. If a website updates their social media image, you will need to wait 1 week for the updated image to appear in your cover image.

You may force the social media image to update by clearing the image cache.

1. Open the plugin settings by clicking the gear icon in the upper right corner
2. Scroll down to the **Data** section
3. Find the **Social media image** setting
4. Click the **Clear cache** button

<Image src="views/img/clear-social-media-cache.png" alt="Clear cache" maxWidth="900px"/>
