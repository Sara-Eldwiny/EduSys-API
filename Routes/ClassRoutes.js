const express = require("express");
const classController = require("../Controller/ClassController");
const router = express.Router();

router
  .route("/classes")
  .get(classController.getAllClasses)
  .post(classController.addClass);

router
  .route("/classes/:id")
  .get(classController.getClassById)
  .put(classController.updateClass)
  .delete(classController.deleteClass);


router.get("/classes/child/:id", classController.getClassChildren);
router.get("/classes/teacher/:id", classController.getClassSupervisor);

module.exports = router;
