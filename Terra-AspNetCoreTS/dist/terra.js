"use strict";
//import { LCDClient, Coin } from '@terra-money/terra.js';
Object.defineProperty(exports, "__esModule", { value: true });
exports.balance = exports.getBalance = exports.Balance = exports.TSButton = void 0;
//// connect to columbus-5 terra classic network
//export const terra = new LCDClient({
//    URL: 'https://columbus-lcd.terra.dev',
//    chainID: 'columbus-5',
//    isClassic: true  // *set to true to connect terra-classic chain*
//});
// get the current balance of `terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v`
//export const balance2 =  terra.bank.balance('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v');
function TSButton() {
    document.getElementById("ts-balance").innerHTML = getBalance(exports.balance);
}
exports.TSButton = TSButton;
var Balance = /** @class */ (function () {
    function Balance(address, amount, token) {
        this.address = address;
        this.amount = amount;
        this.token = token;
        this.accountBalance = this.address + " " + this.amount + " " + this.token;
    }
    return Balance;
}());
exports.Balance = Balance;
function getBalance(balance) {
    return balance.accountBalance;
}
exports.getBalance = getBalance;
exports.balance = new Balance("terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v", "1000", "LUNAC");
