const parser = require("xml2js");
const errors = require("./errors");

module.exports.create = checksumCalc => ({
  parse: async rss =>
    await new Promise((resolve, reject) =>
      parser.parseString(rss, (err, res) => {
        if (err) reject(errors.createBadRssError());
        try {
          const items = res.rss.channel[0].item.map(i => ({
            title: i.title[0],
            checksum: checksumCalc(i.enclosure[0].$.url),
            url: i.enclosure[0].$.url
          }));
          resolve(items);
        } catch (e) {
          reject(errors.createBadRssError());
        }
      })
    )
});
