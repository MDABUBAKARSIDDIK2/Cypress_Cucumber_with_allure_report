clone this repo and open terminal with root project directory and following the command step by step:

install the dependencies
npm init -y
npm install cypress --save-dev
npm install @badeball/cypress-cucumber-preprocessor
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
npm i @shelex/cypress-allure-plugin
npm i cypress-xpath
npm i cypress-parallel
simple run:
 npm run cy:run
run with generate allure results:
npm run cy:run:allure
run in parallel with allure results:
npm run cy:parallel  
see allure results:
allure serve .\allure-results\ 
