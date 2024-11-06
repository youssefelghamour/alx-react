# 0x08. React Redux reducer+selector

## Overview

This project focuses on managing state with React and Redux, covering the use of reducers, selectors, and normalization techniques with Immutable.js and Normalizr. The goal is to enhance state management in a React application by leveraging Redux for handling global state and selectors for extracting data.

## Project Tasks

1. **Task 0: Write a basic reducer**
   - Created a reducer to manage the visibility of the notification drawer and user login state.
   - **Files Changed:** `reducers/uiReducer.js`, `reducers/uiReducer.test.js`

2. **Task 1: Use Immutable for the UI Reducer**
   - Refactored the `uiReducer.js` to use Immutable.js for better state management.
   - **Files Changed:** `reducers/uiReducer.js`, `reducers/uiReducer.test.js`

3. **Task 2: Create a reducer for Courses**
   - Implemented actions and reducer for handling course data, including fetching courses and selecting/unselecting courses.
   - **Files Changed:** `actions/courseActionTypes.js`, `reducers/courseReducer.js`, `reducers/courseReducer.test.js`

4. **Task 3: Create the reducer for notifications**
   - Set up actions and reducer for notifications, including marking as read and setting a filter type.
   - **Files Changed:** `actions/notificationActionTypes.js`, `reducers/notificationReducer.js`, `reducers/notificationReducer.test.js`

5. **Task 4: Normalizr & Immutable**
   - Integrated Normalizr for normalizing course and notification data and refactored reducers to use Immutable.js.
   - **Files Changed:** `reducers/courseReducer.js`, `reducers/notificationReducer.js`, `schema/courses.js`, `schema/notifications.js`, `reducers/courseReducer.test.js`, `reducers/notificationReducer.test.js`

6. **Task 5: Selectors**
   - Created selectors for filtering notifications and selecting/unselecting courses.
   - **Files Changed:** `selectors/notificationSelector.js`, `selectors/notificationSelector.test.js`