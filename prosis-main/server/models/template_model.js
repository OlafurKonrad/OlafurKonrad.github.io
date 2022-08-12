
const mongoose = require("mongoose");
const Potroom = require("./potroom_model");
const Casthouse = require("./casthouse_model");

const { Schema, SchemaTypes } = mongoose;

const { PotroomSchema } = Potroom;
const { CasthouseSchema } = Casthouse;

const TemplateSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    potroom: {
        type: PotroomSchema,
        required: false,
    },
    casthouse: {
        type: CasthouseSchema,
        required: true,
    },
  
});


module.exports = mongoose.model("template", TemplateSchema);