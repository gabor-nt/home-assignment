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
    console.log("Failed to get xml from", url);
    throw errors.createBadUrlError(url);
  }
};

module.exports.getBlob = async url => {
  try {
    const validUrl = new URL(url);
    const response = await axios.get(validUrl.href, {
      responseType: "arraybuffer",
      timeout: 500
    });
    return response.data;
  } catch (e) {
    console.log("Failed to get blob from", url);
    throw errors.createBadUrlError(url);
  }
};
