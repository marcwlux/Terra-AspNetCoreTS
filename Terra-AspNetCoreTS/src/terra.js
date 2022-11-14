"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBalance = exports.welcomeMessage = void 0;
var terra_js_1 = require("@terra-money/terra.js");
function welcomeMessage(name) {
    return "".concat(name);
}
exports.welcomeMessage = welcomeMessage;
function GetBalance(address) {
    var terra = new terra_js_1.LCDClient({
        URL: 'https://columbus-lcd.terra.dev',
        chainID: 'columbus-5',
        isClassic: true
    });
    var balance = terra.bank.balance(address);
    return balance;
    //console.log(balance);
}
exports.GetBalance = GetBalance;
