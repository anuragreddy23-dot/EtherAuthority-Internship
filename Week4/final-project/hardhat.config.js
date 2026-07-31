require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",

  networks: {
    scai: {
      url: "https://mainnet-rpc.scai.network",
      chainId: 34,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};