var express = require('express');
var router = express.Router();

var charsets = new Map();

/* GET character set. */
router.get('/charset', function(req, res, next) {
  var url = req.query.url;
  if (charsets.has(url)) {
    res.send(charsets.get(url));
  }
  else {
    res.status(404);
    res.send('');
  }
});

/* POST register character set. */
router.post('/register', function(req, res, next) {
    charsets.set(req.body.url, req.body.charset);
    res.send(req.body.charset);
});

module.exports = router;
