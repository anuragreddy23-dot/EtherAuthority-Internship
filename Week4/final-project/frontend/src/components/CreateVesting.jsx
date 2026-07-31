import { useState } from "react";
import { ethers } from "ethers";
import { TokenVestingABI } from "../contracts/abi";
import { VESTING_ADDRESS } from "../contracts/addresses";

export default function CreateVesting({ signer }) {
    const [beneficiary, setBeneficiary] = useState("");
    const [amount, setAmount] = useState("");
    const [cliff, setCliff] = useState("");
    const [duration, setDuration] = useState("");

    const createSchedule = async () => {
        try {
            if (!signer) {
                alert("Connect your wallet first");
                return;
            }

            const contract = new ethers.Contract(
                VESTING_ADDRESS,
                TokenVestingABI,
                signer
            );

            const startTime = Math.floor(Date.now() / 1000);

            const tx = await contract.createVestingSchedule(
                beneficiary,
                ethers.parseEther(amount),
                startTime,
                Number(cliff),
                Number(duration)
            );

            await tx.wait();

            alert("Vesting Schedule Created Successfully!");

            setBeneficiary("");
            setAmount("");
            setCliff("");
            setDuration("");
        } catch (err) {
            console.error(err);
            alert("Transaction Failed");
        }
    };

    return (
        <div style={{ border: "1px solid gray", padding: "20px", marginTop: "20px" }}>
            <h2>Create Vesting Schedule</h2>

            <input
                type="text"
                placeholder="Beneficiary Address"
                value={beneficiary}
                onChange={(e) => setBeneficiary(e.target.value)}
            />
            <br /><br />

            <input
                type="number"
                placeholder="Token Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <br /><br />

            <input
                type="number"
                placeholder="Cliff (seconds)"
                value={cliff}
                onChange={(e) => setCliff(e.target.value)}
            />
            <br /><br />

            <input
                type="number"
                placeholder="Duration (seconds)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <br /><br />

            <button onClick={createSchedule}>
                Create Vesting
            </button>
        </div>
    );
}