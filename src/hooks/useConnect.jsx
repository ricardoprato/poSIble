import { useState } from "react";
import { ethers } from "ethers"; // interacting with wallet
import Swal from "sweetalert2";
export const useConnect = () => {
  const [publicKey, setPublickey] = useState();
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();
  const { ethereum } = window;
  const connect = async () => {
    if (ethereum?.isMetaMask) {
      localStorage.setItem("previouslyConnected", "true");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      const { name, chainId } = await provider.getNetwork();

      setNetwork(name);
      setChainId(chainId);
      setPublickey(accounts[0]);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Necesitas tener Metamask instalado",
        icon: "error",
        confirmButtonText: "OK :(",
      });
    }
  };
  return { publicKey, connect };
};
