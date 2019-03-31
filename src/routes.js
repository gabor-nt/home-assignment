const router = require("express").Router();
const httpClient = require("./httpClient");
const parse = require("./acastParser").create(url => url.length);

router.post("/parse-rss", async (req, res, next) => {
  try {
    const rss = await httpClient.getXml(req.body.url);
    const episodes = await parse(rss);
    res.status(200).send(episodes);
  } catch (e) {
    console.log(e);
    res.status(400).send("Bad input!");
  }
});

module.exports = router;
