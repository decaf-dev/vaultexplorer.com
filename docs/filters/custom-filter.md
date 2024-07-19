---
sidebar_label: "Custom filter"
sidebar_position: 5
title: Custom filter
---

import Image from "@site/src/components/Image";

The custom filter gives you granular control over what is displayed in a view. The custom filter is organized into two categories: groups and rules.

-   **Filter group** - A collection of filter rules
-   **Filter rule** - A requirement that must be met for a vault file to be displayed by a view

## Filter groups

### Add a group

To add a group, click the add filter group button.

<Image src="filters/img/add-group.png" alt="Add filter group" maxWidth="400px"/>

### Delete a group

To delete a group, click the delete filter group button.

<Image src="filters/img/delete-group.png" alt="Delete filter group" maxWidth="400px"/>

### Reorder groups

To reorder groups, click and drag a group and drop it onto another group.

<Image src="filters/img/reorder-1.png" alt="Reorder filter group" maxWidth="400px"/>

<br/>
<br/>

You may also do this from outside the custom filter modal.

<Image src="filters/img/reorder-2.png" alt="Reorder filter group" maxWidth="300px"/>

### Rename a group

To rename a group, select a group and then change the text found in the input field.

<Image src="filters/img/rename-group.png" alt="Rename filter group" maxWidth="400px"/>

### Set a group as sticky

A sticky group is a group that remains enabled even when another group becomes enabled.

1. Hold `ctrl` (Windows/Linux) or `cmd` (Mac)
2. Click a group to set it as a sticky group

<Image src="filters/img/sticky-1.png" alt="Set sticky group" maxWidth="300px"/>

### Unset a group as sticky

1. Hold `ctrl` (Windows/Linux) or `cmd` (Mac)
2. Click a group to unset it as a sticky group

<Image src="filters/img/sticky-2.png" alt="Unset sticky group" maxWidth="300px"/>

## Filter rules

### Add a rule

To add a rule, click the add filter rule button.

<Image src="filters/img/add-rule.png" alt="Add filter rule" maxWidth="400px"/>

### Delete a rule

To delete a rule, click the rule actions button.

<Image src="filters/img/delete-rule-1.png" alt="Delete filter rule" maxWidth="400px"/>

Then click delete.

<Image src="filters/img/delete-rule-2.png" alt="Delete filter rule" maxWidth="400px"/>

### Duplicate a rule

To duplicate a rule, click the rule action button.

<Image src="filters/img/duplicate-1.png" alt="Duplicate filter rule" maxWidth="400px"/>

<br/>
<br/>

Then click duplicate.

<Image src="filters/img/duplicate-2.png" alt="Duplicate rule" maxWidth="400px"/>

### Toggle a rule

To enable a rule, click the toggle switch.

<Image src="filters/img/toggle-1.png" alt="Toggle filter rule" maxWidth="400px"/>

<br/>
<br/>

To disable a rule, click the toggle switch again.

<Image src="filters/img/toggle-2.png" alt="Toggle filter rule" maxWidth="400px"/>

### Logical operators

Filter rules can be combined using the logical operators: **and**, **or**

<Image src="filters/img/logical-operator.png" alt="Logical operator" maxWidth="400px"/>

<br/>
<br/>

When **and** is selected, both rules must be true for a file to be displayed.

When **or** is selected, either rule may be true for a file to be displayed.

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

This is a [premium feature](/docs/premium/).

| Name        | Description                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| `condition` | The filter condition:<br/>- `contains`<br/>- `does not contain`<br/>- `is empty`<br/>- `is not empty` |
| `value`     | Some text to compare                                                                                  |
