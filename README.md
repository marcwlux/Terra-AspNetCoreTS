

<p>&nbsp;</p>


<p align="center">
Terra-AspNetCoreTS a template to create Asp.Net Core website with client-side JS
</p>

![diagram](https://raw.githubusercontent.com/terra-money/terra.js/master/img/terrajs-diagram.png)

<br/>

<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/terra-money/terra.js">
  <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@terra-money/terra.js">
</p>

<p align="center">
  <a href="https://docs.terra.money/docs/develop/sdks/terra-js/README.html"><strong>Explore the Docs »</strong></a>
  <br />
  <br/>
  <a href="https://docs.terra.money/docs/develop/sdks/terra-js/common-examples.html">Examples</a>
  ·
  <a href="https://terra-money.github.io/terra.js/">API Reference</a>
  ·
  <a href="https://www.npmjs.com/package/@terra-money/terra.js">NPM Package</a>
  ·
  <a href="https://github.com/terra-money/terra.js">GitHub</a>
</p>

Terra.js is a JavaScript SDK for writing applications that interact with the Terra blockchain from either Node.js, browser, or React Native environments and provides simple abstractions over core data structures, serialization, key management, and API request generation.

## Features

- **Written in TypeScript**, with type definitions
- Versatile support for [key management](https://docs.terra.money/docs/develop/sdks/terra-js/keys.html) solutions
- Works in Node.js, in the browser, and React Native
- Exposes the Terra API through [`LCDClient`](https://docs.terra.money/docs/develop/sdks/terra-js/query-data.html)
- Parses responses into native JavaScript types

We highly suggest using Terra.js with TypeScript, or JavaScript in a code editor that has support for type declarations, so you can take advantage of the helpful type hints that are included with the package.

## Installation

```sh
npm install @terra-money/terra.js
```

## Usage


### Getting blockchain data
:exclamation: terra.js can connect both terra-classic and terra network. If you want to communicate with classic chain, you have to set isClassic as `true`.
```ts
import { LCDClient, Coin } from '@terra-money/terra.js';

// connect to pisco testnet
const terra = new LCDClient({
  URL: 'https://pisco-lcd.terra.dev',
  chainID: 'pisco-1',
  isClassic: false  // if it is unset, LCDClient assumes the flag is false.
});

// connect to columbus-5 terra classic network
const terra = new LCDClient({
  URL: 'https://columbus-lcd.terra.dev',
  chainID: 'columbus-5',
  isClassic: true  // *set to true to connect terra-classic chain*
});

// To use LocalTerra
// const terra = new LCDClient({
//   URL: 'http://localhost:1317',
//   chainID: 'localterra'
// });

// get the current balance of `terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v`
const balance = terra.bank.balance('terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v');
console.log(balance);
```

### Broadcasting transactions

First, [get](https://faucet.terra.money/) some testnet tokens for `terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v`, or use [LocalTerra](https://www.github.com/terra-money/LocalTerra).

```ts
import { LCDClient, MsgSend, MnemonicKey } from '@terra-money/terra.js';

// create a key out of a mnemonic
const mk = new MnemonicKey({
  mnemonic:
    'notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius',
});

// connect to bombay testnet
const terra = new LCDClient({
  URL: 'https://pisco-lcd.terra.dev',
  chainID: 'pisco-1',
});

// To use LocalTerra
// const terra = new LCDClient({
//   URL: 'http://localhost:1317',
//   chainID: 'localterra'
// });

// a wallet can be created out of any key
// wallets abstract transaction building
const wallet = terra.wallet(mk);

// create a simple message that moves coin balances
const send = new MsgSend(
  'terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
  'terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp',
  { uluna: 1200000}
);

wallet
  .createAndSignTx({
    msgs: [send],
    memo: 'test from terra.js!',
  })
  .then(tx => terra.tx.broadcast(tx))
  .then(result => {
    console.log(`TX hash: ${result.txhash}`);
  });
```



## License

This software is licensed under the MIT license. See [LICENSE](./LICENSE) for full disclosure.


<hr/>

<p>&nbsp;</p>
<p align="center">
    <a href="https://terra.money/"><img src="https://assets.website-files.com/611153e7af981472d8da199c/61794f2b6b1c7a1cb9444489_symbol-terra-blue.svg" align="center" width=200/></a>
</p>
