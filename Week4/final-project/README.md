# 🚀 Token Vesting System

<div align="center">

![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg)
![Hardhat](https://img.shields.io/badge/Hardhat-Framework-yellow.svg)
![React](https://img.shields.io/badge/React-Frontend-61DAFB.svg)
![Ethers.js](https://img.shields.io/badge/Ethers.js-Web3-purple.svg)
![MetaMask](https://img.shields.io/badge/Wallet-MetaMask-orange.svg)
![SCAI](https://img.shields.io/badge/Network-SCAI%20Mainnet-green.svg)
![License](https://img.shields.io/badge/License-MIT-red.svg)

</div>

---

# 📖 Project Overview

The **Token Vesting System** is a decentralized blockchain application (DApp) developed as part of the **EtherAuthority Web3 Internship**.

The project enables secure and transparent distribution of ERC-20 tokens through configurable vesting schedules. Instead of releasing tokens immediately, the system locks tokens and gradually releases them over time based on predefined vesting conditions.

The application consists of Solidity smart contracts deployed on the **SCAI Mainnet**, a React frontend integrated with **Ethers.js**, and MetaMask wallet connectivity.

---

# 🎯 Objectives

- Develop secure Solidity smart contracts.
- Integrate React frontend with Web3.
- Connect MetaMask wallet.
- Deploy contracts on SCAI Mainnet.
- Perform unit testing.
- Implement security validations.
- Optimize gas usage.
- Build a complete decentralized application.

---

# ✨ Features

- 🔐 ERC20 Vesting Token
- 📅 Create Vesting Schedule
- ⏳ Cliff-based Vesting
- 📈 Linear Token Release
- 💰 Claim Vested Tokens
- 👛 MetaMask Wallet Integration
- ⚡ React + Ethers.js Frontend
- 🌐 SCAI Mainnet Deployment
- 🧪 Hardhat Testing
- 🔒 OpenZeppelin Security
- 📊 Real-Time Vesting Information

---

# 🛠 Technology Stack

## Smart Contracts

- Solidity ^0.8.24
- OpenZeppelin Contracts

## Blockchain

- SecureChain AI (SCAI) Mainnet

## Development

- Hardhat
- Node.js
- npm

## Frontend

- React.js
- Vite
- JavaScript
- CSS

## Web3

- Ethers.js
- MetaMask

---

# 📂 Project Structure

```text
Week4/
│
├── contracts/
│   ├── VestingToken.sol
│   └── TokenVesting.sol
│
├── scripts/
│   └── deploy.js
│
├── test/
│   └── TokenVesting.test.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │
│   ├── components/
│   │   ├── WalletConnect.jsx
│   │   ├── CreateVesting.jsx
│   │   ├── ClaimTokens.jsx
│   │   ├── VestingInfo.jsx
│   │   └── Navbar.jsx
│   │
│   ├── contracts/
│   │   ├── abi.js
│   │   └── addresses.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── hardhat.config.js
├── package.json
└── README.md
```

---

# 🏗 Project Architecture

```text
                User
                  │
                  ▼
        React Frontend (Vite)
                  │
                  ▼
              Ethers.js
                  │
                  ▼
             MetaMask Wallet
                  │
                  ▼
        SecureChain AI Mainnet
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
TokenVesting.sol     VestingToken.sol
```

---

# ⚙ Smart Contract Development

Two Solidity smart contracts were developed.

## 1️⃣ VestingToken.sol

ERC20 token contract responsible for creating and managing vesting tokens.

### Features

- ERC20 Standard Token
- Mint Tokens
- Owner Controlled Minting
- OpenZeppelin ERC20
- Ownable Access Control

---

## 2️⃣ TokenVesting.sol

Main vesting smart contract.

### Features

- Create Vesting Schedule
- Store Beneficiary Details
- Linear Vesting Calculation
- Cliff Period
- Claim Vested Tokens
- Owner-only Schedule Creation

---

# 💻 Frontend Integration (React + Web3)

The frontend was developed using **React.js** and **Ethers.js** to interact with the deployed smart contracts.

### Functionalities

- Connect MetaMask Wallet
- Create Vesting Schedule
- Claim Tokens
- Display Vesting Information
- Real-Time Blockchain Interaction

---

# 👛 Wallet Connection Integration

The DApp integrates MetaMask for blockchain interaction.

### Supported Features

- Connect Wallet
- Detect Connected Account
- Transaction Signing
- Smart Contract Interaction
- Network Detection

---

# 🌐 Blockchain Network Integration

The application is deployed on **SecureChain AI (SCAI) Mainnet**.

### Network Details

- Network: SecureChain AI Mainnet
- Chain ID: 34
- Currency: SCAI

### Integrated Using

- Ethers.js
- MetaMask
- Solidity Smart Contracts

---

# 📜 Smart Contract Addresses

## VestingToken

```text
0x92FF117C1E2E1a0273d03408Fc65310f184B3699
```

## TokenVesting

```text
0xa7bE545ca629a3cE6A79c4b121025d18B19f6D01
```

---

# 📦 Installation

Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/EtherAuthority-Internship.git
```

Install Dependencies

```bash
npm install
```

Compile Contracts

```bash
npx hardhat compile
```

Deploy Contracts

```bash
npx hardhat run scripts/deploy.js --network scai
```

Run Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# ▶ Running the Project

### Start Hardhat

```bash
npx hardhat compile
```

### Deploy Contracts

```bash
npx hardhat run scripts/deploy.js --network scai
```

### Start React Application

```bash
cd frontend

npm run dev
```

Open:

```
http://localhost:5173
```
