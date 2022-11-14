
import { welcomeMessage, GetBalance } from "./terra";



function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = welcomeMessage(name);
}

function getBalance(divName: string, address: string) {
    const elt = document.getElementById(divName);

    const result = GetBalance(address);
    elt.innerText = "Waiting......";

    result.then((val) => val)
        .then((val) => elt.innerText = val[0].toString());
}

showHello("ts-greeting", "Welcome");
getBalance("ts-balance","terra1m840lj4rk30edrswmvpqeg684c9hyfchcrqvus");



