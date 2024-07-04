---
sidebar_label: 'Quickstart'
sidebar_position: 1
title: Quickstart
---

import Video from "@site/src/components/Video";
import Image from "@site/src/components/Image";

<span className="large-text">Welcome to the Vault Explorer documentation.</span>
<br/>
<br/>
This tutorial will cover a few basics to help you get started with the plugin.

## Installation
If you haven't done so already, install the [Vault Explorer plugin](https://obsidian.md/plugins?id=vault-explorer) from the Obsidian plugin store.

## Open the explorer view

Open the explorer view by clicking on the compass button in the left sidebar.

You may also run **Open vault explorer view** from the [command palette](https://help.obsidian.md/Plugins/Command+palette).

<Image src="img/open-by-button.png" alt="Open by button" maxWidth="300px"/>

<br/>
<br/>

<Image src="img/open-by-command-palette.png" alt="Open by command palette" maxWidth="600px"/>

## Change views

Views are different visual formats for displaying your vault files. When you first open the explorer view, the [Grid view](/docs/views/grid) is active.

To change to another view, click one of the view tabs.

<Video name="view-tabs.mov" maxWidth="500px"/>

<br/>
<br/>

## Reorder view tabs

To reorder the view tabs, drag one tab and drop it onto another tab.

<Video name="view-tabs-reorder.mov" maxWidth="500px"/>

## Filter by favorites

Filters allow you to control what is displayed in a view.

The [favorite filter](/docs/filters/favorite-filter) allows you to only display notes that contain a favorite property with a value of **true**.

Let's choose a property to use with the favorite filter.

1. Open the plugin settings by clicking the gear icon in the upper right corner
2. Scroll down to the **Built-in Properties** section
3. Find the **Favorite property** setting
4. Click the dropdown and change the value from **Select a property** to the property that you want to use

If no properties are listed, please add a [checkbox property](https://help.obsidian.md/Editing+and+formatting/Properties) to one of your notes. This property will then appear in the dropdown list.

<Video name="favorite-filter-1.mov"/>

<br/>
<br/>

Now go to back to the explorer view, and click the favorites checkbox. The view will only display notes that have the selected favorite property with a value of **true**.

:::info
The favorite filter is applied on top of other filters such as the timestamp filter or the custom filter.
:::

<br/>

<Video name="favorite-filter-2.mov"/>


## Add a custom filter group

The [custom filter](/docs/filters/custom-filter) gives you granular control over what is displayed in a view. The custom filter is organized into filter groups and filter rules. A filter group can have many filter rules.

:::note
The creation of this note is arbitrary. It is only used to showcase the custom filter feature.
:::

Start by creating a note. Add a **tags** property with a **test** tag.


<Video name="custom-filter-1.mov"/>

<br/>
<br/>

Now add a filter group.

1. Click the button with 3 vertical dots (Change custom filter)

<Image src="img/open-custom-filter.png" alt="Open custom filter" maxWidth="400px"/>


2. Click the button on the left with a plus (Add filter group)

<Image src="img/add-filter-group.png" alt="Add filter group" maxWidth="400px"/>

<br/>
<br/>

You will see that a filter rule was added when the filter group was added.

Let's configure this rule.

1. Click the property type dropdown. Change it from **text** to **list**

<Image src="img/property-type.png" alt="Property type dropdown" maxWidth="350px"/>

2. Then, click the property name dropdown. Change it from **select a property** to **tags**

<Image src="img/property-name.png" alt="Property name dropdown" maxWidth="350px"/>

3. Enter **test** into the input field. You do not need to include a hash mark `#`.

<Image src="img/property-value.png" alt="Property value input" maxWidth="350px"/>

4. Finally, click outside of the modal.

<br/>

Click the filter group to enable it. With the filter group enabled, you will only see notes that have a **tags** property containing a **test** tag.

Click the filter group again to disable it.

<Video name="custom-filter-2.mov" maxWidth="500px"/>

## Switch between filter groups

Now let's add a few more filter groups.

1. Click the button with 3 vertical dots (Change custom filter)
2. Click the button on the left with a plus (Add filter group) a few times
3. Click outside of the modal

Now click on a group to enable it. Any other active group will be disabled.

<br/>

<Video name="filter-groups-switch.mov"/>

## Reorder filter groups

To reorder filter groups, drag one group and drop it onto another group.

<Video name="filter-group-reorder-1.mov" maxWidth="500px"/>

<br/>
<br/>

You may also reorder filter groups from within the custom filter modal.

<Video name="filter-group-reorder-2.mov" maxWidth="500px"/>


## Set a filter group as sticky

A sticky group is a group that remains enabled even when another group becomes enabled.

Let's set our filter group as a sticky group.

1. Hold `ctrl` (Windows/Linux) or `cmd` (Mac)
2. Click the first group to set it as a sticky group

Now click other groups to see that the sticky group remains enabled.

<Video name="sticky-filter-group-1.mov" maxWidth="400px"/>

## Set a filter group as normal

Now let's set the sticky filter group as a normal group.

1. Hold `ctrl` (Windows/Linux) or `cmd` (Mac)
2. Click the sticky group to set it as a normal group

<Video name="sticky-filter-group-2.mov" maxWidth="400px"/>

## Congratulations

Congratulations! You have just learned the basics of using the Vault Explorer plugin.

## What's next?
- Learn about [custom filter rule types](/docs/filters/custom-filter#filter-rule-types)
- Check out the [feed view](/docs/views/feed-view)
- Learn how to [filter by tags in both frontmatter and content body](/docs/guides/filter-by-all-tags)
- Learn about [Premium](/docs/premium)