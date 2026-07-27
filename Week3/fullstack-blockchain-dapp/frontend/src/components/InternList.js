import React, { useEffect, useState } from "react";
import API from "../services/api";
import { rewardIntern } from "../services/blockchain";

function InternList() {
  const [interns, setInterns] = useState([]);

  const fetchInterns = async () => {
    try {
      const res = await API.get("/interns");
      setInterns(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchInterns();
  }, []);

  const handleReward = async (index) => {
    try {
      const txHash = await rewardIntern(index, 10);

      alert("Reward Sent Successfully!\n\nTransaction Hash:\n" + txHash);

      fetchInterns();
    } catch (err) {
      console.error(err);
      alert("Reward Transaction Failed");
    }
  };

  return (
    <div>
      <h2>Registered Interns</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Wallet</th>
            <th>Reward Points</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {interns.map((intern, index) => (
            <tr key={intern._id}>
              <td>{intern.name}</td>
              <td>{intern.email}</td>
              <td>{intern.walletAddress}</td>
              <td>{intern.rewardPoints}</td>

              <td>
                <button onClick={() => handleReward(index)}>
                  Reward
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InternList;