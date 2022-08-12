const express = require("express");

const UserCtrl = require("../controllers/user_ctrl");

const router = express.Router();

router.post('/user', UserCtrl.createUser);
router.put('/user/:id', UserCtrl.updateUser);
router.get('/user/:id', UserCtrl.getUserById);
// router.get("/path/:id", UserCtrl.getUserByPath);

module.exports = router;