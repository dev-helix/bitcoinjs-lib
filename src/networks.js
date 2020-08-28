'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x18DarkNet Signed Message:\n',
  bech32: 'ph',
  bip32: {
    public: 0x022d2533,
    private: 0x0221312b,
  },
  pubKeyHash: 0x28,
  scriptHash: 0x0d,
  wif: 0xd4,
};
exports.helix = {
  messagePrefix: '\x18DarkNet Signed Message:\n',
  bech32: 'ph',
  bip32: {
    public: 0x022d2533,
    private: 0x0221312b,
  },
  pubKeyHash: 0x28,
  scriptHash: 0x0d,
  wif: 0xd4,
};
exports.regtest = {
  messagePrefix: '\x18DarkNet Signed Message:\n',
  bech32: 'tp',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18DarkNet Signed Message:\n',
  bech32: 'hlixt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
