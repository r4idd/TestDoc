const Ali= artifacts.require("Ali");

module.exports = function(deployer) {
  deployer.deploy(Ali,125);
};