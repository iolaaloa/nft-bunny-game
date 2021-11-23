const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Veg", "Hop", "Lucky"],       // Names
    ["https://imgur.com/4VrTgHj.gif", // Images
    "https://i.imgur.com/s97RKii.gif", 
    "https://i.imgur.com/B8OoEYq.gif"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],                       // Attack damage values
    [10, 10, 5],                          // Immune system multiplier
    "the sick", // Boss name
    "https://i.imgur.com/40Bj6Dxb.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();