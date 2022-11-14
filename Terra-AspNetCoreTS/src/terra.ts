import { LCDClient, Coin } from '@terra-money/terra.js';

export function welcomeMessage(name: string) {
    return `${name}`;
}

export function  GetBalance(address: string) {

    
    const terra = new LCDClient({
        URL: 'https://columbus-lcd.terra.dev',
        chainID: 'columbus-5',
        isClassic: true 
    });


    const balance = terra.bank.balance(address);
    return balance;
    //console.log(balance);
}




