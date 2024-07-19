---
sidebar_label: "Sort order"
sidebar_position: 4
title: Sort order
---

import Image from "@site/src/components/Image";

The sort order changes the order of the files that the view displays.

<Image src="filters/img/sort-order-filter.png" alt="Sort order" maxWidth="300px"/>

<br/>
<br/>

| Name                         | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| `File name (A-Z)`            | Sorts based on file name in ascending order          |
| `File name (Z-A)`            | Sorts based on file name in descending order         |
| `Modified time (new to old)` | Sorts based on modification date in descending order |
| `Modified time (old to new)` | Sorts based on modification date in ascending order  |
| `Random`                     | Sorts based on random number generation              |

## Modified time

The modified time option will use the file system modification date for sorting. If you want to use a property instead, you may update the [modification date property](/docs/settings/#modification-date-property) setting.

## Random

Random sort works by assigning a random number between 0 and 1 to each file, and sorting the files in ascending order.

Files will be displayed in a new order each time the Vault Explorer view is opened.

You may reshuffle files by pressing the reshuffle button.

<Image src="filters/img/reshuffle.png" alt="Reshuffle files" maxWidth="300px"/>
