---
sidebar_label: 'Quickstart'
sidebar_position: 1
title: Quickstart
---

Welcome to the Vault Explorer documentation. We will cover a few basics to help you get started with the plugin.

## Install the plugin

1. Navigate to the [plugin link](https://obsidian.md/plugins?id=vault-explorer)
2. When the popup appears, click **Open Obsidian**
3. In Obsidian, click **Install**
4. Finally, click **Enable**

## Open the explorer view

Open the explorer view by clicking on the compass icon in the left-hand sidebar. You may also run `Open vault explorer view` from the [command palette](https://help.obsidian.md/Plugins/Command+palette).

## Change views

Views are different visual formats for displaying your vault files. When you first open the explorer view, the [Grid view](/docs/views/grid) is active.

To change to another view, click one of the view tabs.

To reorder the tabs, drag one tab and drop it onto another tab.

## Filter by favorites

Filters allow you to control what is displayed in a view.

One of the basic filters is the [Favorite filter](/docs/filters/favorite-filter). The favorite filter allows you to only display notes that contain a favorite property with a value of `true`.

You must set a property before using the favorite filter

1. Open the plugin settings by clicking the gear icon in the upper right hand corner
2. Under the `Built-in Properties` section, find the `Favorite property` setting
3. Click the dropdown and select a property

If no properties are listed, please add a [checkbox property](https://help.obsidian.md/Editing+and+formatting/Properties) to one of your notes. This property will then appear in the dropdown list.

Now go to back to the explorer view, and click the favorites checkbox. The view will now only display notes that have the favorite property.

:::note
The favorite filter is applied on top of other filters such as the timestamp filter or the custom filter.
:::

## Create a custom filter group

The custom filter gives you granular control over what should displayed in a view. The custom filter is organized into filter groups and filter rules. A filter group can have many filter rules.

Let's start by creating a filter group.

1. Click the custom filter button. It has 3 vertical dots
2. Click the create filter group button. It has a plus icon

Now that you have a filter group, let's add a filter rule.

1. Click the add filter rule button. It has a plus icon
2. Next, click the property type dropdown. Change it from `text` to `list`
3. Then, click the property dropdown. Change it from `Select a property` to `tags`
4. Then, click the condition dropdown and change it from `contains` to `exists`

Finally, let's enable our filter group

1. Click outside of the modal to go back to the explorer view
2. Click the filter group to enable it

When a filter group is enabled, you will only see notes that match the rules in that group.

:::note
You may only have one filter group enabled at a time
:::

## Congratulations

Congratulations! You have just learned the basics of using the Vault Explorer plugin.

## What's next?
- Learn more about [custom filter rules](/docs/custom-filter#filter-rules)
- Checkout [Premium](/docs/premium)