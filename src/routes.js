
const router = require('express').Router();

router.post('/parse-rss', function (req, res) {
    res.status(200).send({ hello: req.body.url });
});

module.exports = router;