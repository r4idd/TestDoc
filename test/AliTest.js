// it("should not add the same numbers", async () => {
//     const aliInstance = await Ali.deployed();
//     const x = 11;
//     const y = 11;

//     // Test if the numbers are not the same
//     if (x !== y) {
//         const X = x + y;
//         console.log("Different numbers, the sum is " + X);
//     } else {
//         assert.equal(x , y, "the numbers are different");
//     }
// });



const { expectRevert } = require("@openzeppelin/test-helpers");
const assert = require("assert");
const Ali = artifacts.require("Ali");

contract("Ali", accounts => {
it("should correctly add two different numbers", async () => {
  const aliInstance = await Ali.deployed();
  const x = 5;
  const y = 3;
  await aliInstance.Add(x, y);
  const result = await aliInstance.getx();
  assert.equal(result.toNumber(), x + y, "Addition result is incorrect");
});

it("should revert on adding the same numbers", async () => {
  const aliInstance = await Ali.deployed(); 
  await expectRevert(
    aliInstance.Add(3, 3), 
    "The two numbers should not be equal" 
  );
});


it("Check if the X value not changed", async () => {
  const aliInstance = await Ali.deployed();
  const initialValue = await aliInstance.getx();
  const currentValue = await aliInstance.getx();
  assert.equal(currentValue.toNumber(), initialValue.toNumber(), "X value has changed");
});

it("Check if the X value has changed", async () => {
  const aliInstance = await Ali.deployed();
  const initialValue = await aliInstance.getx();
  const currentValue = await aliInstance.getx();
  assert.notEqual(initialValue.toNumber(), 0, "X value has not changed");
});
});