# 🚀 Token Vesting System

A decentralized **Token Vesting System** built using **Solidity, Hardhat, React, Ethers.js, and MetaMask**. This DApp enables administrators to create secure token vesting schedules while allowing beneficiaries to claim vested tokens over time.

---

## 📖 Project Overview

The **Token Vesting System** is a blockchain-based decentralized application (DApp) that securely manages token distribution through configurable vesting schedules.

Instead of distributing tokens instantly, the system releases tokens gradually according to predefined vesting parameters such as:

- Vesting Amount
- Cliff Period
- Vesting Duration

This approach ensures secure and transparent token distribution while preventing immediate token dumping.

---

# ✨ Features

- 🔐 Secure ERC-20 Token Contract
- 📅 Create Custom Vesting Schedules
- ⏳ Cliff & Linear Vesting Support
- 💰 Claim Vested Tokens
- 👛 MetaMask Wallet Integration
- ⚡ React + Ethers.js Frontend
- 🌐 SCAI Mainnet Deployment
- 🧪 Hardhat Unit Testing
- 🔒 Ownership Protection using OpenZeppelin Ownable
- 📊 Real-Time Vesting Information

---

# 🛠 Technology Stack

### Smart Contracts

- Solidity ^0.8.24
- OpenZeppelin Contracts

### Development

- Hardhat
- Ethers.js
- Node.js

### Frontend

- React.js
- Vite
- JavaScript
- CSS

### Wallet

- MetaMask

### Blockchain

- SecureChain AI (SCAI) Mainnet

---

# 📂 Project Structure

```
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
│   │   ├── components/
│   │   ├── contracts/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── hardhat.config.js
├── package.json
└── README.md
```

---

# ⚙️ Smart Contract Architecture

## VestingToken.sol

ERC-20 token contract used for vesting.

### Features

- Mint Tokens
- ERC20 Standard
- Owner Restricted Minting

---

## TokenVesting.sol

Main vesting contract responsible for token distribution.

### Features

- Create Vesting Schedule
- Store Beneficiary Information
- Linear Vesting Calculation
- Claim Vested Tokens
- Owner Controlled Schedule Creation

---

# 👛 Wallet Integration

The frontend integrates with **MetaMask** using **Ethers.js**.

Users can

- Connect Wallet
- Create Vesting Schedule
- Claim Tokens
- View Vesting Details

---

# 🌐 Blockchain Integration

The project is deployed on **SecureChain AI (SCAI) Mainnet**.

### Network

- Chain ID: **34**
- Currency: **SCAI**

---

# 📜 Smart Contract Addresses

## VestingToken

```
0x92FF117C1E2E1a0273d03408Fc65310f184B3699
```

## TokenVesting

```
0xa7bE545ca629a3cE6A79c4b121025d18B19f6D01
```

---

# 🧪 Testing

Smart contracts were tested using **Hardhat**.

### Test Cases

- ✅ Contract Deployment
- ✅ Create Vesting Schedule
- ✅ Claim Tokens
- ✅ Reject Claim Before Cliff
- ✅ Token Transfer Validation

Run tests:

```bash
npx hardhat test
```

---

# 🔒 Security & Edge-Case Testing

The following security scenarios were tested:

- ✅ Only owner can create vesting schedules
- ✅ Claim before cliff is rejected
- ✅ Duplicate vesting schedules are prevented
- ✅ Zero token amount validation
- ✅ Invalid beneficiary validation
- ✅ Token balance verification
- ✅ Safe ERC20 token transfers
- ✅ Ownership protection using OpenZeppelin

---

# ⛽ Gas Optimization

Several optimizations were implemented to reduce gas consumption.

- Solidity v0.8.24 built-in overflow protection
- OpenZeppelin audited contracts
- Efficient storage usage
- Mapping-based vesting lookup
- Minimal state changes
- Constructor initialization
- Optimized token transfer logic

---

# 🚀 Deployment

## Deploy Contracts

```bash
npx hardhat compile

npx hardhat run scripts/deploy.js --network scai
```

---

## Run Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📷 Project Screenshots

## Home Page

_Add Screenshot_

---

## Wallet Connected

_Add Screenshot_

---

## Create Vesting Schedule

_Add Screenshot_

---

## Claim Tokens

_Add Screenshot_

---

## Vesting Information

_Add Screenshot_

---

# 🎥 Demo Video

Demo Video Link

```
Add your video link here
```

---

# 🌍 Live Demo

Vercel Deployment

```
Add your Vercel Link here
```

---

# 📦 Installation

Clone Repository

```bash
git clone https://github.com/your-username/EtherAuthority-Internship.git
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

# 🔮 Future Improvements

- Multiple Vesting Schedules per User
- Revocable Vesting
- Monthly Unlock Mechanism
- Token Dashboard
- Admin Analytics
- Event History
- WalletConnect Support
- Mobile Responsive UI

---

# 👨‍💻 Author

**Mothe Anurag Reddy**

B.Tech Computer Science & Engineering

Sreenidhi Institute of Science & Technology

EtherAuthority Web3 Internship

GitHub: https://github.com/YOUR_GITHUB_USERNAME

---

# 📄 License

This project is developed for educational purposes as part of the **EtherAuthority Web3 Internship Program**.
