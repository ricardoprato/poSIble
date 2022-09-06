import abi from "./data/abi.json" assert {type: "json"};

const blockchain = new Promise((resolve, reject) => {
    if(typeof window.ethereum == 'undefined') {
        reject("Debes de instalar Metamask para poder usarlo!");
    }

    // Web3 instance
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0xF347ea5bb989adc5cbf3572374E6e5161f926716");

    // Get my Metamask address
    web3.eth.requestAccounts().then((accounts) => {
        console.log("My account is ", accounts[0])
    });
});

export default blockchain;