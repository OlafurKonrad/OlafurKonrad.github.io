
const mongoose = require("mongoose");
// const User = require("./user_model");

const { Schema, SchemaTypes } = mongoose;

// const { UserSchema } = User;

// const ResultItemSchema = new Schema({
//     opex: {
//         type: Number,
//         required: true,
//     },
//     capex: {
//         type: Number,
//         required: true,
//     },
//     revenue: {
//         type: Number,
//         required: true,
//     },
//     other: {
//         type: Number,
//         required: true,
//     },
//     otherPerUnit: {
//         type: Number,
//         required: true,
//     },
// });

const PotroomSchema = new Schema({
    // Energy
    electricity: {
        type: Object,
        required: true,
    },
    // Sampling
    sampling: {
        type: Object,
        required: true,
    },
    laboratory: {
        type: Object,
        required: true,
    },
    // Raw Materials
    anodes: {
        type: Object,
        required: true,
    },
    fluoride: {
        type: Object,
        required: true,
    },
    // Pot Control
    tapouts: {
        type: Object,
        required: true,
    },
    potReplacements: {
        type: Object,
        required: true,
    },
    // Risk
    shutdowns: {
        type: Object,
        required: true,
    },
});

module.exports = {
    PotroomSchema,
    PotroomModel: mongoose.model("potroom", PotroomSchema),
};
