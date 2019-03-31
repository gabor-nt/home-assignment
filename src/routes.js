const router = require("express").Router();
const httpClient = require("./httpClient");
const checksumCalc = require("./fakeChecksumCalc");
const parser = require("./acastParser").create(checksumCalc);

router.post("/parse-rss", async (req, res, next) => {
  try {
    const rss = await httpClient.getXml(req.body.url);
    const episodes = await parser.parse(rss);
    res.status(200).send(episodes);
  } catch (e) {
    console.log(e);
    if (e.message && e.code) res.status(e.code).send(e.message);
    else next(e);
  }
});

module.exports = router;
