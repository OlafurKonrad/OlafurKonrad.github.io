
const mongoose = require("mongoose");
const User = require("./user_model");

const { Schema, SchemaTypes } = mongoose;

const { UserSchema } = User;

const InputDataSchema = new Schema({
    userInfo: {
        type: UserSchema,
        required: true,
    },
    productionAmount: { 
        type: Number, 
        required: true,
    },
    anodePrice: { 
        type: Number, 
        required: true,
    },
    electricityCost: { 
        type: Number, 
        required: true,
    },
    energyConsumption: { 
        type: Number, 
        required: true,
    },
    samples_amount: { 
        type: Number, 
        required: true,
    },
    samples_time: { 
        type: Number, 
        required: true,
    },
    pots_amount: { 
        type: Number, 
        required: true,
    },
    potlines_amount: { 
        type: Number, 
        required: true,
    },
    potReplacementCost: { 
        type: Number, 
        required: true,
    },
    potLifespan: { 
        type: Number, 
        required: true,
    },
    tapoutFrequency: { 
        type: Number, 
        required: true,
    },

    naturalGasPrice: { 
        type: Number, 
        required: true,
    },
    naturalGasPrice: { 
        type: Number, 
        required: true,
    },
    skimmingStations: { 
        type: Number, 
        required: true,
    },
    samples_crucible_amount: { 
        type: Number, 
        required: true,
    },
    samples_furnace_amount: { 
        type: Number, 
        required: true,
    },
    samples_launder_amount: { 
        type: Number, 
        required: true,
    },
    analysisTime: { 
        type: Number, 
        required: true,
    },
    samples_crucible_time: { 
        type: Number, 
        required: true,
    },
    samples_furnace_time: { 
        type: Number, 
        required: true,
    },
    samples_launder_time: { 
        type: Number, 
        required: true,
    },
    crucibleReviewing: { 
        type: Number, 
        required: true,
    },
    furnaces_electric_amount: { 
        type: Number, 
        required: true,
    },
    furnaces_gas_amount: { 
        type: Number, 
        required: true,
    },
    furnaces_oil_amount: { 
        type: Number, 
        required: true,
    },
    castings_perDay: { 
        type: Number, 
        required: true,
    },
    meltLoss: { 
        type: Number, 
        required: true,
    },
    offSpec: { 
        type: Number, 
        required: true,
    },
    offSpecRemelt: { 
        type: Number, 
        required: true,
    },
});


module.exports = mongoose.model("input", InputDataSchema);