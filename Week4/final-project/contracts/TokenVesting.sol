// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenVesting is Ownable, ReentrancyGuard, Pausable {
    using SafeERC20 for IERC20;

    IERC20 public immutable token;

    struct VestingSchedule {
        uint256 totalAmount;
        uint256 claimedAmount;
        uint64 startTime;
        uint64 cliffDuration;
        uint64 vestingDuration;
        bool initialized;
    }

    mapping(address => VestingSchedule) public vestings;

    event VestingCreated(
        address indexed beneficiary,
        uint256 amount,
        uint64 startTime,
        uint64 cliffDuration,
        uint64 vestingDuration
    );

    event TokensClaimed(
        address indexed beneficiary,
        uint256 amount
    );

    event EmergencyWithdrawal(
        address indexed owner,
        uint256 amount
    );

    error VestingAlreadyExists();
    error InvalidBeneficiary();
    error InvalidAmount();
    error InvalidDuration();
    error NoVestingFound();
    error NothingToClaim();

    constructor(
        address tokenAddress,
        address initialOwner
    ) Ownable(initialOwner) {
        token = IERC20(tokenAddress);
    }

    function createVestingSchedule(
        address beneficiary,
        uint256 totalAmount,
        uint64 startTime,
        uint64 cliffDuration,
        uint64 vestingDuration
    ) external onlyOwner {

        if (beneficiary == address(0))
            revert InvalidBeneficiary();

        if (totalAmount == 0)
            revert InvalidAmount();

        if (vestingDuration == 0)
            revert InvalidDuration();

        if (vestings[beneficiary].initialized)
            revert VestingAlreadyExists();

        vestings[beneficiary] = VestingSchedule({
            totalAmount: totalAmount,
            claimedAmount: 0,
            startTime: startTime,
            cliffDuration: cliffDuration,
            vestingDuration: vestingDuration,
            initialized: true
        });

        emit VestingCreated(
            beneficiary,
            totalAmount,
            startTime,
            cliffDuration,
            vestingDuration
        );
    }

    function claim()
        external
        nonReentrant
        whenNotPaused
    {
        VestingSchedule storage schedule =
            vestings[msg.sender];

        if (!schedule.initialized)
            revert NoVestingFound();

        uint256 releasable =
            getClaimableTokens(msg.sender);

        if (releasable == 0)
            revert NothingToClaim();

        schedule.claimedAmount += releasable;

        token.safeTransfer(msg.sender, releasable);

        emit TokensClaimed(
            msg.sender,
            releasable
        );
    }

    function vestedAmount(
        address beneficiary
    )
        public
        view
        returns (uint256)
    {
        VestingSchedule memory schedule =
            vestings[beneficiary];

        if (!schedule.initialized)
            return 0;

        if (
            block.timestamp <
            schedule.startTime + schedule.cliffDuration
        ) {
            return 0;
        }

        if (
            block.timestamp >=
            schedule.startTime + schedule.vestingDuration
        ) {
            return schedule.totalAmount;
        }

        uint256 elapsed =
            block.timestamp -
            schedule.startTime;

        return
            (schedule.totalAmount * elapsed) /
            schedule.vestingDuration;
    }

    function getClaimableTokens(
        address beneficiary
    )
        public
        view
        returns (uint256)
    {
        VestingSchedule memory schedule =
            vestings[beneficiary];

        uint256 vested =
            vestedAmount(beneficiary);

        if (vested <= schedule.claimedAmount)
            return 0;

        return vested - schedule.claimedAmount;
    }

    function getLockedTokens(
        address beneficiary
    )
        external
        view
        returns (uint256)
    {
        VestingSchedule memory schedule =
            vestings[beneficiary];

        return
            schedule.totalAmount -
            vestedAmount(beneficiary);
    }

    function pause()
        external
        onlyOwner
    {
        _pause();
    }

    function unpause()
        external
        onlyOwner
    {
        _unpause();
    }

    function emergencyWithdraw(
        uint256 amount
    )
        external
        onlyOwner
    {
        token.safeTransfer(owner(), amount);

        emit EmergencyWithdrawal(
            owner(),
            amount
        );
    }

    function getSchedule(
        address beneficiary
    )
        external
        view
        returns (VestingSchedule memory)
    {
        return vestings[beneficiary];
    }
}