let { $, sleep } = require('./funcs');

module.exports = function () {

    this.When(/^I goto traxmate\.io$/, async function () {
        await helpers.loadPage('https://traxmate.io/');
        await sleep(8000);
    });

    this.Then(/^the traxmate homepage shows up$/, async function () {
        await sleep(1000);
        let trax = await $("#header_main > div > div > span > a > img");
        assert(trax, "Expected traxmate logo");
    });

    this.When(/^I click on the login button$/, async function () {
        let loginButton = await $("#menu-item-3151 > a > span.avia-menu-text");
        loginButton.click();
        await sleep(3000);
    });

    this.Then(/^I am directed to the login page$/, async function () {
        let emailBox = await $("#input-email");
        assert(emailBox, "expected input box for email");
    });

    this.When(/^I enter my email "([^"]*)"$/, async function (email) {
        let emailBox = await $("#input-email");
        emailBox.click();
        emailBox.sendKeys(email);
        assert(email, "expected to have an email address")
    });

    this.When(/^my password "([^"]*)"$/, async function (password) {
        let passwordBox = await $("#input-password");
        passwordBox.click();
        passwordBox.sendKeys(password);
        assert(passwordBox, "expected to have an input for password")
    });

    this.When(/^click on the log in button$/, async function () {
        let loginButton = await $("body > tm-app > nb-auth > nb-layout > div > div > div > div > div > nb-layout-column > nb-card > nb-card-body > nb-auth-block > cb-login > form > button");
        loginButton.click();
    });

    this.Then(/^I should be logged in$/, async function () {
        let dashboard = await $("body > tm-app > tm-pages > cb-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c128-0.ng-star-inserted > a > nb-icon");
        assert(dashboard, "Expected dashboard");
        await sleep(5000);
    });

}



