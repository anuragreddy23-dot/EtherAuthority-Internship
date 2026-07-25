import ConnectWallet from "../components/ConnectWallet";

function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Internship Reward DApp</h1>

      <p>Welcome to the Internship Reward Management System.</p>

      <ConnectWallet />

      <h3>Features</h3>

      <ul style={{ listStyle: "none" }}>
        <li>✅ Register Intern</li>
        <li>✅ Submit Task</li>
        <li>✅ Dashboard</li>
        <li>✅ Approve Task</li>
        <li>✅ MetaMask Wallet</li>
      </ul>
    </div>
  );
}

export default Home;