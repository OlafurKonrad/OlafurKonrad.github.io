const small = {
    potroom: {
        productionAmount: 150000,
        anodePrice: 0.4,
        electricityCost: 27,
        energyConsumption: 14.8,
        samples_amount: 80,
        samples_time: 1.5,
        pots_amount: 250,
        potlines_amount: 2,
        potReplacementCost: 190000,
        potLifespan: 1700,
        tapoutFrequency: 20,
    },
    casthouse: {
        productionAmount: 150000,
        naturalGasPrice: 0.005,
        electricityCost: 27,
        co2Emissions: 60,
        skimmingStations: 1,
        samples_crucible_amount: 60,
        samples_furnace_amount: 20,
        samples_launder_amount: 45,
        analysisTime: 5,
        samples_crucible_time: 2,
        samples_furnace_time: 4,
        samples_launder_time: 2,
        crucibleReviewing: 0.5,
        furnaces_electric_amount: 0,
        furnaces_gas_amount: 2,
        furnaces_oil_amount: 0,
        castings_perDay: 8,
        meltLoss: 0.03,
        offSpec: 0.01,
        offSpecRemelt: 1,
    },
};

const medium = {
    potroom: {
        productionAmount: 300000,
        anodePrice: 0.4,
        electricityCost: 27,
        energyConsumption: 14.8,
        samples_amount: 160,
        samples_time: 1.5,
        pots_amount: 500,
        potlines_amount: 4,
        potReplacementCost: 190000,
        potLifespan: 1700,
        tapoutFrequency: 40,
    },
    casthouse: {
        productionAmount: 300000,
        naturalGasPrice: 0.005,
        electricityCost: 27,
        co2Emissions: 60,
        skimmingStations: 2,
        samples_crucible_amount: 120,
        samples_furnace_amount: 40,
        samples_launder_amount: 90,
        analysisTime: 5,
        samples_crucible_time: 2,
        samples_furnace_time: 4,
        samples_launder_time: 2,
        crucibleReviewing: 0.5,
        furnaces_electric_amount: 0,
        furnaces_gas_amount: 4,
        furnaces_oil_amount: 0,
        castings_perDay: 10,
        meltLoss: 0.03,
        offSpec: 0.01,
        offSpecRemelt: 1,
    },
};

const large = {
    potroom: {
        productionAmount: 600000,
        anodePrice: 0.4,
        electricityCost: 27,
        energyConsumption: 14.8,
        samples_amount: 320,
        samples_time: 1.5,
        pots_amount: 1000,
        potlines_amount: 8,
        potReplacementCost: 190000,
        potLifespan: 1700,
        tapoutFrequency: 80,
    },
    casthouse: {
        productionAmount: 600000,
        naturalGasPrice: 0.005,
        electricityCost: 27,
        co2Emissions: 60,
        skimmingStations: 4,
        samples_crucible_amount: 240,
        samples_furnace_amount: 80,
        samples_launder_amount: 180,
        analysisTime: 5,
        samples_crucible_time: 2,
        samples_furnace_time: 4,
        samples_launder_time: 2,
        crucibleReviewing: 0.5,
        furnaces_electric_amount: 0,
        furnaces_gas_amount: 8,
        furnaces_oil_amount: 0,
        castings_perDay: 20,
        meltLoss: 0.03,
        offSpec: 0.01,
        offSpecRemelt: 1,
    },
};
module.exports = [
    {id: 0, inputData: small},
    {id: 1, inputData: medium},
    {id: 2, inputData: large},
];
// export const templates = { small, medium, large}