const express = require("express");

const InputDataCtrl = require("../controllers/inputData_ctrl");

const router = express.Router();

router.post('/input/:id', InputDataCtrl.createInputData);

router.get('/input/:operation/:id', InputDataCtrl.getInputData);



module.exports = router;