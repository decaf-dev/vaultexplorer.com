---
sidebar_label: "Timestamp filter"
sidebar_position: 2
title: Timestamp filter
---

import Image from "@site/src/components/Image";

The timestamp filter tells the view to only display files that match the selected timestamp.

<Image src="filters/img/timestamp-filter.png" alt="Timestamp filter" maxWidth="300px"/>

<br/>
<br/>

| Name                 | Description                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| `All`                | Show all files                                                             |
| `Modified today`     | Modification date is between 12:00 am and 11:59 pm today                   |
| `Created today`      | Creation date is between 12:00 am and 11:59 pm today                       |
| `Modified this week` | Modification date is within the last 7 days, starting from 12:00 am today  |
| `Created this week`  | Creation date is within the last 7 days, starting from 12:00 am today      |
| `Modified 2 weeks`   | Modification date is within the last 14 days, starting from 12:00 am today |
| `Created 2 weeks`    | Creation date is within the last 14 days, starting from 12:00 am today     |

You may use an Obsidian property instead of the file system time by updating the [modification date setting](/docs/settings/#modification-date-property) or [creation date setting](/docs/settings/#creation-date-property).
