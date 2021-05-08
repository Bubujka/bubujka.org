#!/usr/bin/env node
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
      width: 1920,
      height: 1080
  })
  await page.goto('http://localhost:3000/cover/1.html', { waitUntil: 'networkidle0', });

  await page.screenshot({ path: 'cover1.png' });

  await browser.close();
})();
