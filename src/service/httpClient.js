const axios = require("axios");
const errors = require("../errors");

module.exports.getXml = async url => {
  try {
    const validUrl = new URL(url);
    const response = await axios.get(validUrl.href, {
      headers: { Accept: "text/xml" }
    });
    return response.data;
  } catch (e) {
    throw errors.createBadUrlError(url);
  }
};

module.exports.getBlob = async url => {
  try {
    const validUrl = new URL(url);
    const response = await axios.get(url, { responseType: "arraybuffer" });
    return response.data;
  } catch (e) {
    throw errors.createBadUrlError(url);
  }
};
