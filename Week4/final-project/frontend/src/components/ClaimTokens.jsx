import { ethers } from "ethers";
import { TokenVestingABI } from "../contracts/abi";
import { VESTING_ADDRESS } from "../contracts/addresses";

export default function ClaimTokens({ signer }) {

    const claim = async () => {
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

            const tx = await contract.claim();

            await tx.wait();

            alert("Tokens Claimed Successfully!");

        } catch (err) {
            console.error(err);
            alert("Claim Failed");
        }
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <button onClick={claim}>
                Claim Tokens
            </button>
        </div>
    );
}