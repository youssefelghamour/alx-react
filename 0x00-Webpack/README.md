# 0x00. Webpack

## Overview

This project focuses on building a modern web application using Webpack, a powerful module bundler. It includes several tasks that fo through the process of setting up Webpack, managing dependencies, optimizing builds, and creating a development server. Each task builds upon the previous one, enhancing skills in frontend development and improving the understanding of how to effectively use Webpack for various web development needs.

## Project structure

```
0x00-Webpack/
│
├── task_0/
│   ├── package.json             # Configuration file for task 0, includes webpack and jQuery dependencies.
│   ├── src/
│   │   └── index.js             # Main JavaScript file that adds paragraphs to the HTML using jQuery.
│   └── dist/
│       └── index.html           # HTML file that imports the generated JavaScript bundle.
│
│
├── task_1/
│   ├── package.json             # Configuration file for task 1, includes webpack, jQuery, and Lodash dependencies.
│   ├── js/
│   │   └── dashboard_main.js    # JavaScript file that adds elements to the dashboard and tracks clicks.
│   └── public/
│       └── index.html           # HTML file for task 1 that imports the JavaScript bundle.
│   └── webpack.config.js        # Webpack configuration file for task 1, set to production mode.
│
│
├── task_2/
│   ├── package.json             # Configuration file for task 2, includes additional dependencies for CSS and images.
│   ├── css/
│   │   └── main.css             # CSS file for styling the dashboard and counter.
│   ├── js/
│   │   └── dashboard_main.js    # Reused JavaScript file from task 1 with added styles and images support.
│   └── public/
│       └── index.html           # HTML file for task 2 that imports the updated JavaScript bundle.
│   └── webpack.config.js        # Updated Webpack config for task 2, includes CSS and image support.
│
│
└── task_3/
    ├── package.json             # Configuration file for task 3, includes dev server setup.
    ├── modules/
    │   ├── body/
    │   │   ├── body.css         # CSS file for styling the body module of the dashboard.
    │   │   └── body.js          # JavaScript file for handling button clicks in the body module.
    │   ├── footer/
    │   │   ├── footer.css       # CSS file for styling the footer module.
    │   │   └── footer.js        # JavaScript file for adding copyright text in the footer module.
    │   └── header/
    │       ├── header.css       # CSS file for styling the header module.
    │       └── header.js        # JavaScript file for adding the header to the dashboard.
    └── webpack.config.js        # Comprehensive Webpack configuration for task 3, includes multiple entry points.
```