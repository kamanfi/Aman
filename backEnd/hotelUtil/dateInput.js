const crawler = require('./crawler')


// Todo: add amount of people and rooms 10/17/2019
const inputDate= (arriveDate, departDate) =>{

const formatedUrl=`https://gc.synxis.com/rez.aspx?arrive=${arriveDate}&depart=${departDate}&adult=1&Chain=16840&template=RBE3&shell=RBE2&__utma=234760334.1545028225.1569693646.1569693646.1569693646.1&__utmb=234760334.6.10.1569693646&__utmc=234760334&__utmx=-&__utmz=234760334.1569693646.1.1.utmcsr%3Dgoogle%7Cutmccn%3D%28organic%29%7Cutmcmd%3Dorganic%7Cutmctr%3D%28not%20provided%29&__utmv=-&__utmk=226717662`
  crawler(formatedUrl)
  return formatedUrl
}

module.exports = inputDate;

// console.log(inputDate("10/17/2019", "11/17/2019"));


// https://gc.synxis.com/rez.aspx?arrive=10/17/2019&depart=11/17/2019&adult=1&Chain=16840&template=RBE3&shell=RBE2&__utma=234760334.1545028225.1569693646.1569693646.1569693646.1&__utmb=234760334.6.10.1569693646&__utmc=234760334&__utmx=-&__utmz=234760334.1569693646.1.1.utmcsr%3Dgoogle%7Cutmccn%3D%28organic%29%7Cutmcmd%3Dorganic%7Cutmctr%3D%28not%20provided%29&__utmv=-&__utmk=226717662
