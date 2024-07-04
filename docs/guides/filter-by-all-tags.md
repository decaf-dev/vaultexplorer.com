---
sidebar_label: 'Filter by all tags'
sidebar_position: 1
title: Filter by all tags
---

This guide will help you set up filtering for tags that appear either in the frontmatter or the body of your markdown notes.

This guide assumes that you have activated [premium features](/docs/premium) for your vault.

## Create a property rule

1. Add a filter group
2. Add a filter rule
3. Click the property type dropdown. Change it from **text** to **list**
4. Click the property name dropdown. Change it from **select a property** to **tags**
5. Click the condition dropdown. Change it from **contains** to your condition of choice.
6. If an input appears, enter in the tag that you want to filter by, without a hash mark `#`

## Create a content rule

1. On the same filter group, add another filter rule
2. Click the property operator dropdown. Change it from **and** to **or**
3. Click the rule type dropdown. Change it from **property** to **content**
4. Click the filter condition dropdown. Change it from **contains** to your condition of choice.
5. If an input appears, enter in the tag that you want to filter by, without a hash mark `#`

Now click outside of the modal and enable your filter group.

Congratulations! You are now filtering vault files based on tags found in both the frontmatter or the body of the markdown files.