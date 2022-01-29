const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth");
const fs = require('fs');
puppeteer.use(pluginStealth())
require('dotenv').config();

// ####################################
// ####################################


// user/pass: the email/username login info
const userPower = process.env.USER_POWER;
const passPower = process.env.PASS_POWER;

const userWater = process.env.USER_WATER;
const passWater = process.env.PASS_WATER;

// url: url to the page, the login page in this usecase
const urlPower = process.env.URL_POWER;
const urlWater = process.env.URL_WATER;

// declare fixed utility costs that don't need to be scraped
const dueMortgage = +process.env.MORTGAGE;
const dueHoa = +process.env.HOA;
const dueInternet = +process.env.INTERNET;


// ####################################
// ####################################
// main flow
(async () => { 

	try {

		const browser = await puppeteer.launch({
			ignoreHTTPSErrors: true,
			headless: false
		});

		const page = await browser.newPage();

		// sets screensize
		await page.setViewport({width: 1200, height: 720});
	
		// set directory for screenshots & create if it doesn't exist
		dir = './bills';
		if (!fs.existsSync(dir)){
			fs.mkdirSync(dir);
		}

		// go to power site
		await page.goto(urlPower);
		page.waitForNavigation({ waitUntil: 'networkidle0' }); // Wait for page to finish loading
		await page.waitFor(500);

		// log in
		await page.type('#userEmail', userPower);
		await page.type('#userPassword', passPower);
		await page.click('#novecLoginButton');

		// wait for log in to finish
		await page.waitForNavigation({ waitUntil: 'networkidle0' });
		await page.waitFor(500);

		// identify element
		const f = await page.$("[class='hidden-xs text-center']");

		// obtain text
		var text = await (await f.getProperty('textContent')).jsonValue();
		
		// extract amount due in string then convert to number
		var textNum = text.replace(/[^\d.]/g, "");
		const duePower = +textNum;

		// take screenshot
		await page.screenshot({ path: './bills/powerBill.jpeg' });
		

		// go to water site
		await page.goto(urlWater);
		page.waitForNavigation({ waitUntil: 'networkidle0' }); // Wait for page to finish loading
		await page.waitFor(500);

		// log in
		await page.type('#username', userWater);
		await page.type('#password', passWater);
		await page.click('#submit');

		// wait for log in to finish
		await page.waitFor(2000);

		// obtain text
		var textb = await page.evaluate(el => el.innerText, await page.$('#rightPanelId > div:nth-child(3) > div:nth-child(2) > p:nth-child(4) > span:nth-child(2)'));
		
		// extract amount due in string then convert to number
		var textbNum = textb.replace(/[^\d.]/g, "");
		const dueWater = +textbNum;

		// take screenshot
		await page.screenshot({ path: './bills/waterBill.jpeg' });


		// close session
		await browser.close();

		// summary
		console.log('Mortgage: $', dueMortgage, 'HoA: $', dueHoa, 'Internet: $', dueInternet, 'Power: $', duePower, 'Water: $', dueWater)

		// calculate total
		const dueTotal = (dueMortgage + dueHoa + dueInternet + duePower + dueWater).toFixed(2);

		// calculate share and round up to 2 decimals
		const dueYou = (dueTotal/4).toFixed(2);
		
		// final summary
		console.log('The total is: $', dueTotal, 'and your responsibility is: $', dueYou);

		// Catch and display errors
		} catch (err) {
			console.log(error(err));
			throw err;
	  }

})();
