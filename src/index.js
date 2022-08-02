require("./App.js")
alert('a');
const Web3 = require("web3");
const solc = require("solc");
const Tx = require('ethereumjs-tx')
const web3 = new Web3(new 
    Web3.providers.HttpProvider("https://ropsten.infura.io"));


    var account1= "0xE5078b80b08bD7036fc0f7973f667b6aa9B4ddBE";
    var key1 = new Buffer('xxxx_validprivatekey_xxxx', 'hex')

var abi = huge_abi
var bytecode = huge_bytecode


var Contract = web3.eth.contract(abi)

const gasPrice = web3.eth.gasPrice;
const gasPriceHex = web3.toHex(gasPrice);
const gasLimitHex = web3.toHex(3000000);

var nonceval = '0x' + new Date().getTime();

var fTx = {
    nonce: nonceval,
    gasPrice: gasPriceHex,
    gasLimit: gasLimitHex,
    data: bytecode,
    from: account1
};

var txx = new Tx(fTx);
txx.sign(key1);

var sTx =txx.serialize();


web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
    if (err) { console.log(err); return; }

    // Log the tx, you can explore status manually with eth.getTransaction()
    console.log('contract creation tx: ' + hash);
});