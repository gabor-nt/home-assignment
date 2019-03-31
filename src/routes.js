const router = require("express").Router();
const httpClient = require("./httpClient");
const rssParser = require("./rssParser");

router.post("/parse-rss", async (req, res, next) => {
  try {
    const rss = await httpClient.getXml(req.body.url);
    const episodes = rssParser.parse(rss);
    res.status(200).send(episodes);
  } catch (e) {
    res.status(400).send("Bad input!");
  }
});

module.exports = router;
