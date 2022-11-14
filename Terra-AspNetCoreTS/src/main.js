"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var terra_1 = require("./terra");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = (0, terra_1.welcomeMessage)(name);
}
function getBalance(divName, address) {
    var elt = document.getElementById(divName);
    var result = (0, terra_1.GetBalance)(address);
    elt.innerText = "Waiting......";
    result.then(function (val) { return val; })
        .then(function (val) { return elt.innerText = val[0].toString(); });
}
showHello("ts-greeting", "Welcome");
getBalance("ts-balance", "terra1m840lj4rk30edrswmvpqeg684c9hyfchcrqvus");
