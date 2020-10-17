# comp-reuse

Udemy Vue3 course Section 20

Purpose: illustrate code re-usability with mixin and custom composition functions


## Concepts

What can be reused?

- HTML Structure and Styling (e.g. list items)
- Logic & Events:
  - Search Methods, Data, Watchers, etc. (might be used by > 1 component)

In this (extreme) case all the logic in AddUser.vue and DeleteUser.vue is identical
We will move this to /mixins/alert.js

### Mixin Merging

by default: data is combined
If there is a clash/conflict - component Options win (will overwrite mixin data)

### Global Mixin

limited use cases (possibly logging or analytics)

If there are duplicates (e.g. mounted() in component and global mixed):
  - both mounted() hooks will execute
  - component executes last (will overwrite anything from global)

### Mixin Disadvantages

- when you build bigger applications, mixins make code harder to understand (where does data/function come from?)
  example: does showAlert() coming from error handler or alert mixin? (if you had 5 mixins in a component)

SOLUTION: Composition API - 'Custom Composition Functions' provides better approach than mixins (aka hooks, composables)

## Installation

npm install


## Run

npm run serve (Development)

