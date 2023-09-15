const { ethers, network } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Verifier contract with account:", deployer.address);

  const PlonkVerifier = await ethers.getContractFactory("PlonkVerifier"); // Replace with your contract name
  const plonkVerifier = await PlonkVerifier.deploy();

  console.log("Verifier address:", plonkVerifier.target);

  console.log("---------------------------");

  console.log("Deploying Main contract with account:", deployer.address);

  const SimpleMultiplier = await ethers.getContractFactory("SimpleMultiplier"); // Replace with your contract name
  const simpleMultiplier = await SimpleMultiplier.deploy(plonkVerifier.target);

  console.log("Contract address:", simpleMultiplier.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
