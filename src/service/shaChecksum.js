const sha1 = require("sha1");
const httpClient = require("./httpClient");

module.exports = async url => {
  const blob = await httpClient.getBlob(url);
  return sha1(Buffer.from(blob));
};
