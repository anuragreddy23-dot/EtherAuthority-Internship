import { useState } from "react";
import { ethers } from "ethers";
import { TokenVestingABI } from "../contracts/abi";
import { VESTING_ADDRESS } from "../contracts/addresses";

export default function VestingInfo({ signer }) {
    const [beneficiary, setBeneficiary] = useState("");
    const [schedule, setSchedule] = useState(null);

    const fetchSchedule = async () => {
        try {
            if (!signer) {
                alert("Connect Wallet");
                return;
            }

            const contract = new ethers.Contract(
                VESTING_ADDRESS,
                TokenVestingABI,
                signer
            );

            const data = await contract.getSchedule(beneficiary);

            setSchedule(data);

        } catch (err) {
            console.error(err);
            alert("Unable to fetch vesting information");
        }
    };

    return (
        <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px" }}>
            <h2>Vesting Information</h2>

            <input
                type="text"
                placeholder="Beneficiary Address"
                value={beneficiary}
                onChange={(e) => setBeneficiary(e.target.value)}
            />

            <button onClick={fetchSchedule}>
                Check
            </button>

            {schedule && (
                <div style={{ marginTop: "20px" }}>
                    <p><strong>Total Tokens:</strong> {ethers.formatEther(schedule.totalAmount)}</p>
                    <p><strong>Claimed:</strong> {ethers.formatEther(schedule.claimedAmount)}</p>
                    <p><strong>Start Time:</strong> {Number(schedule.startTime)}</p>
                    <p><strong>Cliff:</strong> {Number(schedule.cliffDuration)} sec</p>
                    <p><strong>Duration:</strong> {Number(schedule.vestingDuration)} sec</p>
                </div>
            )}
        </div>
    );
}