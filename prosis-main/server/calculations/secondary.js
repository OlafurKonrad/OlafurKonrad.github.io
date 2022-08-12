const { assumptions, DTE } = require("../constants");

// productionAmount: 200000,
//         samples_furnace_amount: 20,
//         samples_launder_amount: 40,
//         analysisTime: 5,
//         samples_furnace_time: 4,
//         samples_launder_time: 2,
//         furnaces_electric_amount: 0,
//         furnaces_gas_amount: 4,
//         furnaces_oil_amount: 0,
//         castings_perDay: 10,
//         meltLoss: 0.03,
//         offSpec: 0.01,

//         // NEW
//         castingLines_amount: 2,

//         // SLEPPA
//         naturalGasPrice: 0.005,
//         electricityCost: 27,
//         co2Emissions: 60,
//         skimmingStations: 1,
//         samples_crucible_amount: 60,
//         samples_crucible_time: 2,
//         crucibleReviewing: 0.5,
//         offSpecRemelt: 1,
const calculations = (data=null) => {
    const { 
        samples_furnace_amount, samples_launder_amount, analysisTime, samples_furnace_time,
        samples_launder_time, furnaces_electric_amount, furnaces_gas_amount, furnaces_oil_amount,
        castings_perDay, meltLoss, offSpec, castingLines_amount,
    } = data; 

    const CH = assumptions().casthouse;

    const samples = {
        furnace: {amount: samples_furnace_amount, time: samples_furnace_time},
        launder: {amount: samples_launder_amount, time: samples_launder_time},
    };
    const preFurnaceAnalysisProportion = 0.5;

    const energyType = {
        electric: {
            price: 27,
            remeltCost: 174, 
            furnaceUsage: 0.1, 
            nrOfFurnaces: furnaces_electric_amount,
        }, 
        gas: {
            price: 11,
            remeltCost: 52, 
            furnaceUsage: 0.325, 
            nrOfFurnaces: furnaces_gas_amount,

        }, 
        oil: {
            price: 6, 
            remeltCost: 14, 
            furnaceUsage: 0.35, 
            nrOfFurnaces: furnaces_oil_amount,
        }, 
    };

    const laboratory = () => {
        const labCost = 876000;
        const avgLabLifetime = 30;
        const serviceAndMaintenance = 0.05;

        const opex = Math.round(labCost * serviceAndMaintenance);
        const capex = Math.round(labCost / avgLabLifetime);
        const revenue = 0;

        return { opex, capex, revenue };
    };

    return {
        // Energy
        // electricityConsumption: electricityConsumption(), gasConsumption: gasConsumption(),
        // Sampling
        // sampling:sampling(), sampleAnalysis:sampleAnalysis(), 
        laboratory: laboratory(),
        // Casting
        // meltLoss: MeltLoss(), crucibleCycleTime: crucibleCycleTime(), castingCapacity:castingCapacity(), castingQuality:castingQuality(),
        // Emissions
        // emissions: emissions(),
        // Scrap
        // aluminumSales: aluminumSales(), remeltingReduction: remeltingReduction(),
    };
};

module.exports = {calculations};