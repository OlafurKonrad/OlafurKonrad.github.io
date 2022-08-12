
const mongoose = require("mongoose");
const User = require("./user_model");
const Potroom = require("./potroom_model");
const Casthouse = require("./casthouse_model");

const { Schema, SchemaTypes } = mongoose;

const { UserSchema } = User;
const { PotroomSchema } = Potroom;
const { CasthouseSchema } = Casthouse;

const ResultSchema = new Schema({
    user: {
        type: UserSchema,
        required: false,

    },
    potroom: {
        type: PotroomSchema,
        required: false,
    },
    casthouse: {
        type: CasthouseSchema,
        required: true,
    },
    // potroom: {
    //     type: Array,
    //     required: false,
    // },
    // casthouse: {
    //     type: Array,
    //     required: true,
    // },
    devices: {
        type: Array,
        required: true,
    },
    total: {
        type: Array,
        required: true,
    },
  
});
module.exports = {
    ResultSchema,
    ResultModel: mongoose.model("result", ResultSchema),
};
