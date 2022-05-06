var NFTmarketplace = artifacts.require("./NFTmarketplace.sol")

module.exports = function (deployer) {
  deployer.deploy(NFTmarketplace, NFTmarketplace.address)
}
