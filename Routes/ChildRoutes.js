const express = require("express");
const childController = require("../Controller/ChildController"); 
const router = express.Router();

router
  .route("/children")
  .get(childController.getAllChildren)
  .post(childController.addChild)
  .put(childController.updateChild);

router
  .route("/children/:id")
  .get(childController.getChildById)
  .delete(childController.deleteChild);

module.exports = router;
