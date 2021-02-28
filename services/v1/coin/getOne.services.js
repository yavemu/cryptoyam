const axios = require("axios");
const { coingeckoApiURl } = require("../../../utils");

const getOneService = async (coinId, userCurrency) => {
  try {
    let error = null;
    let coinData = {};
    let coinExist = false;
    const result = await axios.get(`${coingeckoApiURl}/coins/${coinId}?market_data=true`);

    if (result.data) {
      coinExist = true;
      coinData = {
        market_cap_rank: result.data.market_cap_rank,
        coinId: result.data.id,
        symbol: result.data.symbol,
        name: result.data.name,
        image: result.data.image.large,
        current_price: result.data.market_data.current_price[userCurrency],
        market_cap: result.data.market_data.market_cap[userCurrency],
        last_updated: result.data.last_updated,
      };
    } else {
      error = {
        status: 400,
        message: "This coin does not exist",
      };
    }

    return {
      coinExist,
      error,
      coinData,
    };
  } catch (error) {
    return error;
  }
};

module.exports = getOneService;
