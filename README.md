# Responsive To-Do App

Based on [Dave Gray's excellent YT tutorial](https://youtu.be/y51Cv4wnsPw), this is a mobile-first to-do app with persistent data (using the Web Storage API) and a strong focus on accessibilty and being screen-reader friendly.

After completing the tutorial, I figured it would be a useful learning exercise to rebuild the app with React (the tutorial uses HTML, SASS and vanilla JS) and then customise the styling and expand the functionality.

Some features I added include:

- checked items now move to a sublist below the main list (rather than being deleted)
- strikethrough on checked item text
- button for clearing only the checked items
- list headers displaying the number of uncompleted and completed items
- delete button to remove individual item

The app is still fairly simple, so perhaps in the future I may return to add some additional functionality, such as:

- multiple list support
- ability to reorder items
- delete btn only appearing on item focus

You can [see the app in action](https://caffeinated-todo-app.netlify.app/) here.

## Notes

### FontAwesomeIcon click handler

Seems that you can't pass an event into a click handler for a `<FontAwesomeIcon />` component, even if you place the click handler in a wrapper. However, we can pass in our own parameter using an anonymous function.
