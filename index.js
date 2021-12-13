module.exports.setupUser = async function (address, contracts) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = { address };
  for (const key of Object.keys(contracts)) {
    user[key] = contracts[key].connect(await ethers.getSigner(address));
  }
  return user;
};
