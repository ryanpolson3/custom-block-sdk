# Install Following

- Text Editor : VSCode (https://code.visualstudio.com/)
- Git (https://git-scm.com/)
- Node.js (https://nodejs.org/en/)
- NPM (https://www.npmjs.com/)
- Homebrew : Don't know if you will need this. (https://brew.sh/)

# Heroku

- Create Login (https://id.heroku.com/login)
- Do "Getting Started on Heroku with Node.js"
    - Create app
    - (Recommend creating your own app instead of the Getting Started app so you know what the file will look like)
    - Make sure to have a "Procfile" file
    - Make sure to have a ".gitignore" file (add "node_modules" and "package-lock.json" to file)
    - Make sure to have a "package.json" file
    - Make sure to have a "server.js" file
        - hostname = "0.0.0.0" (I don't know why but this is the only way I got the heroku url to work with my app)
- Connect Heroku app with Github repository 
    - Heroku > Deploy > Deployment method (click Github tab)
    - Set "Auto Deployment" between Heroku and Github
- Make sure you can gain access to the app through the browser on Heroku 
- Set up a pipeline
    - Pipeline: 
        - Set your app as a "STAGING" area for testing before pushing to "PRODUCTION".
        - In pipeline under "PRODUCTION" create app for "LIVE" app.
        - In pipeline under "REVIEW APPS" create app for reviewing pulled code so you can migrate tested code to "STAGING" area.

# Github

- Create an account (https://github.com/)
- Set up 2FA
- Create repository
- Once connected to Heroku and Auto Deployment is set. Use "GITHUB" *PUSH* and *PULL* method to move code. - Heroku will update the app automatically as long as its connected correctly.

# Marketing Cloud

    # Documentation

    - https://trailhead.salesforce.com/content/learn/modules/content-builder-block-sdk
    - https://trailhead.salesforce.com/content/learn/modules/lightning-design-system-basics
    - https://www.lightningdesignsystem.com/
    - https://www.youtube.com/watch?v=eJ74dxJ_JSo&ab_channel=SalesforceDevelopers

    # Create Custom Component

    Setup:
        - Go to "INSTALLED PACKAGES"
        - Click "ADD COMPONENT"
        - Add "NAME" of component and "URL" from Heroku
        - Click "SAVE"


# sampleblock
Sample Salesforce Marketing Cloud Content Builder Block using the [blocksdk](https://github.com/salesforce-marketingcloud/blocksdk).

#

## Deployment
As a node app:

```bash
npm install
npm start
```
One click deployment to heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Building your own block from here

```bash
# do not fork
git clone https://github.com/tbesluau/sampleblock.git <my block name e.g. myblock>
cd <my block name e.g. mybock>
# create your own empty github repository for your new block and copy the clone url for it
git remote set-url origin <your empty repo url>
npm install
```

Files to edit:

 * src/main.js for your code
 * dist/index.html for your markup
 * package.json for your block name and description
 * README.md to be your own README
 
To test your changes locally:

```bash
npm run build; npm start
```

Then go to the block tester app and enter `http://localhost:3000` in the text field and click a block. You will have to allow unsecure iframes in your bowser (top right in the url bar in Chrome) first.

Once ready to deploy, commit your changes to your repo and click the deploy to heroku button on it.

## src

- is for all development files

## src/css

- is for styles sheet

## src/html

- is for markup file

## src/layouts

- is for templates

## src/partials

- is

## src/scripts

- is for component functionality

## .liquid

- is a template generator

# Eleventy: eleventy.js

- is a static site generator

## app.json

- 

## package.json

- 

## server.js

- is for setting up the server

# Webpack Config

- is for compiling all your resources to a .dist folder for production

