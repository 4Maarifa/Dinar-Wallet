
export const TokenSelection = {
  Offline: [],
  'Local RPC': [],
  'Ropsten Testnet': [
    {
      symbol: 'dnrb',
      name: 'Dinar Coin',
      contractAddress: '0x6187a4A4808cCA7F9f2A95e2371F9A2C7bFD3327',
      decimals: 18,
      description: 'The first distributed Arab token ',
      url: 'https://dinarab.com',
    },
    
    {
      symbol: 'mkr',
      name: 'Maker',
      contractAddress: '0xece9fa304cc965b00afc186f5d0281a00d3dbbfd',
      decimals: 18,
      description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      url: 'https://makerdao.com/',
    },
  ],
  'Main Net': [
    {
      symbol: 'mero',
      name: 'MonetaryCoin Ero',
      contractAddress: '0x227412a7d92bca453b5e2f790fc8282ca2e1a686',
      decimals: 18,
      description: 'The MonetaryCoin protocol integrates Nobel Prize winning economic theory with blockchain technology.',
      url: 'https://MonetaryCoin.org',
    },
    {
      symbol: 'eos',
      name: 'EOS',
      contractAddress: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
      decimals: 18,
      description: 'Infrastructure for Decentralized Applications',
      url: 'https://eos.io/',
    },
    {
      symbol: 'trx',
      name: 'Tron',
      contractAddress: '0xf230b790e05390fc8295f4d3f60332c93bed42e2',
      decimals: 6,
      description: 'TRON is a blockchain-based decentralized protocol that aims to construct a worldwide free content entertainment system',
      url: 'https://tronlab.com/',
    },
   
  ],
};

export default TokenSelection;
/*
{
  symbol: '',
  name: '',
  contractAddress: '',
  decimals: 18,
  description: '',
},
*/
