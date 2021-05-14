const Migrations = artifacts.require("Migrations");


module.exports = async function(deployer) {
  await deployer.deploy(MyContract);
  const instance = await MyContract.deployed();
}