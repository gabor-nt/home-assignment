const parser = require("xml2js");

module.exports.create = checksumCalc => async rss =>
  await new Promise((resolve, reject) =>
    parser.parseString(rss, (err, res) => {
      if (err || !res) reject("Unexpected rss format");
      const items = res.rss.channel[0].item.map(i => ({
        title: i.title[0],
        checksum: checksumCalc(i.enclosure[0].$.url),
        url: i.enclosure[0].$.url
      }));
      resolve(items);
    })
  );
