// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ali{
uint256 private x;

  event AddLog(uint256 result, uint256 x, uint256 y, uint256 timestamp);

  function Add(uint256 _x, uint256 _y) public {

    require(_x != _y, "The two numbers should not be equal");

    x = _x + _y;

    emit AddLog(x,_x, _y, block.timestamp);
  }

  function getx() public view returns(uint256){
    return x;
  }
}