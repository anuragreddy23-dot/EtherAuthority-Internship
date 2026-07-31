const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenVesting", function () {
    let token, vesting;
    let owner, beneficiary;

    beforeEach(async function () {
        [owner, beneficiary] = await ethers.getSigners();

        const VestingToken = await ethers.getContractFactory("VestingToken");
        token = await VestingToken.deploy(owner.address);
        await token.waitForDeployment();

        const TokenVesting = await ethers.getContractFactory("TokenVesting");
        vesting = await TokenVesting.deploy(
            await token.getAddress(),
            owner.address
        );

        await vesting.waitForDeployment();

        await token.transfer(
            await vesting.getAddress(),
            ethers.parseEther("10000")
        );
    });

    it("Should create a vesting schedule", async function () {
        const now = (await ethers.provider.getBlock("latest")).timestamp;

        await vesting.createVestingSchedule(
            beneficiary.address,
            ethers.parseEther("1000"),
            now,
            60,
            3600
        );

        const schedule = await vesting.getSchedule(beneficiary.address);

        expect(schedule.totalAmount).to.equal(
            ethers.parseEther("1000")
        );
    });

    it("Should not allow claiming before cliff", async function () {
        const now = (await ethers.provider.getBlock("latest")).timestamp;

        await vesting.createVestingSchedule(
            beneficiary.address,
            ethers.parseEther("1000"),
            now,
            60,
            3600
        );

        await expect(
            vesting.connect(beneficiary).claim()
        ).to.be.reverted;
    });
});