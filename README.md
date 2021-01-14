# Responsive ToDo App

Based on [Dave Gray's excellent YT tutorial](https://youtu.be/y51Cv4wnsPw), this is a mobile first todo app with a strong focus on accessibilty and being screen-reader friendly.

After completing the tutorial, I figured it would be a useful learning experience to rebuild the app with React and restyle to my own tastes.

## ToDo list:

- customise styling
- remove checked confirmation
- add footer
- make new features screen reader friendly

## Stretch features

- button to hide checked items
- delete btn only appears on focus
- multiple list support
- ability to reorder items?

## FontAwesomeIcon click handler

Seems that you can't pass an event into a click handler for a <FontAwesomeIcon /> component, even if you place the click handler in a wrapper.
