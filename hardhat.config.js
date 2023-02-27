require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url:" https://eth-goerli.g.alchemy.com/v2/zvVbUo8LGhwIU0mLtdD5Xp_y4S1mIzNm",
      accounts:["c9ed035bf23035737bed246262e47e384f5cb47979aee10828e614c3b6407cb0"] ,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
