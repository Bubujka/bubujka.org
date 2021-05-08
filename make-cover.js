#!/usr/bin/env node
const puppeteer = require('puppeteer');
const glob = require('glob');
const path = require('path');


var d = glob.sync('_cover/*.md');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
      width: 1920,
      height: 1080
  })
  for(var pth of d){
    var code = path.basename(pth, '.md');
    console.log('Обрабатываю: '+code);

    await page.goto('http://localhost:3000/cover/'+code+'.html', { waitUntil: 'networkidle0', });
    await page.screenshot({ path: 'covers/'+code+'.png' });
  }

  await browser.close();
})();
