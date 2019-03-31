const parser = require("xml2js");
const errors = require("../errors");

module.exports.create = checksum => ({
  parse: async rss =>
    await new Promise((resolve, reject) =>
      parser.parseString(rss, async (err, res) => {
        if (err) reject(errors.createBadRssError());
        try {
          const items = await Promise.all(
            res.rss.channel[0].item.map(async i => ({
              title: i.title[0],
              checksum: await checksum(i.enclosure[0].$.url),
              url: i.enclosure[0].$.url
            }))
          );
          resolve(items);
        } catch (e) {
          reject(errors.createBadRssError());
        }
      })
    )
});
