---
sidebar_label: "Quickstart"
sidebar_position: 1
title: Quickstart
---

import Video from "@site/src/components/Video";
import Image from "@site/src/components/Image";

<span className="large-text">Welcome to the Vault Explorer Quickstart.</span>
<br/>
<br/>

In this tutorial we will cover a few basics to help you get started with the plugin.

:::tip Learning outcomes

-   How to open the explorer view
-   How to change views
-   How to open a file from a view
-   How to filter by favorites
-   How to filter by a custom filter group

:::

## Installation

If you haven't done so already, please install the [Vault Explorer plugin](https://obsidian.md/plugins?id=vault-explorer) from the Obsidian plugin store.

## Open the explorer view

Start by opening the explorer view by clicking on the compass button in the left sidebar.

You may also run **Open vault explorer view** from the [command palette](https://help.obsidian.md/Plugins/Command+palette).

<Image src="img/open-by-button.png" alt="Open by button" maxWidth="300px"/>

<br/>
<br/>

<Image src="img/open-by-command-palette.png" alt="Open by command palette" maxWidth="600px"/>

## Change views

Views are different visual formats for displaying your vault files. When you first open the explorer view, the [grid view](/docs/views/grid/) is active.

Let's change to another view. Change to the [list view](/docs/views/list/) by clicking the **list** tab.

<Image src="img/list-tab.png" alt="List tab" maxWidth="300px"/>

<br/>
<br/>

In the list view, you will notice that files are displayed differently. For each file, only a file name and a list of tags is displayed.

<Image src="img/list-view-1.png" alt="List view" maxWidth="900px"/>

## Open a file

Now let's open one of the files that appears in this view. Move your mouse and highlight one of the view rows. Then left click on it to open it.

<Image src="img/list-view-2.png" alt="List view" maxWidth="900px"/>

<br/>
<br/>

Notice how the active tab changes to the tab that was just opened.

<Image src="img/list-view-3.png" alt="List view" maxWidth="900px"/>

<br/>
<br/>

Let's open a new tab without navigating to it. Highlight the row and right click it. Click **Open in new tab**.

<Image src="img/list-view-4.png" alt="List view" maxWidth="900px"/>

<br/>
<br/>

<Image src="img/list-view-5.png" alt="List view" maxWidth="400px"/>

## Filter by favorites

When you open the explorer view after installation, no filters are active. Let's enable the [favorite filter](/docs/filters/favorite-filter/) to filter by favorites.

Start by opening the plugin settings by clicking the gear icon in the upper right corner.

<Image src="img/favorites-1.png" alt="Filter by favorites" maxWidth="900px"/>

<br/>
<br/>

Scroll down to the **Built-in Properties** section

<Image src="img/favorites-2.png" alt="Filter by favorites" maxWidth="600px"/>

<br/>
<br/>

Find the **Favorite property** setting

Click the dropdown and change the value from **Select a property** to the property that you want to use

<Image src="img/favorites-3.png" alt="Filter by favorites" maxWidth="600px"/>

<br/>
<br/>

If no properties are listed, please add a [checkbox property](https://help.obsidian.md/Editing+and+formatting/Properties) to one of your notes. This property will then appear in the dropdown list.

<Image src="img/favorites-4.png" alt="Filter by favorites" maxWidth="600px"/>

<br/>
<br/>

Now go to back to the explorer view, and click the favorites checkbox. The view will only display files that have the selected favorite property with a value of **true**.

<Image src="img/favorites-5.png" alt="Filter by favorites" maxWidth="900px"/>

## Add a custom filter group

Now let's create a custom filter group. Using the [custom filter](/docs/filters/custom-filter) we can filter by frontmatter properties or file data.

Start by creating a new note. Add a **tags** property with a **test** tag.

<Image src="img/custom-filter-1.png" alt="Custom filter" maxWidth="400px"/>

<br/>
<br/>

Now go back to the explorer view. Open the custom filter by clicking on the filter button.

<Image src="img/custom-filter-2.png" alt="Custom filter" maxWidth="400px"/>

<br/>
<br/>

Now click the add filter group button.

<Image src="img/custom-filter-3.png" alt="Custom filter" maxWidth="400px"/>

<br/>
<br/>

You will see that a filter rule was added when the filter group was added. Let's configure this rule.

Click the property type dropdown. Change it from **text** to **list**

<Image src="img/custom-filter-4.png" alt="Custom filter" maxWidth="350px"/>

<br/>
<br/>

Then, click the property name dropdown. Change it from **select a property** to **tags**

<Image src="img/custom-filter-5.png" alt="Custom filter" maxWidth="350px"/>

<br/>
<br/>

Enter **test** into the input field. Although this is a tag, you don't include a hash mark `#`.

<Image src="img/custom-filter-6.png" alt="Custom filter" maxWidth="350px"/>

<br/>
<br/>

Finally, click outside of the modal.

Click the filter group to enable it. With the filter group enabled, only have files that have a **tags** property containing a **test** with be displayed.

<Image src="img/custom-filter-7.png" alt="Custom filter" maxWidth="900px"/>

## Congratulations

Congratulations! You have just learned the basics of using the Vault Explorer plugin.

## What's next?

-   Learn about the [grid view](/docs/views/grid)
-   Learn about [filter rule types](/docs/filters/custom-filter/#filter-rule-types)
-   Learn about [Premium](/docs/premium/)
