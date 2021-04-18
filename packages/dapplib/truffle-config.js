require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hunt nasty bottom system blame develop remember erosion grid entire bone strong'; 
let testAccounts = [
"0x2892f8ae6184b8c372eca34623749f1fde8f6f0d4aab6b3c088d1f212ecdb33f",
"0xcdfc43c5d56a3c0d39d1a6bbceaf48fd72e13d840dba622cac7333b94610bbe4",
"0xf6da640ac85bdea8922e6d87b3657d7ecea6133a984eac89bc010ae8d4caa5f4",
"0x9f933060d7a4070de84209b0f0372df836689040a250b345203b9f4f1b56f584",
"0x6a31973611f8edac3935572dbeddfef95d4d98f254207f007ed65ec4cb54ff1f",
"0x191fd6d9b5643e6316820d1aaeffa4ab58de8a9dd594c7d0957b5d8e449b3e00",
"0xda5519ce887c2582243b38bd3267cf21d43792dcae311996f3f6acef7b8b1135",
"0xa0d603ecdfb7a698f1b63ebf2896702d6c23b4a5e44445b81b9c306207760136",
"0x8ed784ab76a1f00465c2d0bdac1f2a882f590337ab32833f3c6a11c6fa61b9a3",
"0xeb339e90f33b07777a7b7135c121ccf0bda7dc9ebdb36724b9a073a80b1a6586"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


