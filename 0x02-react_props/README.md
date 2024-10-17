# 0x02. React props

## Overview

This project focuses on enhancing our React app with props and state management, implementing PropTypes for type checking, and creating dynamic lists for courses and notifications. It guides the process of building reusable components and setting up testing with Jest and Enzyme, improving skills in frontend development and understanding effective React practices for modern web applications.

## Project structure

```
0x02-react_props/task_5
│
│
└── dashboard/
    ├── .babelrc                          # Babel configuration
    ├── .gitignore                        # Git ignore file
    ├── config/
    │   ├── setupTests.js                 # Test setup
    │   └── webpack.config.js             # Webpack configuration
    ├── dist/
    │   ├── favicon.ico 
    │   └── index.html                    # HTML entry point
    ├── package-lock.json                 # Lock file for dependencies
    ├── package.json                      # Project metadata and dependencies
    ├── src/
    │   ├── index.js                      # Entry point for the React application
    │   ├── App/
    │   │   ├── App.css                   # Styles for App component
    │   │   ├── App.js                    # Main App component
    │   │   └── App.test.js               # Tests for App component
    │   ├── assets/
    │   │   ├── close-icon.png            # Close icon asset
    │   │   └── holberton-logo.jpg        # Holberton logo asset
    │   ├── CourseList/
    │   │   ├── CourseList.css            # Styles for CourseList component
    │   │   ├── CourseList.js             # CourseList component
    │   │   ├── CourseList.test.js        # Tests for CourseList component
    │   │   ├── CourseListRow.js          # CourseListRow component
    │   │   ├── CourseListRow.test.js     # Tests for CourseListRow component
    │   │   └── CourseShape.js            # Course shape definition
    │   ├── Footer/
    │   │   ├── Footer.css                # Styles for Footer component
    │   │   ├── Footer.js                 # Footer component
    │   │   └── Footer.test.js            # Tests for Footer component
    │   ├── Header/
    │   │   ├── Header.css                # Styles for Header component
    │   │   ├── Header.js                 # Header component
    │   │   └── Header.test.js            # Tests for Header component
    │   ├── Login/
    │   │   ├── Login.css                 # Styles for Login component
    │   │   ├── Login.js                  # Login component
    │   │   └── Login.test.js             # Tests for Login component
    │   ├── Notifications/
    │   │   ├── NotificationItem.js       # Notification item component
    │   │   ├── NotificationItem.test.js  # Tests for NotificationItem component
    │   │   ├── NotificationItemShape.js  # Shape definition for notification item
    │   │   ├── Notifications.css         # Styles for Notifications component
    │   │   ├── Notifications.js          # Notifications component
    │   │   └── Notifications.test.js     # Tests for Notifications component
    │   └── utils/
    │       ├── utils.js                  # Utility functions
    │       └── utils.test.js             # Tests for utility functions
```

## Tasks

### Task 0: Basic Components
- Created `Header`, `Footer`, and `Login` components.
- Moved related code and CSS into separate files.
- Modified `App.js` to include new components.
- Wrapped components in a React Fragment.

### Task 1: Write the Tests for Each Component
- Added unit tests for `Header`, `Login`, and `Footer`.
- Verified component rendering and existence of elements.
- Updated `App.test.js` to check for all components.
- Confirmed all tests passed successfully.

### Task 2: Split the Notifications Component
- Created `NotificationItem` component for individual notifications.
- Updated `Notifications.js` to use `NotificationItem`.
- Modified tests for `NotificationItem` and `Notifications`.
- Ensured correct rendering and functionality.

### Task 3: Checking the Application Using the React Extension
- Changed notification type to "urgent" using React Developer Tools.
- Captured screenshots of changes.
- Profiled app to identify longest-rendering component.

### Task 4: Props Types & Default Props & Shapes
- Implemented PropTypes and default props.
- Created `CourseListRow` and `CourseList` components.
- Added conditional rendering based on `isLoggedIn`.
- Updated tests for PropTypes validation.

### Task 5: Shapes, Loops, and Keys
- Introduced `CourseShape` and `NotificationItemShape`.
- Modified components to handle arrays for courses and notifications.
- Updated UI to display messages for empty arrays.
- Verified correct rendering through updated tests.