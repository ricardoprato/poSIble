import { NavLink } from "react-router-dom";

import { useState, useMemo } from "react"; // storing data in the state
import { ethers } from "ethers"; // interacting with wallet
import { useEffect } from "react";

export const Header = () => {
  const [publicKey, setPublickey] = useState();
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();
  const [msg, setMsg] = useState();

  
  const connectButton = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
      localStorage.setItem('previouslyConnected', 'true');
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      const { name, chainId } = await provider.getNetwork();

      setNetwork(name);
      setChainId(chainId);
      setPublickey(accounts[0]);

    } else {
      setMsg("Install MetaMask");
    }
  };
  
  useEffect(() => {
    if(localStorage.getItem('previouslyConnected') === 'true')
    connectButton();
  }, [connectButton]);
  
  const switchNetwork = async (chainId) => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [avlNetwork[`${chainId}`]]
      });
      setNetwork(avlNetwork[`${chainId}`].chainName);
      setChainId(chainId);
    } catch (error) {
      setMsg(error);
    }
  };

  const avlNetwork = {
    137: {
      chainId: `0x${Number(137).toString(16)}`,
      rpcUrls: ["https://rpc-mainnet.matic.network/"],
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      blockExplorerUrls: ["https://polygonscan.com/"]
    },
    43114: {
      chainId: `0x${Number(43114).toString(16)}`,
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      chainName: "Avalanche C-Chain",
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18
      },
      blockExplorerUrls: ["https://snowtrace.io/"]
    }
  };

  const ShortAddressCalculator = (account) => {
    const newAddress = useMemo(() => 
    `${account?.substr(0, 5)}...${account?.substr(-4)}`,
    [account]
    );

    return newAddress;
  };

  const shortAddress = ShortAddressCalculator(publicKey);

  return (
    <header className="bg-darkBlue">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-8 sm:px-6 lg:px-8">
        <div className="sm:justify-between sm:items-center sm:flex">
          <div className="text-center sm:text-left">
            <NavLink to='/'>
              <h1 className="text-2xl text-primary hover:text-yellow font-bold sm:text-4xl">
                poSíble!
              </h1>
            </NavLink>
          </div>

          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
            <NavLink
              to="/faq"
              className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-white transition bg-trasnparent border-b-2 border-transparent hover:text-secondary hover:border-b-2 hover:border-secondary focus:outline-none focus:ring"
            >
              Proyecto
            </NavLink>
            <NavLink
              to="/estudiantes"
              className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-white transition bg-trasnparent border-b-2 border-transparent hover:text-secondary hover:border-b-2 hover:border-secondary focus:outline-none focus:ring"
            >
              Estudiantes
            </NavLink>
            <NavLink
              to="/form"
              className="inline-flex items-center justify-center"
            >
              <div className="inline-flex items-center ju px-6 py-3 text-xl font-medium text-white bg-darkBlue border-2 border-white rounded-lg hover:bg-secondary hover:text-black hover:border-black active:bg-primary focus:outline-none focus:ring">
                <span className="text-sm font-medium"> Ingresar </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </NavLink>
            <NavLink
              to="#"
              className="inline-flex items-center justify-center"
            >
              <a onClick={connectButton} className={publicKey ? "inline-flex items-center ju px-6 py-3 text-xl font-medium text-white border-2 border-white rounded-lg" : "inline-flex items-center ju px-6 py-3 text-xl font-medium text-white bg-darkBlue border-2 border-white rounded-lg hover:bg-secondary hover:text-black hover:border-black active:bg-primary focus:outline-none focus:ring"}>
                <span className="text-sm font-medium"> {publicKey ? shortAddress : 'Metamask'} </span>
                {publicKey
                  ?
                '' :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 ml-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                }
              </a>
            </NavLink>
            {msg && <p>{msg}</p>}
          </div>
        </div>
      </div>
    </header>
  );
};
