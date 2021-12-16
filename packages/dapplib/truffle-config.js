require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth remind pulse hunt brave equal gate'; 
let testAccounts = [
"0x1c53d8e07c3308bc0fcb2bf8cf2e50846df6311ebc19642496572730996841b5",
"0x222a0b92e8de3d74abc49d78dc52d010ac2d8d59fda3bb0e6b41044cacc1de97",
"0x5d07db4a01eb1a2c487cfbf205b5754055cb91927c0b7bdf63450dc780e85d2f",
"0xd4e5dbef538777e03fa9b2a0317c47b373fb27a0632b2ca06b75289602a9bf0c",
"0xe208724983c5092bd671acb53013a6a55e7b8e9b96a6d45c0a063e75325bfb3a",
"0x4e8edd56e44356ab279290d803a73581191322eeef7497b786437d123de19d3b",
"0x99626841ba636e957d85d4247e9ec5e826e62841033ea12bbf8a0b40b34da7e4",
"0x04c5f26e3bceb6dbd6a332a2aa93231f399d8f6fd8db4a8351ecf40960a42a47",
"0x64aa228bb081ec6d44e4e5e2822db0a1f108d2dceffb4325cdbe50136c4befdf",
"0xb8097754613b4a13e35a0400a90407d94d7e61f8c060a979665d5bc2f336e9a0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


