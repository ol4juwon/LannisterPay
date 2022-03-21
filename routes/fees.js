var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    
    var fee = req.body.fee;
    var fee_id = req.body.fee_id;
    var fee_name = req.body.fee_name;
    var fee_amount = req.body.fee_amount;
    var fee_description = req.body.fee_description;
    var fee_type = req.body.fee_type;
    var fee_status = req.body.fee_status;
    var fee_date = req.body.fee_date;
    var fee_due_date = req.body.fee_due_date;
    var fee_paid_date = req.body.fee_paid_date;
    var fee_paid_amount = req.body.fee_paid_amount;
    var fee_paid_by = req.body.fee_paid_by;
    var fee_paid_method = req.body.fee_paid_method;
    var fee_paid_notes = req.body.fee_paid_notes;
    var fee_paid_status = req.body.fee_paid_status;
    
});