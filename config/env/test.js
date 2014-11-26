module.exports = {
	env: 'test',
	db: 'mongodb://127.0.0.1:27017/contatooh_test',
	clientID: process.env.CLIENT_ID, 
	clientSecret: process.env.CLIENT_SECRET,
	sauceTestName: 'Contatooh E2E Testing',
 	sauceUser : process.env.SAUCE_USERNAME, 
  	sauceKey : process.env.SAUCE_ACCESS_KEY, 
	seleniumUser: process.env.SELENIUM_USER, 
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD,
	travisJobNumber: process.env.TRAVIS_JOB_NUMBER,
    travisBuild: process.env.TRAVIS_BUILD_NUMBER, 
    port: 3000, 
	address: 'localhost', 
	domain: 'localhost:3000'
};