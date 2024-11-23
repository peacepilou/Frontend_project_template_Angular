# Frontend project template

This repository is a Angular project template shipped with a base configuration in order to have a clean base to work with, for you and your teammates. 

This project has been initialized from Angular CLI version 18.2

## Same code format : Prettier
- This project uses Prettier. 
- Prettier makes sure that everyone has the same code format and standardize it. It helps developers to be focused on creating feature, not formatting. The same format for everyone also means easier code reviews.
- The configuration file is in the `source directory` > `.prettierrc.json`.
- You can install Prettier plugin on your IDE if you want, it would help you to configure when prettier should run. For instance, you can choose to let it run after every file save. But you are not forced to install the plugin because **Prettier will run every time after you are trying to commit**.
- You can run Prettier at any time with the following command: `npm run prettier`

⚠️ You cannot edit Prettier config file. Otherwise your commit won't pass.


## Same code rules : Eslint
- This project uses Eslint. The configuration file is in the `source directory` > `eslint.config.js`.
- Eslint prevent a lot of typo mistakes & future bugs to come. It enforces code rules & conventions.
- It uses all recommanded configurations from Eslint, Tslint and Nglint. It has a few more custom configurations specific for this project.
- You can run Eslint at any time with the following command: ng lint

⚠️ You cannot edit Eslint config file. Otherwise your commit won't pass.

## Clean git workflow : Husky
This project uses Husky. It enforces rules to keep your git workflow clean & consistent. It mainly uses the pre-commit git hook. Before each commit, Husky:
- Makes sure you did not modify Prettier, Eslint or Husky configuration files ;
- Run Prettier and Eslint automatically ;
- Validate branch name and help you to rename it with good practices if test fails.

## Automatic documentation : compodoc
- This project uses compodoc : a dynamic documentation of your whole application. 
- It builds a clean documentation on your localhost and gives you a nice overview of your application. 
- It needs to be rebuilt after each code modification. You can run it with the following command: `npm run compodoc`

## Tests
- To test the application, run the following command: `ng test`. 
- It uses Jasmine & Karma.

## CI/CD
- This project has a Dockerfile to build an image of the application
- This project has a CI/CD pipeline in `source directory` > `.github` > `workflows`.

Flow details: 
- When a push is triggered on any branch (except staging or prod), the CI is triggered and run unit tests & integration tests.
- When a push is triggered on staging, the CI is triggered and run unit tests, integration tests **and E2E tests**. 
- If it fails, details can be found on the github repository > actions tab.
- If everything is fine, then the CD is triggered and an image of the application is built with Docker and then deployed on DockerHub.
- The VPS is configured to listen successfull pushes on staging branch by a webhook, and then pull the docker image from DockerHub, stops the current running docker container & start the new one.
- User only need to refresh its browser & taadaa : the frontend application on staging environnement is now successfully deployed 🎉

👉 The pipeline is the same with the production branch. 



