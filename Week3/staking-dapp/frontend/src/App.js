import "./App.css";
import WalletConnect from "./components/WalletConnect";
import Stake from "./components/Stake";
import Unstake from "./components/Unstake";

function App() {
  return (
    <div className="App">
      <h1>Staking DApp</h1>

      <WalletConnect />

      <Stake />

      <Unstake />
    </div>
  );
}

export default App;