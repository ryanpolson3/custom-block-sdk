# Heroku

Website: [https://id.heroku.com/login]

- Create Client Login 

- Do "Getting Started on Heroku with Node.js" if you need knowledge on how to create an app on Heroku

- Create Client Heroku App
    - Files Needed In Your App Locally
        - Procfile | Allows Heroku to run your app
        - .gitignore | File names in this file will not *push* (add "node_modules", "package-lock.json")
        - package.json | Houses all the things to make your app run
        - server.js | File will run your app on a local server and on the Heroku server
            - Use Express to build the server

- Connect Heroku App to Github Repository 
    - Heroku App > Deploy Tab > Deployment method (click Github tab)
        - App Connected to Github | Connect repository
        - Automatic Deploys | Enable Automatic Deploys
        - Manual Deply | Deploy to "main" branch to make sure everything is connected  
- Set Up a Pipeline
    - Pipeline | Creates a review, staging & production environment
        - Set your app as the "Staging" area
            - Staging card should show Auto deploys | main if its connected to Github Repository
        - In pipeline under "Production" create app for "Production" environment
        - In pipeline under "Review Apps" create app for "Reviewing" environment

- Test Staging Site
    - *Push* local code to Github Repository for code deployment to Heroku App
    - Once successful, go to Client App > Pipeline > Staging Area > Open App (bottom right of staging card)

- Things To Note
    - Staging environment will need to have changes promoted to production environment to see production url updated in production app
    - Stagine environment could be used as production environment depending on client needs or wants