
const { request, response } = require("express");
const childSchema = require("./../Model/ChildModel")

exports.getAllChildren=(request,response,next)=>{
    childSchema.find({})
    .then((data) => {
        response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getChild = (request, response, next) => {
    childSchema.findOne({ _id: request.params.id })
    .then((object) => {
      if (!object) throw new Error("child not Exists");
      repsonse.status(200).json({ object });
    })
    .catch((error) => next(error));   };


exports.addNewChild=(request,response,next)=>{
    let object = new childSchema(request.body);
    object
      .save()
      .then((data) => {
        response.status(201).json({ data });
      })
      .catch((error) => next(error));};



exports.updateChild=(request,response,next)=>{
    childSchema.findOneAndUpdate(
        { _id: request.body._id },
        request.body,
        { new: true }
      )
        .then((data) => {
          if (!data) throw new Error("child not found");
          response.status(200).json({ data });
        })
        .catch((error) => next(error));};

exports.deleteChild=(request,response,next)=>{
    childSchema.findOneAndDelete({ _id: request.body._id })
    .then((data) => {
      if (!data) throw new Error("child not found");
      response.status(200).json({ data });
    })
    .catch((error) => next(error));};
