const express = require("express");
const teacherController = require("../Controller/TeachersController"); 
const router = express.Router();

router
  .route("/teachers")
  .get(teacherController.getAllTeachers)
  .post(teacherController.addTeacher)
  .put(teacherController.updateTeacher);

router
  .route("/teachers/:id")
  .get(teacherController.getTeacherById)
  .delete(teacherController.deleteTeacher);


  
router
  .route("/teachers/supervisors")
  .get(controller.getAllSupervisors); 

module.exports = router;
