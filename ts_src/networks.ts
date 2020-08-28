// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
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
export const hdelix: Network = {
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
export const regtest: Network = {
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
export const testnet: Network = {
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
