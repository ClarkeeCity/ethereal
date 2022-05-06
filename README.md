# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### 'electron:start'

electron:start does the following:\
concurrently -k \"cross-env BROWSER=none yarn start\" \"wait-on http://localhost:3000 && electronmon\

This will run the app in the development mode and run the console on load.\

The page will reload if you make edits.\
You will also see any lint errors in the console.

### 'electron:package:linux'
### 'electron:package:win'
### 'electron:package:mac'
electron:package does the following:\
yarn build && electron-builder -{OS} -c.extraMetadata.main=build/electron.js\

Where, {OS} is either -l, -w, or -m for each operating system.\

### 'yarn storybook'

Open up storybook in the browser to view component styling.
