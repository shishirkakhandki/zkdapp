require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { POLYGON_RPC_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    mumbai: {
      url: POLYGON_RPC_URL, // Replace with your Polygon Mumbai RPC URL
      accounts: [`0x${PRIVATE_KEY}`], // Your deployer's private key
    },
  },
  solidity: {
    version: "0.8.19", // Specify your Solidity version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts/src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  // Other configurations and plugins...
};
