# 0x01. React intro

## Overview

This project focuses on building a modern web application using React, a powerful JavaScript library for building user interfaces. It includes several tasks that guide the process of creating a React application, managing state and props, implementing component-based architecture, and setting up testing with Jest and Enzyme. Each task builds upon the previous one, enhancing skills in frontend development and improving the understanding of how to effectively use React for dynamic web applications.

## Project Structure

```
├── task_0                          
│   ├── dashboard                 
│   │   ├── package.json             
│   │   ├── public                
│   │   │   ├── index.html           # Main HTML file
│   │   │   ├── favicon.ico          
│   │   ├── src                     
│   │   │   ├── App.js               # Main React component
│   │   │   ├── index.js             # Entry point for the React application
│
├── task_1                        
│   ├── dashboard                 
│   │   ├── package.json            
│   │   ├── public                  
│   │   │   ├── index.html           # Main HTML file
│   │   ├── src                   
│   │   │   ├── App.js               # Main React component
│   │   │   │── App.css
│   │   │   ├── Notifications.js     # Notifications component
│   │   │   ├── Notifications.css
│   │   │   ├── utils.js             # Utility functions
│
├── task_2                         
│   ├── dashboard                   
│   │   ├── package.json            
│   │   ├── public                 
│   │   │   ├── index.html            # Main HTML file
│   │   ├── src                    
│   │   │   ├── App.js                # Main React component
│   │   │   │── App.css
│   │   │   ├── Notifications.js      # Notifications component
│   │   │   ├── Notifications.css
│   │   │   ├── utils.js              # Utility functions
│
├── task_3                        
│   ├── dashboard                   
│   │   ├── package.json          
│   │   ├── public                  
│   │   │   ├── index.html            # Main HTML file
│   │   ├── src                  
│   │   │   ├── App.js                # Main React component
│   │   │   │── App.css
│   │   │   │── App.test.js
│   │   │   ├── Notifications.js      # Notifications component
│   │   │   ├── Notifications.css
│   │   │   │── Notifications.test.js # Tests for Notifications component
│   │   │   ├── utils.js              # Utility functions
│   │   │   ├── utils.test.js         # Tests for utility functions
│   │   │   ├── setupTest.jd          # Configuration file for Enzyme adapter
│
├── task_4                            # Deploying to GitHub Pages 
│   ├── dashboard                    
│   │   ├── package.json   
│   │   ├── build                     # Compiled production files       
│   │   ├── public                 
│   │   │   ├── index.html            # Main HTML file
│   │   ├── src                    
│   │   │   ├── App.js                # Main React component
│   │   │   │── App.css
│   │   │   │── App.test.js
│   │   │   ├── Notifications.js      # Notifications component
│   │   │   ├── Notifications.css
│   │   │   │── Notifications.test.js # Tests for Notifications component
│   │   │   ├── utils.js              # Utility functions
│   │   │   ├── utils.test.js         # Tests for utility functions
│   │   │   ├── setupTest.jd          # Configuration file for Enzyme adapter
│
└── task_5                                 # Recreating the project using Webpack
    ├── dashboard                     
    │   ├── .babelrc                       # Babel configuration file
    │   ├── package.json                   
    │   ├── config                         # Configuration files
    │   │   ├── setupTests.js              # Configuration for Enzyme testing setup
    │   │   ├── webpack.config.js          # Webpack configuration file
    │   ├── dist                           # Compiled distribution files
    │   │   ├── favicon.ico                
    │   │   ├── index.html                 # Main HTML file
    │   ├── src   
    │   │   ├── index.js                   # Entry point for the application                           
    │   │   ├── App                        
    │   │   │   ├── App.css                # Styles for the App component
    │   │   │   ├── App.js                 # Main React component
    │   │   │   ├── App.test.js            # Tests for App component
    │   │   ├── assets                     
    │   │   │   ├── close-icon.png         # Close icon image
    │   │   │   ├── holberton-logo.jpg     # Holberton logo image
    │   │   ├── Notifications              
    │   │   │   ├── Notifications.css      # Styles for Notifications component
    │   │   │   ├── Notifications.js       # Notifications component
    │   │   │   ├── Notifications.test.js  # Tests for Notifications component
    │   │   ├── utils                     
    │   │   │   ├── utils.js               # Utility functions
    │   │   │   ├── utils.test.js          # Tests for utility functions
```