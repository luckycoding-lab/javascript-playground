const btcoin = document.getElementById("valuebt");
const etcoin = document.getElementById("valueet");
const dccoin = document.getElementById("valuedc");

var apiKey = {
    key : '2cf70242-694d-492f-8c11-dfaca7da517e'
}

request('GET','https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apiKey.key)
.then((r1) =>{
    const response = JSON.parse(r1.target.responseText);
    // console.log(response);

    dccoin.innerHTML= ("$" +    response.data.defi_market_cap);
    etcoin.innerHTML= ("$" +    response.data.eth_dominance);
    btcoin.innerHTML = ("$" +   response.data.btc_dominance);
}).catch();

function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}
