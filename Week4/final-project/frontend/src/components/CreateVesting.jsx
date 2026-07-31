import { useState } from "react";
import { ethers } from "ethers";
import { TokenVestingABI } from "../contracts/abi";
import { VESTING_ADDRESS } from "../contracts/addresses";

export default function CreateVesting({ signer }) {
  const [beneficiary, setBeneficiary] = useState("");
  const [amount, setAmount] = useState("");
  const [cliff, setCliff] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  const createSchedule = async (event) => {
    event.preventDefault();
    try {
      if (!signer) throw new Error("Connect your wallet first.");
      if (!ethers.isAddress(beneficiary)) throw new Error("Enter a valid beneficiary address.");
      if (!amount || !cliff || !duration) throw new Error("Complete all vesting details.");

      setLoading(true);
      const contract = new ethers.Contract(VESTING_ADDRESS, TokenVestingABI, signer);
      const startTime = Math.floor(Date.now() / 1000);
      const tx = await contract.createVestingSchedule(
        beneficiary,
        ethers.parseEther(amount),
        startTime,
        Number(cliff),
        Number(duration)
      );
      await tx.wait();
      alert("Vesting schedule created successfully!");
      setBeneficiary(""); setAmount(""); setCliff(""); setDuration("");
    } catch (error) {
      console.error(error);
      alert(error?.shortMessage || error?.reason || error?.message || "Transaction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="action-card">
      <div className="card-heading">
        <span className="card-icon">✦</span>
        <div><p className="eyebrow">ADMIN ACTION</p><h2>Create vesting schedule</h2></div>
      </div>
      <p className="card-description">Allocate VEST tokens with a custom cliff and linear vesting duration.</p>
      <form className="vesting-form" onSubmit={createSchedule}>
        <label>Beneficiary wallet address<input type="text" placeholder="0x…" value={beneficiary} onChange={(e) => setBeneficiary(e.target.value)} /></label>
        <div className="form-grid">
          <label>Token amount<input type="number" min="0" step="any" placeholder="1000" value={amount} onChange={(e) => setAmount(e.target.value)} /></label>
          <label>Cliff (seconds)<input type="number" min="0" placeholder="60" value={cliff} onChange={(e) => setCliff(e.target.value)} /></label>
        </div>
        <label>Vesting duration (seconds)<input type="number" min="1" placeholder="3600" value={duration} onChange={(e) => setDuration(e.target.value)} /></label>
        <button className="primary-button" disabled={loading} type="submit">{loading ? "Creating schedule…" : "Create vesting schedule"}<span>→</span></button>
      </form>
    </div>
  );
}
