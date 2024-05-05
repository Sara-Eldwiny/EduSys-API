 const mongoose = require("mongoose");
const childSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    level: { type: String, enum: ["PreKG", "KG1", "KG2"], required: true },
    address: {
      city: { type: String, required: true },
      street: { type: String, required: true },
      building: { type: String, required: true }
    }
  });


module.exports = mongoose.model("child", childSchema);