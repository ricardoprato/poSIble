import Web3 from 'web3/dist/web3.min';
// import { InjectedConnector } from '@web3-react/injected-connector'
import { Web3Provider } from '@ethersproject/providers'

// const connector = new InjectedConnector({ 
//   supportedChainIds: [
//     5
//   ]
// });

const getLibrary = (provider) => {
  const ethersProvider = new Web3Provider(provider);
  return ethersProvider;
}

export default getLibrary;