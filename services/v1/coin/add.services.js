const { Types: { ObjectId } } = require("mongoose");
const { Coin } = require("../../../models/coin");
const { getUserByIdService } = require("../user");

const addCoinService = async (userId, coinData) => {
  try {
    const userData = await getUserByIdService(userId);
    const newCoinData = {
      ...coinData,
      userId: ObjectId(userId),
    };

    const coinResponse = await Coin.create(newCoinData);

    // eslint-disable-next-line no-underscore-dangle
    userData.currencies.push(coinResponse);
    await userData.save();

    return coinResponse;
  } catch (error) {
    return error;
  }
};

module.exports = addCoinService;
