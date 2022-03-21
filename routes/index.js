var express = require('express');
var router = express.Router();
const feesRouter  = require('./fees');           
/* GET home page. */

router.use('/fees',feesRouter);

router.get('/commpute-transaction-fee', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
