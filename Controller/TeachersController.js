
const { request, response } = require("express");
const teacherSchema = require("./../Model/TeachersModel");
const classSchema = require("./../Model/ClassModel");

exports.getAllTeachers=(request,response,next)=>{
    teacherSchema.find({})
    .then((data) => {
        response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getTeacher = (request, response, next) => {
    teacherSchema.findOne({ _id: request.params.id })
    .then((object) => {
      if (!object) throw new Error("teacher not Exists");
      repsonse.status(200).json({ object });
    })
    .catch((error) => next(error));  };


exports.getAllSupervisors=(request,response,next)=>{
     classSchema.find({})
    .populate({ path: "supervisor", select: { fullname: 1 } })
    .then((data) => {
       response.status(200).json({ data });
     })
    .catch((error) => next(error));
    
    };
    
exports.addNewTeacher=(request,response,next)=>{
    let object = new teacherSchema(request.body);
    object
      .save()
      .then((data) => {
        response.status(201).json({ data });
      })
      .catch((error) => next(error));}


exports.updateTeacher = (request, repsonse, next) => {
    teacherSchema.findOneAndUpdate(
        { _id: request.body._id },
        request.body,
        { new: true }
      )
        .then((data) => {
          if (!data) throw new Error("Class not found");
          response.status(200).json({ data });
        })
        .catch((error) => next(error));
};
  

exports.deleteTeacher=(request,response,next)=>{
    teacherSchema.findOneAndDelete({ _id: request.body._id })
    .then((data) => {
      if (!data) throw new Error("teacher not found");
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};


