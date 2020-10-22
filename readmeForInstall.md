If not created already, create a folder in the project's root directory named "features" and create two folders in it called "step-definitions" and "reports"

Selenium-Cucumber-js Setup
npm init -y
npm install selenium-cucumber-js --save-dev
npm install 
npm uninstall cucumber
npm install --save-dev @cucumber/cucumber
open node_modules/selenium-cucumber-js/package.json 
change dependencies to   
"dependencies": {
    "chai": "4.2.0",
    "chalk": "4.1.0",
    "chromedriver": "^86.0.0",
    "commander": "6.1.0",
    "cucumber-html-reporter": "5.2.0",
    "cucumber-junit": "1.7.1",
    "electron": "^10.1.4",
    "electron-chromedriver": "^10.0.0",
    "electron-packager": "^15.1.0",
    "electron-prebuilt": "^1.4.13",
    "eyes.selenium": "3.9.1",
    "fs-plus": "3.1.1",
    "geckodriver": "^1.16.2",
    "merge": "^1.2.1",
    "phantomjs-prebuilt": "2.1.12",
    "require-dir": "1.2.0",
    "selenium-webdriver": "4.0.0-alpha.7"
  },
in a terminal goto node_modules/selenium-cucumber-js/
npm update

npm audit fix - you may get an error that tells you to install node modules again. do it if you get this error.

then in the base directory package.json change "test" to:
"test": "node ./node_modules/selenium-cucumber-js/index.js -s ./features/step-definitions && exit 0"
 
 npm test to confirm