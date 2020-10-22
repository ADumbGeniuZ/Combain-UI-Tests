const { assert } = require('chai');
const { Button } = require('selenium-webdriver');
let { $, sleep } = require('./funcs');

module.exports = function () { 

     this.Given(/^I have clicked on the Login button on the homepage$/, async function () {
         let loginHomepageBtn = await $('#menu-item-3151 > a > span.avia-menu-text')
         loginHomepageBtn.click()
         await sleep(3000)
         assert(loginHomepageBtn, 'Expected to click the login button on the homepage')
     });
    
     this.Given(/^I have entered the credentials$/, async function () {
         let emailAddressField = await $('#input-email')
         emailAddressField.click()
         emailAddressField.sendKeys('garthetestmail@gmail.com')
         await sleep(1000)
         assert(emailAddressField, 'Expected the email address to be put into the input field')

         let passwordField = await $('#input-password')
         passwordField.click()
         passwordField.sendKeys('Kawaiidesu123!')
         await sleep(1000)
         assert(passwordField, 'Expected the password to be put into the input field')
     });
    
    this.Given(/^I have clicked Log In$/, async function () {
        let loginPageBtn = await $('body > tm-app > nb-auth > nb-layout > div > div > div > div > div > nb-layout-column > nb-card > nb-card-body > nb-auth-block > cb-login > form > button')
        loginPageBtn.click()
        await sleep(3000)
        assert(loginPageBtn, 'Expected to click the login button on the login page')
    });

    
    this.Then(/^you should get directed to the dashboard on your account$/, async function () {
        let accountDashboardConfirm = await $('body > tm-app > tm-pages > cb-layout > nb-layout > div > div > nb-layout-header > nav > cb-header > div.header-container.left > div > img')
        await sleep(2000)
        assert(accountDashboardConfirm, 'Expected to get directed to the dashboard')
       });

}