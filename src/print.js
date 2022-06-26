const path = require('path');
const puppeteer = require('puppeteer');

const distHtmlFilepath = path.resolve(__dirname, '../dist/index.html');

(async () => {
  try {
    const browser = await puppeteer.launch({
      // fix font rendering issues
      // https://github.com/puppeteer/puppeteer/issues/2410
      args: ['--font-render-hinting=none']
    });

    const page = await browser.newPage();
    page.on('pageerror', e => exit(e));
    await page.goto(`file://${distHtmlFilepath}`);

    await page.evaluate(() => {
      document.body.classList.remove('preview');
    });

    await page.pdf({
      path: 'resume.pdf',
      printBackground: true,
      preferCSSPageSize: true
    });

    await browser.close();
  } catch (e) {
    exit(e);
  }
})();

const exit = e => {
  console.error(e);
  process.exit(1);
};
