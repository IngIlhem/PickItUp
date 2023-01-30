const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/", itemController.addItem);
router.put("/", itemController.updateItem);
router.delete("/",itemController.eraseItem);

module.exports = router;
