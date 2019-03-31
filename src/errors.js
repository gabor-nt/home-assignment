module.exports.createBadRssError = () => ({
  code: 400,
  message: "Unexpected rss format"
});
module.exports.createBadUrlError = (url) => ({
  code: 400,
  message: `Failed to fetch from url: [${url}]`
});
