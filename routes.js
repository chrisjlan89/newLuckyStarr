const router = require("express").Router();
const controller = require("./controller.js");
//router.route("/api/sendemail").get(controller.sendEmail);
router.route("/sillyGoose").get(controller.sillyGoose);

module.exports = router;
