import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./containers/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Student } from "./pages/Student";
import { Students } from "./pages/Students";
import { Faq } from "./pages/Faq";

import { Form } from "./pages/Form";

import { useState } from "react"; // storing data in the state
import { ethers } from "ethers"; // interacting with wallet

function App() {

  const [publicKey, setPublickey] = useState();
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();
  const [msg, setMsg] = useState();

  const connectButton = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
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

  const swithcNetwork = async (chainId) => {
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

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/estudiantes" element={<Students />} />
          <Route exact path="/estudiantes/:id" element={<Student />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
        <h1>Connect MetaMask</h1>
      <button onClick={connectButton}>Connect Wallet</button>
      <br />
      <button className="btn" onClick={() => swithcNetwork(137)}>
        Connect Polygon
      </button>
      <br />
      <button className="btn" onClick={() => swithcNetwork(43114)}>
        Connect Avalanche
      </button>
      <p>Public Key: {publicKey}</p>
      <p>Network: {network}</p>
      <p>Chain ID : {chainId}</p>
      {msg && <p>{msg}</p>}
      </BrowserRouter>
    </>
  );
}

export default App;
