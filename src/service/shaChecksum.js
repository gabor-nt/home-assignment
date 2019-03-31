const sha1 = require("sha1");
const httpClient = require("./httpClient");

module.exports = async url => {
  try {
    const blob = await httpClient.getBlob(url);
    return sha1(Buffer.from(blob));
  } catch (e) {
    console.log("skipping checksum on", url);
    return "???";
  }
};
