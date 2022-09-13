document.getElementById("metamask-connect", connect);

function connect() {
  ethereum
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log("Please connect to MetaMask.");
      } else {
        console.error(error);
      }
    });
}

export default connect;
