const hre = require("hardhat");

async function main() {
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();
  // Deploy the contract.
  await buyMeACoffee.waitForDeployment();
  console.log("BuyMeACoffee deployed to:", await buyMeACoffee.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x796CF2a2709A6d718e7D66337878C09504502068
