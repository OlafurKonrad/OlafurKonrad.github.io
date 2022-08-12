const express = require("express");

const ResultCtrl = require("../controllers/result_ctrl");

const router = express.Router();

router.post('/result', ResultCtrl.createResults);
// router.get('/result/primary/:templateId', ResultCtrl.getResultsPrimary);
// router.get('/result/secondary/:templateId', ResultCtrl.getResultsSecondary);


module.exports = router;