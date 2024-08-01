---
sidebar_label: "Settings"
sidebar_position: 6
title: Settings
---

## General

### Wrap filter groups

When enabled, filter groups will be wrapped instead. This is only relevant when you resize the filter group container to be small enough that the horizontal scroll bar appears.

### File icons

When enabled, files icons will be displayed next to file names.

Vault Explorer uses the [Lucide icons](https://lucide.dev) used by Obsidian.

| File extension | Lucide id          |
| -------------- | ------------------ |
| `excalidraw`   | Custom icon        |
| `md`           | `file`             |
| `canvas`       | `layout-dashboard` |
| `zip`          | `file-archive`     |
| `png`          | `file-image`       |
| `jpg`          | `file-image`       |
| `jpeg`         | `file-image`       |
| `gif`          | `file-image`       |
| `webp`         | `file-image`       |
| `svg`          | `file-image`       |
| `avif`         | `file-image`       |
| `bpm`          | `file-image`       |
| `mp3`          | `file-audio`       |
| `wav`          | `file-audio`       |
| `aac`          | `file-audio`       |
| `flac`         | `file-audio`       |
| `ogg`          | `file-audio`       |
| `wma`          | `file-audio`       |
| `alac`         | `file-audio`       |
| `aiff`         | `file-audio`       |
| `mp4`          | `file-video`       |
| `avi`          | `file-video`       |
| `mkv`          | `file-video`       |
| `mov`          | `file-video`       |
| `wmv`          | `file-video`       |
| `flv`          | `file-video`       |
| `webm`         | `file-video`       |
| `mpeg`         | `file-video`       |
| `m4v`          | `file-video`       |
| `3gp`          | `file-video`       |
| `xls`          | `file-spreadsheet` |
| `xlsx`         | `file-spreadsheet` |
| `xml`          | `file-code`        |
| `json`         | `file-code`        |
| `ppt`          | `images`           |
| `pptx`         | `images`           |
| `doc`          | `file-type`        |
| `docx`         | `file-type`        |
| `pdf`          | `file-text`        |
| `txt`          | `file-text`        |

### Page size

The number of items to display per page.

-   10
-   25
-   50
-   100
-   250
-   500

:::warning
Increasing the page size will cause longer render times and potential lag
:::

<!-- ### Title wrapping

| Name         | Description                             |
| ------------ | --------------------------------------- |
| `Normal`     | Don't break words to make the title fit |
| `Break-word` | Break words to make the text fit.       |

When **Normal** is selected, text that overflows will be truncated with ellipsis `...`

**Break-word** is useful if you have long titles without spaces, such as timestamps or UUIDs. -->

## Filters

All filters may be enabled or disabled.

When a filter is disabled, it will not be displayed above the view.

## Views

All views may be enabled or disabled.

When a view is disabled, it will not be displayed in the view tab list.

:::info
Unimplemented views are disabled by default.
:::

## Grid view

### Cover image sources

This setting allows you to configure the loading order of cover images. By default, the [image property](/docs/settings#image-property) and [url property](/docs/settings#url-property) are loaded first. You may change this order by dragging one row above another.

To toggle a source, you may click the row.

### Load social media image

When this setting is enabled, social media images will be loaded.

## List view

### Tags

When enabled, tags will display for a markdown file.

## Feed view

### Remove H1

When enabled, level 1 headers are removed from the file content before display.

### Collapse style

When you press the `Enter` or `return` key on your keyboard, a new line character is inserted. This setting will remove most of those new line characters in file content, so that content is easier to read at a glance.

If you want the content fully collapsed, you can select the **No new lines** option. Otherwise, you can select the **No extra lines** option.

### Large screen line clamp

The number of lines of content to display on large sized screens. A large screen is `>= 1024px`.

:::info
The default value is 5
:::

### Medium screen line clamp

The number of lines of content to display on medium sized screens. A medium screen is `>= 600px` and `< 1024px`.

:::info
The default value is 3
:::

### Small screen line clamp

The number of lines of content to display on small sized screens. A small screen is `< 600px`.

:::info
The default value is 2
:::

## Built-In Properties

### Favorite property

The property used to mark a note as a favorite. This is used by the [favorite filter](/docs/filters/favorite-filter/).

:::info
The property dropdown only displays **checkbox** properties.
:::

### Image property

The property used to store the image of a markdown file. This property is referred as the `Image property` in the [cover images sources setting](/docs/settings#cover-image-sources).

:::info
The property dropdown only displays **text** properties.
:::

### URL property

The property used to store the URL of a markdown file. When this setting has a property selected, a link button may appear for cards in the [grid view](/docs/views/grid/).

:::info
The property dropdown only displays **text** properties.
:::

### Modification date property

The [timestamp filter](/docs/filters/timestamp-filter/) filters vault files based on their modification date. By default, the file system's modification date is used. If you prefer to use an Obsidian property, you can select it from the dropdown menu in this setting.

For example, if you have a file that uses the `modification` property name. You should choose `modification` from the dropdown list.

```markdown
---
modification: 2020-01-01T23:00:00
---
```

If the selected property does not exist for a file, the file system's modification date will be used. This applies to files such as images, videos, and PDFs.

:::info
The property dropdown only displays **date** or **datetime** properties.
:::

### Creation date property

The [timestamp filter](/docs/filters/timestamp-filter/) filters vault files based on their creation date. By default, the file system's creation date is used. If you prefer to use an Obsidian property, you can select it from the dropdown menu in this setting.

For example, if you have a file that uses the `creation` property name. You should choose `creation` from the dropdown list.

```markdown
---
creation: 2020-01-01T23:00:00
---
```

If the selected property does not exist for a file, the file system's creation date will be used. This applies to files such as images, videos, and PDFs.

:::info
The property dropdown only displays **date** or **datetime** properties.
:::

## Custom Properties

You may configure up to 3 custom properties. When in the grid view, each configured property will display on a grid card.

:::info
The property dropdown only displays **text** properties.
:::

## Updates

### Clock updates

When enabled, the plugin will automatically update time values every minute, ensuring that the timestamp filter uses the most current time values. This will cause the Vault Explorer view to refresh every minute.

## Premium

### License key

A license key is used to activate [premium features](/docs/premium/) on a device. Once you use a license key for a vault, premium features will be enabled on any other vaults that you use on the same device.

:::info
If you use Obsidian sync, you will need to enter your license key on each device
:::

## Debugging

### Log level

The log level will filter messages displayed in the developer console.

The level is set to **Warn** by default. This means that log messages at level **Warn** or **Error** will be displayed in the console.

If you want to see more log messages for debugging change the level to **Debug** or **Trace**.

When the log level is **Off**, no messages from the Vault Explorer plugin will appear in the console besides messages related to migration of settings on plugin startup.

## Data

### Config folder

The config folder stores metadata related to the plugin.

:::warning
If you change this path you will need to restart Obsidian
:::

#### Files

| Name             | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| `favorites.json` | Stores favorite information for non-markdown files |

### Social media image cache

Social media images are stored in the IndexedDB of Electron. This cache is shared between all vaults.

If you would like to clear this cache, you may click the **Clear cache** button. After clearing the cache, please close and reopen the Vault Explorer view for images to reload.
