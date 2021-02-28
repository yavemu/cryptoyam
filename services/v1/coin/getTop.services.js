const axios = require("axios");
const { coingeckoApiURl } = require("../../../utils");

const getTopService = async (coinIds, currenciesIds) => {
  try {
    let error = false;
    let coinTopData = {};
    const params = `?ids=${coinIds}&vs_currencies=${currenciesIds}`;

    const result = await axios.get(`${coingeckoApiURl}/simple/price${params}`);

    if (result.data) {
      coinTopData = result.data;
    } else {
      error = {
        status: 400,
        message: "We cant get de top coins.",
      };
    }

    return {
      error,
      coinTopData,
    };
  } catch (error) {
    return error;
  }
};

module.exports = getTopService;
