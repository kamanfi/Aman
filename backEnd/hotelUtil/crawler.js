const puppeteer = require('puppeteer');

const crawler  = (url='https://google.com') => {

 let HotelList = (async () => {
    let hotelList =[];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.click('.CriteriaBtnDiv input');
    await page.screenshot({path: 'example.png'});
    // hotelList.push(page.querySelector('.HotelList'));
    await browser.close();
     // console.log(hotelList)
  })();

 return HotelList;
}

module.exports = crawler;