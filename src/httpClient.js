const axios = require("axios");

module.exports.getXml = async url => {
  const validUrl = new URL(url);
  const response = await axios.get(validUrl.href, {
    headers: { Accept: "text/xml" }
  });
  // TODO decide where to handle non rss and non xml responses
  return response.data;
};
