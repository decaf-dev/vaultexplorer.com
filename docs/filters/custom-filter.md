---
sidebar_label: "Custom filter"
sidebar_position: 4
title: Custom filter
---

The custom filter gives you granular control over what is displayed in a view. The custom filter is organized into two categories: `filter groups` and `filter rules`

-   **Filter group** - A collection of filter rules
-   **Filter rule** - A requirement that must be met for a vault file to be displayed by a view

## Filter groups

### Add a group

TODO

### Delete a group

TODO

### Reorder groups

TODO

### Rename groups

TODO

## Filter rules

### Add a rule

TODO

### Delete a rule

TODO

### Toggle a rule

TODO

### Logical operators

TODO

## Filter rule types

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `property`    | A property found in the frontmatter of a markdown note       |
| `folder name` | A folder name                                                |
| `file name`   | A file name                                                  |
| `content`     | The text found in a markdown note, excluding the frontmatter |

### Property

This rule only applies to markdown files and will not affect any other types of files.

#### Property filter options

| Name                                | Description                                                                                                  |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `property type`                     | The property type. This matches the Obsidian types: `text`, `number`, `list`, `checkbox`, `date`, `datetime` |
| `property name`                     | A property name                                                                                              |
| `condition`                         | The property condition                                                                                       |
| `value`                             | Text to compare                                                                                              |
| `match when property doesn't exist` | When true, markdown files that don't have the selected property name will be unaffected by this rule         |

#### Property filter conditions

| Name               |
| ------------------ |
| `is`               |
| `is not`           |
| `contains`         |
| `does not contain` |
| `starts with`      |
| `ends with`        |
| `exists`           |
| `does not exist`   |

### Folder name

#### Folder name filter options

| Name                | Description                           |
| ------------------- | ------------------------------------- |
| `condition`         | The filter condition                  |
| `folder name`       | A dropdown list of folder names       |
| `include subfolder` | Whether subfolders should be included |

#### Folder name filter conditions

| Name     |
| -------- |
| `is`     |
| `is not` |

### File name

#### File name filter options

| Name        | Description          |
| ----------- | -------------------- |
| `condition` | The filter condition |
| `value`     | Text to compare      |

#### File name filter condition

| Name               |
| ------------------ |
| `is`               |
| `is not`           |
| `contains`         |
| `does not contain` |
| `starts with`      |
| `ends with`        |

### Content

Content is the text that appears in a markdown file, excluding the frontmatter.

This rule only applies to markdown files and will not affect any other types of files.

This rule can be used to filter by tags that appear in the body of a markdown note instead of the frontmatter.

This is a [premium feature](/docs/premium).

#### Content filter options

| Name        | Description          |
| ----------- | -------------------- |
| `condition` | The filter condition |
| `value`     | Text to compare      |

#### Content filter condition

| Name               |
| ------------------ |
| `contains`         |
| `does not contain` |
| `is empty`         |
| `is not empty`     |
