---
sidebar_label: 'Quickstart'
sidebar_position: 1
title: Quickstart
---

<span className="large-text">Welcome to the Vault Explorer documentation. This tutorial will cover a few basics to help you get started with the plugin.</span>

## Installation
If you haven't done so already, install the [Vault Explorer plugin](https://obsidian.md/plugins?id=vault-explorer) from the community plugin store.

## Open the explorer view

Open the explorer view by clicking on the compass icon in the left-hand sidebar.

You may also run **Open vault explorer view** from the [command palette](https://help.obsidian.md/Plugins/Command+palette).

<img src={require("./img/open-by-button.png").default} width="300" alt="Open by button"/>

<br/>
<br/>

<img src={require("./img/open-by-command-palette.png").default} width="500" alt="Open by command palette"/>

## Change views

Views are different visual formats for displaying your vault files. When you first open the explorer view, the [Grid view](/docs/views/grid) is active.

To change to another view, click one of the view tabs.

<video src="https://vaultexplorer.b-cdn.net/view-tabs.mov" controls style={{ maxWidth: "500px" }}>
  Your browser does not support the video tag.
</video>

<br/>
<br/>

To reorder the view tabs, drag one tab and drop it onto another tab.

<video src="https://vaultexplorer.b-cdn.net/view-tabs-reorder.mov" controls style={{ maxWidth: "500px" }}>
  Your browser does not support the video tag.
</video>

## Filter by favorites

Filters allow you to control what is displayed in a view.

The [favorite](/docs/filters/favorite-filter) filter allows you to only display notes that contain a favorite property with a value of **true**.

Let's choose a property to use with the favorite filter.

1. Open the plugin settings by clicking the gear icon in the upper right hand corner
2. Under the **Built-in Properties** section, find the **Favorite property** setting
3. Click the dropdown and select a property

If no properties are listed, please add a [checkbox property](https://help.obsidian.md/Editing+and+formatting/Properties) to one of your notes. This property will then appear in the dropdown list.

<video src="https://vaultexplorer.b-cdn.net/favorite-filter-1.mov" controls style={{ maxWidth: "100%" }}>
  Your browser does not support the video tag.
</video>

<br/>
<br/>

Now go to back to the explorer view, and click the favorites checkbox. The view will now only display notes that have the favorite property.

:::info
The favorite filter is applied on top of other filters such as the timestamp filter or the custom filter.
:::

<br/>

<video src="https://vaultexplorer.b-cdn.net/favorite-filter-2.mov" controls style={{ maxWidth: "100%" }}>
  Your browser does not support the video tag.
</video>


## Add a custom filter group

The [custom filter](/docs/filters/custom-filter) gives you granular control over what should displayed in a view. The custom filter is organized into filter groups and filter rules. A filter group can have many filter rules.

Start by creating a note. Add a **tags** property with a **test** tag.

:::note
This is an arbitrary note. It is only used to showcase the custom filter feature.
:::


<video src="https://vaultexplorer.b-cdn.net/custom-filter-1.mov" controls style={{ maxWidth: "100%" }}>
  Your browser does not support the video tag.
</video>

<br/>
<br/>

Now add a filter group.

1. Click the button with 3 vertical dots (Change custom filter)
2. Click the button on the left with a plus (Add filter group)

<video src="https://vaultexplorer.b-cdn.net/custom-filter-2.mov" controls style={{ maxWidth: "100%" }}>
  Your browser does not support the video tag.
</video>

<br/>
<br/>

You will see that a filter rule was added when the filter group was added.

Let's configure this rule.

1. Click the property type dropdown. Change it from **text** to **list**
2. Then, click the property name dropdown. Change it from **select a property** to **tags**
3. Enter **test** into the value input. You do not need to include a hash mark `#`.
4. Finally, click outside of the modal.

<video src="https://vaultexplorer.b-cdn.net/custom-filter-3.mov" controls style={{ maxWidth: "100%" }}>
  Your browser does not support the video tag.
</video>

<br/>
<br/>

Click the filter group to enable it. With the filter group enabled, you will only see notes that have a **tags** property containing a **test** tag.

Click the filter group again to disable it.

<video src="https://vaultexplorer.b-cdn.net/custom-filter-4.mov" controls style={{ maxWidth: "100%" }}>
  Your browser does not support the video tag.
</video>

## Congratulations

Congratulations! You have just learned the basics of using the Vault Explorer plugin.

## What's next?
- Learn more about [custom filter rules](/docs/filters/custom-filter#filter-rules)
- Learn about [Premium](/docs/premium)