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


## Installation

npm install


## Run

npm run serve (Development)

