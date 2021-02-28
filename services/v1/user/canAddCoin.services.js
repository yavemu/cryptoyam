const getUserByIdService = require("./getUserById.services");

const canAddCoinService = async (userId, coinId) => {
  try {
    let error = null;
    const userData = await getUserByIdService(userId, "currencies");

    const { currencies } = userData;
    const userHasThisCoin = currencies.some((coin) => coin.coinId === coinId);

    const canAddThisCoin = !userHasThisCoin;

    if (!canAddThisCoin) {
      error = {
        status: 400,
        message: "You have already selected this currency previously",
      };
    }

    return {
      canAddThisCoin,
      error,
    };
  } catch (error) {
    return error;
  }
};

module.exports = canAddCoinService;
