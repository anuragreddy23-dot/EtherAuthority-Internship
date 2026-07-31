import { useState } from "react";
import { ethers } from "ethers";
import { TokenVestingABI } from "../contracts/abi";
import { VESTING_ADDRESS } from "../contracts/addresses";

export default function VestingInfo({ signer }) {
  const [beneficiary, setBeneficiary] = useState("");
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSchedule = async (event) => {
    event.preventDefault();
    try {
      if (!signer) throw new Error("Connect your wallet first.");
      if (!ethers.isAddress(beneficiary)) throw new Error("Enter a valid beneficiary address.");
      setLoading(true);
      const contract = new ethers.Contract(VESTING_ADDRESS, TokenVestingABI, signer);
      setSchedule(await contract.getSchedule(beneficiary));
    } catch (error) {
      console.error(error);
      alert(error?.shortMessage || error?.reason || error?.message || "Unable to fetch vesting information.");
    } finally { setLoading(false); }
  };

  const total = schedule ? Number(ethers.formatEther(schedule.totalAmount)) : 0;
  const claimed = schedule ? Number(ethers.formatEther(schedule.claimedAmount)) : 0;
  const remaining = Math.max(total - claimed, 0);

  return (
    <div className="action-card">
      <div className="card-heading"><span className="card-icon info-icon">Info</span><div><p className="eyebrow">ON-CHAIN DATA</p><h2>Vesting information</h2></div></div>
      <p className="card-description">Look up a beneficiary’s token allocation and vesting timeline.</p>
      <form className="lookup-form" onSubmit={fetchSchedule}>
        <label>Beneficiary wallet address<input type="text" placeholder="0x..." value={beneficiary} onChange={(event) => setBeneficiary(event.target.value)} /></label>
        <button className="secondary-button" disabled={loading} type="submit">{loading ? "Loading..." : "Load details"}</button>
      </form>
      {schedule && <div className="vesting-results">
        <div className="metric-grid">
          <div className="metric"><span>Total allocation</span><strong>{total.toLocaleString()} <small>VEST</small></strong></div>
          <div className="metric"><span>Claimed</span><strong>{claimed.toLocaleString()} <small>VEST</small></strong></div>
          <div className="metric"><span>Remaining</span><strong>{remaining.toLocaleString()} <small>VEST</small></strong></div>
        </div>
        <div className="timeline-details">
          <p><span>Start time</span><strong>{new Date(Number(schedule.startTime) * 1000).toLocaleString()}</strong></p>
          <p><span>Cliff period</span><strong>{Number(schedule.cliffDuration).toLocaleString()} seconds</strong></p>
          <p><span>Vesting duration</span><strong>{Number(schedule.vestingDuration).toLocaleString()} seconds</strong></p>
        </div>
      </div>}
    </div>
  );
}
