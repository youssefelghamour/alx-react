# alx-react

## Overview 

This repository contains a series of React projects that build a React app, focusing on key concepts in frontend development, including Webpack, React fundamentals, state management with Redux, and performance optimization with tools like Reselect and Immutable.js.

## Table of Contents

- [Overview](#overview)
- [Tools & Libraries Used](#tools--libraries-used)
- [Setup](#setup)
- [Projects](#projects)
  - [0x00. Webpack](#0x00-webpack)
  - [0x01. React Intro](#0x01-react-intro)
  - [0x02. React Props](#0x02-react-props)
  - [0x03. React Component](#0x03-react-component)
  - [0x04. React Inline Styling](#0x04-react-inline-styling)
  - [0x05. React State](#0x05-react-state)
  - [0x06. React Immutable](#0x06-react-immutable)
  - [0x07. React Redux Action Creator & Normalizr](#0x07-react-redux-action-creator-normalizr)
  - [0x08. React Redux Reducer & Selector](#0x08-react-redux-reducer-selector)
  - [0x09. React Redux Connectors and Providers](#0x09-react-redux-connectors-and-providers)

## Tools & Libraries Used

- **React**: Frontend library for building UI.
- **Redux**: State management for React applications.
- **Redux Thunk**: Middleware for handling async actions in Redux.
- **Normalizr**: Data normalization library for APIs.
- **Immutable.js**: Data structures for managing state immutability.
- **Webpack**: Module bundler for JavaScript applications.

## Setup

1. Clone the repo:

```bash
git clone https://github.com/youssefelghamour/alx-react.git
```

2. cd into the final version & Install dependencies:
```bash
cd alx-react/0x09-react_redux_connectors_and_providers/task_9/dashboard
npm install
```

3. Run the app:
```bash
npm start
```

## Projects

### 0x00. Webpack
**Overview**: Introduces setting up Webpack for a React project. This project covers the basic Webpack configuration, bundling JavaScript files, and handling assets like images and stylesheets.

**What was done**:
- Installed Webpack and Babel for JavaScript transpiling.
- Configured Webpack for bundling React and asset files.
- Set up development and production environments with Webpack Dev Server.

### 0x01. React Intro
**Overview**: A beginner-level project to familiarize with React, its components, JSX syntax, and how React renders content.

**What was done**:
- Created simple React components using JSX.
- Learned the process of rendering and displaying content dynamically.
- Handled user events and updated the component state.

### 0x02. React Props
**Overview**: This project focuses on passing data between React components using props.

**What was done**:
- Developed parent and child components to pass data down as props.
- Managed dynamic content by changing props and observing re-renders.
- Explored how props are used to customize the behavior of components.

### 0x03. React Component
**Overview**: Focuses on building React components and writing tests for them. The goal is to learn how to structure React components and ensure they function as expected.

**What was done**:
- Created both functional and class components.
- Introduced unit testing for React components using testing libraries like Jest.
- Covered testing scenarios for component rendering and user interactions.

#### Key Tasks:
- **Component Creation**: Built various types of React components.
- **Unit Testing**: Added tests for component functionality and rendering.

### 0x04. React Inline Styling
**Overview**: Explores styling React components using inline styles instead of external CSS.

**What was done**:
- Styled React components using inline `style` attributes.
- Managed dynamic styles based on state changes.
- Explored how to apply conditional styling in React components.

### 0x05. React State
**Overview**: Teaches how to manage state in React components using the `useState` hook.

**What was done**:
- Used `useState` to manage component-level state.
- Implemented state-driven updates and re-renders in React components.
- Focused on handling user input and controlling component behavior via state.

### 0x06. React Immutable
**Overview**: Introduces the use of Immutable.js with React to handle immutable data structures, which enhances performance by reducing unnecessary re-renders.

**What was done**:
- Implemented Immutable.js data structures like `Map` and `List` in React.
- Managed state immutably and ensured optimal performance for large datasets.
- Integrated Immutable.js with React’s state management system.

### 0x07. React Redux Action Creator & Normalizr
**Overview**: Focuses on managing state with Redux, integrating async actions with Redux Thunk, and using Normalizr to normalize API responses.

**What was done**:
- Implemented Redux for global state management in the app.
- Used Redux Thunk for handling asynchronous action creators.
- Normalized API response data using Normalizr to improve state management.

#### Key Tasks:
- **Async Actions**: Managed asynchronous operations (like API calls) in Redux actions.
- **State Normalization**: Used Normalizr to optimize handling of nested data structures in API responses.

### 0x08. React Redux Reducer & Selector
**Overview**: Explores Redux reducers, selectors, and performance optimizations in state management.

**What was done**:
- Designed and implemented Redux reducers for managing the application state.
- Utilized selectors to extract specific state data efficiently.
- Focused on improving the performance of state selection and rendering.

### 0x09. React Redux Connectors and Providers
**Overview**: Focuses on connecting Redux state and actions to React components using the `connect` function and managing state with context providers.

**What was done**:
- Used `connect` to link Redux state and actions with React components.
- Set up Redux providers to make the store available across the app.
- Managed global application state in a scalable manner with Redux.