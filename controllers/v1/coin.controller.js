// Services
const {
  getAllCoinService, addCoinService, getOneCoinService, getTopCoinService,
} = require("../../services/v1/coin/index");
const { getUserByIdService, canAddCoinService } = require("../../services/v1/user/index");
const { currencyOptions } = require("../../utils/index");

const getAllCoin = async (req, res, next) => {
  try {
    const userData = await getUserByIdService(req.userId, "currency");
    const { currency } = userData;
    const coins = await getAllCoinService(currency);
    next({
      status: 200,
      message: "coin list",
      coins,
    });
  } catch (error) {
    next(error);
  }
};

const addCoin = async (req, res, next) => {
  try {
    const { userId } = req;
    const { coinId } = req.params;

    const { canAddThisCoin, error: errorCanAddThisCoin } = await canAddCoinService(userId, coinId);
    if (!canAddThisCoin) {
      return next(errorCanAddThisCoin);
    }

    const userData = await getUserByIdService(req.userId, "currency");
    const { currency } = userData;

    // eslint-disable-next-line max-len
    const { coinExist, coinData, error: errorCoinExist } = await getOneCoinService(coinId, currency);

    if (!coinExist) {
      return next(errorCoinExist);
    }

    const coin = await addCoinService(userId, coinData);
    next({
      status: 200,
      message: "Coin Add success",
      coin,
    });
  } catch (error) {
    next(error);
  }
};
const topCoin = async (req, res, next) => {
  try {
    let error = null;
    const { userId } = req;

    const sort = req.query.sort === "asc" ? "current_price" : "-current_price";
    const limit = req.query.limit > 0 && req.query.limit <= 25 ? req.query.limit : 25;
    const currenciesOptions = { sort, limit };

    const userData = await getUserByIdService(userId, {}, currenciesOptions, true);
    const { currencies } = userData;

    if (!currencies.length) {
      error = {
        status: 400,
        message: "You dont have currencies selected",
      };
      return next(error);
    }

    const coinIds = currencies.map((el) => el.coinId).join(",");
    const currenciesIds = currencyOptions.join(",");
    // eslint-disable-next-line max-len
    const { coinTopData, error: errorCointTopData } = await getTopCoinService(coinIds, currenciesIds);

    if (!Object.keys(coinTopData).length) {
      return next(errorCointTopData);
    }

    const topCoins = currencies.map((el) => ({
      ...el,
      topCoinPrice: coinTopData[el.coinId],
    }));

    next({
      status: 200,
      message: "Top Coin list",
      ...currenciesOptions,
      topCoins,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCoin,
  addCoin,
  topCoin,
};
