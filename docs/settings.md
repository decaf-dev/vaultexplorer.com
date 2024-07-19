---
sidebar_label: "Settings"
sidebar_position: 6
title: Settings
---

## General

### File interaction

When file interaction is set to `Click on content`, the entire view content will be clickable. A hover effect will appear when moving the mouse over a view item.

When file interaction is to set to `Click on title`, only the title will be clickable. This makes the title display as a hyperlink.

### File icons

When enabled, files icons will be displayed next to file names.

Vault Explorer uses the [Lucide](https://lucide.dev) icon set used by Obsidian

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

### Title wrapping

| Name         | Description                             |
| ------------ | --------------------------------------- |
| `Normal`     | Don't break words to make the title fit |
| `Break-word` | Break words to make the text fit.       |

When **Normal** is selected, text that overflows will be truncated with ellipsis `...`

**Break-word** is useful if you have long titles without spaces, such as timestamps or UUIDs.

## Filters

All filters may be enabled or disabled.

When a filter is disabled, it will not be displayed above the view.

## Views

All views may be enabled or disabled.

When a view is disabled, it will not be displayed in the view tab list.

:::note
Unimplemented views are disabled by default.
:::

## Built-In Properties

### Favorite property

The property used to mark a note as a favorite. This is used by the [favorite filter](/docs/filters/favorite-filter/).

:::note
The setting dropdown only displays **checkbox** properties.
:::

### URL property

The property used to store the URL of a file. When this setting has a property selected, a link button will appear for cards in the [grid view](/docs/views/grid/)

:::note
The setting dropdown only displays **text** properties.
:::

### Image URL property

The property used to store the image URL of a file. When this setting has a property selected, an image will appear in the cover of a grid card.

This property takes precendence over the url property when the grid card displays a cover image.

:::note
The setting dropdown only displays **text** properties.
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

:::note
The setting dropdown only displays **date** or **datetime** properties.
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

:::note
The setting dropdown only displays **date** or **datetime** properties.
:::

## Custom Properties

TODO

## Updates

### Enable clock updates

The plugin will automatically update time values every minute, ensuring that the timestamp filter uses the most current time values. As a result, the Vault Explorer view will refresh every minute.

Disable this setting if you do not want the view to update every minute.

## Premium

### License key

A license key is used to activate [premium features](/docs/premium/) on a device. Once you use a license key for a vault, you will have premium features activated on any other vaults that you use on the same device.

:::info
If you use Obsidian sync, you will need to enter your license key on each device
:::

## Debugging

### Log level

The log level will filter messages displayed in the developer console.

The level is set to **Warn** by default. This means that log messages at level **Warn** or **Error** will be displayed in the console.

If you want to see more log messages for debugging change the level to **Debug** or **Trace**.

When the log level is **Off**, no messages from the Vault Explorer plugin will appear in the console besides messages related to migration of settings on plugin startup.
