# 0x05. React state

## Overview

This project focuses on managing state in a React application. It covers concepts like local state, controlled components, context, and the use of React Hooks. The aim is to enhance our React application by integrating state management and various user interactions, including notifications and login functionality.

## Project Tasks

1. **Task 0: Adding a local state for notifications**
   - Implemented local state in the App component to manage the visibility of a notifications drawer.
   - **Files Changed:** `App.js`, `Notifications.js`

2. **Task 1: Controlled components and state callback**
   - Created a login form with controlled inputs, managing user login state on submission.
   - **Files Changed:** `Login.js`

3. **Task 2: Context**
   - Set up a React Context for user authentication, enabling global access to login and logout functionalities.
   - **Files Changed:** `AppContext.js`, `App.js`, `Login.js`, `Header.js`

4. **Task 3: Context consumer & advanced state**
   - Updated the Footer component to reflect user login state and managed notifications in the App container.
   - **Files Changed:** `Footer.js`, `App.js`, `Notifications.js`

5. **Task 4: Introduction to React Hooks**
   - Modified the `CourseListRow` component to use React Hooks for managing interactive checkboxes and styling.
   - **Files Changed:** `CourseListRow.js`