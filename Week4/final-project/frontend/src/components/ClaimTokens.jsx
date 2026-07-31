import { useState } from "react";
import { ethers } from "ethers";
import { TokenVestingABI } from "../contracts/abi";
import { VESTING_ADDRESS } from "../contracts/addresses";

export default function ClaimTokens({ signer }) {
  const [loading, setLoading] = useState(false);
  const claim = async () => {
    try {
      if (!signer) throw new Error("Connect your wallet first.");
      setLoading(true);
      const contract = new ethers.Contract(VESTING_ADDRESS, TokenVestingABI, signer);
      const tx = await contract.claim();
      await tx.wait();
      alert("Tokens claimed successfully!");
    } catch (error) {
      console.error(error);
      alert(error?.shortMessage || error?.reason || error?.message || "Claim failed.");
    } finally { setLoading(false); }
  };

  return (
    <div className="action-card claim-card">
      <div className="card-heading"><span className="card-icon claim-icon">Claim</span><div><p className="eyebrow">BENEFICIARY ACTION</p><h2>Claim available tokens</h2></div></div>
      <p className="card-description">Claim the VEST tokens that have unlocked in your personal vesting schedule.</p>
      <div className="claim-highlight"><span>Secure on-chain claim</span><strong>Only vested tokens are transferred</strong></div>
      <button className="primary-button" disabled={loading} onClick={claim} type="button">{loading ? "Confirming claim..." : "Claim tokens"}<span>→</span></button>
    </div>
  );
}
