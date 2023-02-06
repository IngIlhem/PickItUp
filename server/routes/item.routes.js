const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/", itemController.addItem);
router.put("/:id", itemController.updateItem);
router.delete("/:id",itemController.eraseItem);

module.exports = router;
