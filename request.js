// fetch('https://developerhub.alfabank.by:8273/parther/1.0.0/publix/nationalRates')
//     .then(response => response.json())
//     .then(currentExchange => console.log('currentExchange',currentExchange));
//


//
// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     .then(response => response.json())
//     .then(commits => console.log(commits[0].author.login));

//
// fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/nationalRates')
//     .then(data => {
//         console.log(data);
//         console.log(data.text());
//     });


// let currentExchange; // текущий обменный курс
let allvaluti;   // все валююты
fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/nationalRates')
    .then(response => response.json())
    .then(currentExchange => {
        allvaluti = currentExchange
            // .then(currentExchange => console.log('currentExchange', currentExchange));
        // console.log("status: " +JSON.parse(JSON.stringify()));


const valuta = {
    usd: {},
    eur: {},
    rub: {}

};
console.log('allvaluti', allvaluti);
valuta.usd = allvaluti.rates.find((rate) => rate.iso == 'USD')
valuta.eur = allvaluti.rates.find((rate) => rate.iso == 'EUR')
valuta.rub = allvaluti.rates.find((rate) => rate.iso == 'RUB')

document.querySelector('.currency-usd').innerHTML = valuta.usd.rate;
document.querySelector('.currency-eur').innerHTML = valuta.eur.rate;
document.querySelector('.currency-rub').innerHTML = valuta.rub.rate;
console.log(valuta);

    });
