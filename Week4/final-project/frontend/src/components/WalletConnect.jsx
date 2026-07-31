import { ethers } from "ethers";

const shortenAddress = (address) => `${address.slice(0, 6)}…${address.slice(-4)}`;

export default function WalletConnect({ account, setProvider, setSigner, setAccount }) {
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask to connect your wallet.");
        return;
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });
      const walletProvider = new ethers.BrowserProvider(window.ethereum);
      const walletSigner = await walletProvider.getSigner();
      const walletAccount = await walletSigner.getAddress();

      setProvider(walletProvider);
      setSigner(walletSigner);
      setAccount(walletAccount);
    } catch (error) {
      console.error(error);
      alert(error?.shortMessage || "Wallet connection failed.");
    }
  };

  return account ? (
    <div className="wallet-status" title={account}>
      <span className="wallet-status-dot" />
      <span className="wallet-status-label">Connected</span>
      <strong>{shortenAddress(account)}</strong>
    </div>
  ) : (
    <button className="connect-button" onClick={connectWallet} type="button">
      <span>◈</span> Connect wallet
    </button>
  );
}
