
const mongoose = require("mongoose");
// const User = require("./user_model");

const { Schema, SchemaTypes } = mongoose;

// const { UserSchema } = User;

const CasthouseSchema = new Schema({

    // Energy
    electricityConsumption: {
        type: Object,
        required: true,
    },
    gasConsumption: {
        type: Object,
        required: true,
    },
    // Sampling
    sampling: {
        type: Object,
        required: true,
    },
    sampleAnalysis: {
        type: Object,
        required: true,
    },
    laboratory: {
        type: Object,
        required: true,
    },
    // Casting
    meltLoss: {
        type: Object,
        required: true,
    },
    crucibleCycleTime: {
        type: Object,
        required: true,
    },
    castingCapacity: {
        type: Object,
        required: true,
    },
    castingQuality: {
        type: Object,
        required: true,
    },
    // Emissions
    emissions: {
        type: Object,
        required: true,
    },
    // Scrap
    aluminumSales: {
        type: Object,
        required: true,
    },
    remeltingReduction: {
        type: Object,
        required: true,
    },
});

module.exports = {
    CasthouseSchema,
    CasthouseModel: mongoose.model("casthouse", CasthouseSchema),
};
