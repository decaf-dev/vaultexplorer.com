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

## Open the vault explorer view

Open the vault explorer view by clicking on the compass icon in the left-hand sidebar. You may also run `Open vault explorer view` from the [command palette](https://help.obsidian.md/Plugins/Command+palette).

## Change views

Views are different visual formats for displaying your vault files. When you first open the explorer view, the `Grid` view is active.

To change to another view, click one of the view tabs.

To reorder the tabs, drag one tab and drop it onto another tab.

## Filter by favorites

Filters allow you to control what is displayed in a view.

One of the basic filters is the `Favorite filter`. The favorite filter allows you to only display notes that contain a favorite property with a value of `true`.

You must set a property for the favorite filter to work.

1. Open the plugin settings by clicking the gear icon in the upper right hand corner
2. Under the `Built-in Properties` section, you will see `Favorite property` setting
3. Click the dropdown and select a property

If no properties are listed, please add a [checkbox property](https://help.obsidian.md/Editing+and+formatting/Properties) to one of your notes. This property will then appear in the dropdown list.

Now go to back to the explorer view, and click the favorites checkbox. The view will now only display notes that have the favorite property.

::note

The favorite filter is applied on top of other filters such as the timestamp filter or the custom filter.

::

## Create a custom filter group

The custom filter gives you granular control over what should displayed in a view. The custom filter is organized into filter groups and filter rules. A filter group can have many filter rules.

Let's start by creating a filter group.

1. Click the 3 vertical dots button
2. Click the plus button to the left of the divider

Now that you have a filter group, let's add a filter rule.

1. Click the plus icon to the right of the divider
2. Next, click the `text` dropdown and select `list`
3. Then, click the `Select a property` and choose `tags`
4. Finally, click the `contains` and select `exists`

Now let's enable our filter group

1. Click outside of the model to go back to the explorer view
2. Click the filter group to enable it

With the filter group enabled, you will only see notes that match the filter rules in the filter group.

::note

You may only have one filter group enabled at a time

::

## Congratulations

Congratulations! You have just learned the basics of using the Vault Explorer plugin.

## What's next?
- Learn more about [custom filter rules](./filters/custom-filter#filter-rules)
- Checkout [Premium](./premium)