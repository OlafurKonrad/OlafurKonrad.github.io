
const mongoose = require("mongoose");

const { Schema, SchemaTypes } = mongoose;

const UserSchema = new Schema({
    uniquePath: { 
        type: String, 
        required: true,
        default: "",
    },
    firstName: { 
        type: String, 
        required: true,
        default: "",
    },
    lastName: { 
        type: String, 
        required: true,
        default: "",
    },
    company: { 
        type: String, 
        required: true,
        default: "",
    },
    position: { 
        type: String, 
        required: true,
        default: "",
    },
    email: { 
        type: String, 
        required: true,
        default: "",
    },
    terms : { 
        type: Boolean, 
        required: true,
        default: false,
    },
    sharedWithEmails: { 
        type: [String], 
        required: false,
        default: [],
    },
    operation: {
        type: Number,
        required: true,
        default: 0,
    },
    // template: {
    //     type: Number,
    //     required: false,
    //     default: -1,
    // },
    userData: SchemaTypes.Mixed,
    result: SchemaTypes.Mixed,
});

module.exports = {
    UserSchema,
    UserModel: mongoose.model("user", UserSchema),
};
// module.exports = mongoose.model("user", UserSchema);