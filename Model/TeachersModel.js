const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,auto: true,required: true},
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    image: String,
});

module.exports = mongoose.model("teacher", teacherSchema);