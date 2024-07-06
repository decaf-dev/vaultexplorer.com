---
sidebar_label: "Sort order"
sidebar_position: 3
title: Sort order
---

Changes the order of the vault files that are displayed.

| Name                         | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| `File name (A-Z)`            | Sorts based on file name in ascending order          |
| `File name (Z-A)`            | Sorts based on file name in descending order         |
| `Modified time (new to old)` | Sorts based on modification date in descending order |
| `Modified time (old to new)` | Sorts based on modification date in ascending order  |
| `Random`                     | Sorts based on random number generation              |

## Modified time

The modified time option will use the file system modification date for sorting. If you want to use a property instead, you may update the [modification date property](/docs/settings#modification-date-property) setting.

## Random

Random sort works by assigning a random number between 0 and 1 to each file, and sorting the files in ascending order.

The random sort will display a new sort order each time the Vault Explorer view is opened.
