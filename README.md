# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### 'yarn electron:start'
yarn concurrently -k \"cross-env BROWSER=none yarn start\" \"wait-on http://localhost:3000 && electronmon\

The page will reload if you make edits.\
You will also see any lint errors in the console.\

### 'yarn electron:package:linux'
### 'yarn electron:package:win'
### 'yarn electron:package:mac'
yarn build && electron-builder -{operating-system} -c.extraMetadata.main=build/electron.js\

### 'yarn storybook'

Open up storybook in the browser to view component styling.
