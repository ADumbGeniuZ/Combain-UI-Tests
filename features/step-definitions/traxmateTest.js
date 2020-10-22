let { $, sleep } = require('./funcs');

module.exports = function () {

    this.When(/^I goto traxmate\.io$/, async function () {
        await helpers.loadPage('https://traxmate.io/');
        await sleep(5000);
    });

    this.Then(/^the traxmate homepage shows up$/, async function () {
        await sleep(1000);
        let trax = await $("#layerslider_2_1i77fi5fdif40 > div.ls-inner > div > div.ls-wrapper.ls-in-out.ls-hide-on-phone.ls-hide-on-tablet > img");
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
        email.sendkeys();
    });



}



