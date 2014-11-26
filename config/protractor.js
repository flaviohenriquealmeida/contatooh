// com protractor você remove o seleniumAdress
var config = require('./config')();
exports.config = { 
  sauceUser : config.sauceUser, 
  sauceKey : config.sauceKey, 
  capabilities : {
    'name': config.sauceTestName,
    'browserName': 'chrome',
    "version": "27",
    'tunnel-identifier': config.travisJobNumber,
    'build': config.travisBuild
  },

  specs: ['../test/e2e/**/*Spec.js'],
  onPrepare: function() {
    //browser.ignoreSynchronization = true;
    browser.driver.get('http://localhost:3000');
    browser.driver.findElement(by.id('entrar')).click()
    //element(by.id('entrar')).click(); 
    browser.driver.findElement(by.id('login_field')).sendKeys(config.seleniumUser);
    //element(by.id('login_field')).sendKeys(config.seleniumUser);
    browser.driver.findElement(by.id('password')).sendKeys(config.seleniumUserPassword);
    //element(by.id('password')).sendKeys(config.seleniumUserPassword);
     browser.driver.findElement(by.name('commit')).click();
    //element(by.name('commit')).click();
    //browser.ignoreSynchronization = false;
  }
};