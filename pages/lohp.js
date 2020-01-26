var lohpSelectors = require('./../selectors/lohp');
var config = require('../config/qa.json')
var page;

async function login() {
    page = await global.__BROWSER__.newPage();
    await page.setViewport({width: 800, height: 720})
    await page.goto(config.expertlyUrl);
    await page.waitForNavigation({ waitUntil: 'networkidle0' }),
    await page.type(lohpSelectors.username, config.expertlyUsername);
    await page.type(lohpSelectors.password, config.expertlyPassword);
    // click and wait for navigation
    await Promise.all([
        page.click(lohpSelectors.submit),
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
}

async function verifyTitle() {
    const title = await page.title();
    console.log(title);
    expect(title).toMatch('Expertly');
}

module.exports = {
    login,
    verifyTitle
}