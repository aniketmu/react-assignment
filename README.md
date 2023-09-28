# To-Do App

This is a simple To-Do web application built using React JS. It allows users to add, complete, and reset tasks, and it stores task data locally using the browser's local storage.

## Features

- **Add Tasks**: Users can enter tasks in the input bar and press the "Enter" key to add them to the list.

- **Complete Tasks**: Clicking on a task card marks it as complete and moves it to the bottom of the list.

- **Reset**: There is a "Refresh" button that clears all tasks and returns the app to its initial state.

- **Local Storage**: Task data is stored locally in the browser, so it remains available even when the user closes or refreshes the page.

## Usage

1. Clone the repository to your local machine.

2. Navigate to the project directory.

3. Install dependencies using `npm install`.

4. Start the application using `npm start`.

5. Open the app in your web browser by visiting `http://localhost:3000`.

6. You can now use the app to manage your tasks.

## Technologies Used

- React JS
- UUID (for generating unique task IDs)
- CSS for styling

## Folder Structure

- `App.js`: Main component that manages the application state.
- `Input.js`: Component for adding tasks and resetting the app.
- `Task.js`: Component for displaying individual tasks.
- `App.css`: Styles for the application.

## Assumptions

While developing this To-Do app, I made the following assumptions:

1. **Offline Functionality**: Since the app is designed as a client-side application and doesn't rely on network requests, I assumed that using `localStorage` for local data storage would be sufficient for providing an offline experience.

2. **No Server Interaction**: The app does not interact with a server or require a backend. All data is stored locally within the browser.

3. **Supported Browsers**: I developed and tested the app to work in the latest versions of Google Chrome and Firefox. 

4. **Use of UUIDs**: I used UUIDs for generating unique task IDs to ensure task uniqueness in the local storage.

5. **Task Reversion**: The assignment did not specify whether completed tasks should revert to a pending state when clicked again. As a result, I implemented the functionality where tasks are marked as completed on click, but I did not include a feature to revert completed tasks to pending status.

These assumptions guided my development decisions, and I aimed to meet the specified requirements based on these assumptions.
