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

| Name                                | Description                                                                                                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `property type`                     | This matches an Obsidian property type:<br/>- `text` <br/>- `number`<br/>- `list`<br/>- `checkbox`<br/>- `date`<br/>- `datetime`                                      |
| `property name`                     | The name of the property                                                                                                                                              |
| `condition`                         | The filter condition:<br/>- `is`<br/>- `is not`<br/>- `contains`<br/>- `does not contain`<br/>- `starts with`<br/>- `ends with`<br/>- `exists`<br/>- `does not exist` |
| `value`                             | Some text to compare                                                                                                                                                  |
| `match when property doesn't exist` | When true, markdown files that do not have the selected property name will be unaffected by this rule                                                                 |

### Folder name

| Name                | Description                                     |
| ------------------- | ----------------------------------------------- |
| `condition`         | The filter condition:<br/>- `is`<br/>- `is not` |
| `folder name`       | The name of the folder                          |
| `include subfolder` | Whether subfolders should be included           |

### File name

| Name        | Description                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `condition` | The filter condition:<br/>- `is`<br/>- `is not`<br/>- `contains`<br/>- `does not contain`<br/>- `starts with`<br/>- `ends with` |
| `value`     | Some text to compare                                                                                                            |

### Content

Content is the text that appears in a markdown file, excluding the frontmatter.

This rule only applies to markdown files and will not affect any other types of files.

This rule can be used to filter by tags that appear in the body of a markdown note instead of the frontmatter.

This is a [premium feature](/docs/premium).

| Name        | Description                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| `condition` | The filter condition:<br/>- `contains`<br/>- `does not contain`<br/>- `is empty`<br/>- `is not empty` |
| `value`     | Some text to compare                                                                                  |
