const { assert } = require('chai');
const { Button } = require('selenium-webdriver');
let { $, sleep } = require('./funcs');

module.exports = function () {


    this.Given(/^that I am at the Traxmate homepage$/, async function () {
        await helpers.loadPage('https://traxmate.io');
        await sleep(10000);
        let logo = await $('#header_main > div > div > span > a > img');
        assert(logo, 'Expected the Traxmate logo to prove that I am on the Traxmate website');
    });

    this.Given(/^I have clicked on the free sign in button on the homepage$/, async function () {
        let freeSignUpLogoButton = await $('#menu-item-3153 > a')
        freeSignUpLogoButton.click()
        await sleep(4000)
        assert(freeSignUpLogoButton, 'Expected to click on the Free Sign Up button on the home page');
    });

     this.Given(/^I have clicked free sign in button again$/, async function () {
         let secFreeSignUpLogoButton = await $('#after_full_slider_1 > div > div > div > div > div > a:nth-child(2)')
         secFreeSignUpLogoButton.click()
         await sleep(4000)
         assert(secFreeSignUpLogoButton, 'Expected to click the Free Sign Up button a second time')
     });
    
    this.Given(/^I have entered all the credentials$/, async function () {
        let companyNameField = await $('body > tm-app > nb-auth > nb-layout > div > div > div > div > div > nb-layout-column > nb-card > nb-card-body > nb-auth-block > cb-register > nb-card > nb-card-body > form > div:nth-child(1) > input')
        companyNameField.click()
        companyNameField.sendKeys('Straw Hat Pirates')
        await sleep(1000)
        assert(companyNameField, 'Expected the company name input field to be filled in')
                                
        let firstNameField = await $('#input-firstname')
        firstNameField.click()
        await sleep(1000)
        firstNameField.sendKeys('Tobias')
        await sleep(1000)
        assert(firstNameField, 'Expected the first name input field to be filled in')

        let lastNameField = await $('#input-lastname')
        lastNameField.click()
        await sleep(1000)
        lastNameField.sendKeys('Chadman')
        await sleep(1000)
        assert(lastNameField, 'Expected the last name input field to be filled in')
        
        driver.get('https://10minutemail.net/')
        let tempMail = await $('#copy-button')
        let emailAddressField = await $('#input-email')
        emailAddressField.click()
        await sleep(1000)
        //emailAddressField.sendKeys('')
        await sleep(1000)
        assert(tempMail, 'Expected the temp mail to be retrieved')
        assert(emailAddressField, 'Expected the email address input field to be filled in')

        let passwordField = await $('#input-password')
        passwordField.click()
        await sleep(1000)
        passwordField.sendKeys('Kawaiidesu123!')
        await sleep(1000)
        assert(passwordField, 'Expected the password input field to be filled in')

        let confirmPasswordField = await $('#input-re-password')
        confirmPasswordField.click()
        await sleep(1000)
        confirmPasswordField.sendKeys('Kawaiidesu123!')
        await sleep(1000)
        assert(confirmPasswordField, 'Expected the confirm password input field to be filled in')

        
        let agreeToTos = await $('body > tm-app > nb-auth > nb-layout > div > div > div > div > div > nb-layout-column > nb-card > nb-card-body > nb-auth-block > cb-register > nb-card > nb-card-body > form > div.form-control-group.accept-group > nb-checkbox > label > span.custom-checkbox')
        agreeToTos.click()
        await sleep(1000)
        assert(agreeToTos, 'Expected to click the checkbox to agree to TOS')

        let regBtn = await $('body > tm-app > nb-auth > nb-layout > div > div > div > div > div > nb-layout-column > nb-card > nb-card-body > nb-auth-block > cb-register > nb-card > nb-card-body > form > button')
        regBtn.click()
        await sleep(1000)
        assert(regBtn, 'Expected to click register')
    });

        this.Given(/^I should get a message saying account created$/, async function () {
            let accCreatedConfirm = await $('body > tm-app > nb-auth > nb-layout > div > div > div > div > div > nb-layout-column > nb-card > nb-card-body > nb-auth-block > cb-register > nb-card > nb-card-body > nb-alert')
            await sleep(2000)
            assert(accCreatedConfirm, 'Expected account to be created')
        }); 
        
        this.Then(/^I should get an activation email to activate your account$/, async function () {
             
       });

    
    
}