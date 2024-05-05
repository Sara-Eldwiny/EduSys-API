
const { request, response } = require("express");
const classSchema = require("./../Model/ClassModel");
const teacherSchema = require("./../Model/TeachersModel");
const childSchema = require("./../Model/ChildModel")


exports.getAllClasses=(request,response,next)=>{
    classSchema.find({})
    .then((data) => {
        response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getClass = (request, response, next) => {
    classSchema.findOne({ _id: request.params.id })
    .then((object) => {
      if (!object) throw new Error("class not Exists");
      repsonse.status(200).json({ object });
    })
    .catch((error) => next(error));   
 };


exports.addNewClass=(request,response,next)=>{
    let object = new classSchema(request.body);
    object
      .save()
      .then((data) => {
        response.status(201).json({ data });
      })
      .catch((error) => next(error));}


exports.updateClass=(request,response,next)=>{
    classSchema.findOneAndUpdate(
        { _id: request.body._id },
        request.body,
        { new: true }
      )
        .then((data) => {
          if (!data) throw new Error("Class not found");
          response.status(200).json({ data });
        })
        .catch((error) => next(error));};

exports.deleteClass=(request,response,next)=>{
    classSchema.findOneAndDelete({ _id: request.body._id })
    .then((data) => {
      if (!data) throw new Error("Class not found");

      response.status(200).json({ data });
    })
    .catch((error) => next(error));};



exports.getClassChildren = (request, response, next) => {
    classSchema.findOne({ _id: request.params.id })
      .populate("children")
      .then((object) => {
        if (!object) throw new Error("Class not found");
        response.status(200).json({ children: object.children });
      })
      .catch((error) => next(error));
  };
  
exports.getClassSupervisor = (request, response, next) => {
    classSchema.findOne({ _id: request.params.id })
      .populate("supervisor")
      .then((object) => {
        if (!object) throw new Error("Class not found");
        response.status(200).json({ supervisor: object.supervisor });
      })
      .catch((error) => next(error));
  };
  

  // exports.getClassChildren = (request, response, next) => {
//     childSchema.find({})
//     .populate({ path: "fullname", select: {  name: 1 } })
//     .then((data) => {
//         response.status(200).json({ data });
//     })
//     .catch((error) => next(error));
// };

// exports.getClassSupervisor = (request, response, next) => {
//     teacherSchema.find({})
//     .populate({ path: "fullname", select: {  supervisor: 1 } })
//     .then((data) => {
//         response.status(200).json({ data });
//     })
//     .catch((error) => next(error));

// };
