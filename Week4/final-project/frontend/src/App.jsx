import { useState } from "react";

import "./styles/App.css";
import "./styles/Dashboard.css";
import "./styles/Navbar.css";
import "./styles/Forms.css";

import Navbar from "./components/Navbar";
import WalletConnect from "./components/WalletConnect";
import CreateVesting from "./components/CreateVesting";
import ClaimTokens from "./components/ClaimTokens";
import VestingInfo from "./components/VestingInfo";

const tabs = [
  { id: "create", label: "Create Vesting", icon: "✦" },
  { id: "claim", label: "Claim Tokens", icon: "↗" },
  { id: "info", label: "Vesting Information", icon: "◫" },
];

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState("");
  const [activeTab, setActiveTab] = useState("create");

  return (
    <main className="app-shell">
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />

      <section className="dashboard">
        <Navbar />

        <div className="dashboard-toolbar">
          <div className="network-badge">
            <span className="status-dot" />
            SCAI Mainnet
          </div>
          <WalletConnect
            provider={provider}
            account={account}
            setProvider={setProvider}
            setSigner={setSigner}
            setAccount={setAccount}
          />
        </div>

        <section className="hero-panel">
          <div>
            <p className="eyebrow">DECENTRALIZED TOKEN MANAGEMENT</p>
            <h1>Vesting, made <span>transparent.</span></h1>
            <p className="hero-copy">
              Create token allocations, apply a cliff, and let beneficiaries claim
              their tokens securely over time.
            </p>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-icon">◈</span>
            <div>
              <span className="hero-stat-label">Network ready</span>
              <strong>Smart contracts connected</strong>
            </div>
          </div>
        </section>

        <nav className="tab-list" aria-label="Vesting actions">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              <span>{tab.icon}</span>{tab.label}
            </button>
          ))}
        </nav>

        <section className="content-panel">
          {activeTab === "create" && <CreateVesting signer={signer} />}
          {activeTab === "claim" && <ClaimTokens signer={signer} />}
          {activeTab === "info" && <VestingInfo signer={signer} />}
        </section>

        <footer className="dashboard-footer">
          <span>Powered by SecureChain AI</span>
          <span className="footer-divider">•</span>
          <span>Built for EtherAuthority</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
