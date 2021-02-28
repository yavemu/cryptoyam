const axios = require("axios");
const { coingeckoApiURl } = require("../../../utils");

const getAllService = async (userCurrency) => {
  try {
    const params = `?vs_currency=${userCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false"`;

    const result = await axios.get(`${coingeckoApiURl}/coins/markets${params}`);
    const coin = result.data.map((el) => ({
      market_cap_rank: el.market_cap_rank,
      coinId: el.id,
      symbol: el.symbol,
      name: el.name,
      image: el.image,
      current_price: el.current_price,
      market_cap: el.market_cap,
      last_updated: el.last_updated,
    }));

    return coin;
  } catch (error) {
    return error;
  }
};

module.exports = getAllService;
