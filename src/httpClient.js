const axios = require("axios");

module.exports.getXml = async url => {
  const validUrl = new URL(url);
  const response = await axios.get(validUrl.href, {
    headers: { Accept: "text/xml" }
  });
  return response.data;
};
