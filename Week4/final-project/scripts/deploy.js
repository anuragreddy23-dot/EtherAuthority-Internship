const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const ownerAddress = await deployer.getAddress();

    console.log("Deploying contracts...");
    console.log("Owner:", ownerAddress);

    // Deploy Vesting Token
    const VestingToken = await ethers.getContractFactory("VestingToken");
    const token = await VestingToken.deploy(ownerAddress);
    await token.waitForDeployment();

    const tokenAddress = await token.getAddress();
    console.log("VestingToken deployed to:", tokenAddress);

    // Deploy Vesting Contract
    const TokenVesting = await ethers.getContractFactory("TokenVesting");
    const vesting = await TokenVesting.deploy(tokenAddress, ownerAddress);
    await vesting.waitForDeployment();

    const vestingAddress = await vesting.getAddress();
    console.log("TokenVesting deployed to:", vestingAddress);

    const balance = await token.balanceOf(ownerAddress);
    console.log("Owner token balance:", ethers.formatEther(balance));

    const tx = await token.transfer(
        vestingAddress,
        ethers.parseEther("500000")
    );
    await tx.wait();

    console.log("500000 VEST transferred to vesting contract.");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});