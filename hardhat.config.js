require("@nomiclabs/hardhat-waffle");
//  import('hardhat/config')
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



module.exports = {
  
  solidity: "0.8.4",
  networks:{
  rinkeby: {
    // I have not put these keys into dotenv file.
    url: `https://rinkeby.infura.io/v3/7322a7e8535546a6ab8f9827f9816d87`,
    // chainId: 4,
    accounts: [`8dc9452242327db226dc88830eb2961c709b49134cf43a8cd0bfbe24f709962c`],
  },
}
};
