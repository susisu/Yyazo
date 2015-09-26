var express = require('express');
var router = express.Router();

var charsets = new Map();
charsets.set('http://www002.upp.so-net.ne.jp/latex/kigou_all.html', 'Shift_JIS');

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

module.exports = router;
