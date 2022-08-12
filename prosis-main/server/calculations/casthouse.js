const { assumptions, DTE } = require("../constants");

const calculations = (data=null) => {

    const {
        productionAmount, co2Emissions, castings_perDay, meltLoss,
        samples_crucible_amount, samples_furnace_amount, samples_launder_amount,
        samples_crucible_time, samples_furnace_time, samples_launder_time,
        furnaces_electric_amount, furnaces_gas_amount, furnaces_oil_amount,
        analysisTime, offSpec,
    } = data; 

    const CH = assumptions().casthouse;

    const samples = {
        crucible: {amount: samples_crucible_amount, time: samples_crucible_time},
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
    const electricFurnaces = energyType.electric;
    const gasFurnaces = energyType.gas;
    const oilFurnaces = energyType.oil;

    const totalNrOfFurnaces = electricFurnaces.nrOfFurnaces+gasFurnaces.nrOfFurnaces+oilFurnaces.nrOfFurnaces;

    /* ----- CASTHOUSE - ENERGY ----- */
    const energyConsumption = (type) => {
        const { price, furnaceUsage, nrOfFurnaces } = energyType[type];
        const castingCycleTime = 24/castings_perDay*60;
        const furnaceCastingTime = castingCycleTime;
        const timeSavedPerCast = samples.furnace.time+analysisTime-DTE.sampleTime.EA2000;
        const furnaceCycleTimeReduction = timeSavedPerCast/furnaceCastingTime;
        const energySavings_PerYear = productionAmount*furnaceCycleTimeReduction*price*furnaceUsage*(nrOfFurnaces/(totalNrOfFurnaces));
        const opex = Math.round(energySavings_PerYear);
  
        const capex = 0;
        const revenue = 0;

        let other = 0; let otherPerUnit = 0;
        if (nrOfFurnaces > 0) {
            other = Math.round(productionAmount*furnaceUsage*furnaceCycleTimeReduction);
            otherPerUnit = price;
        }

        return { opex, capex, revenue, other, otherPerUnit };

    };
        // ELECTRICITY CONSUMPTION
    const electricityConsumption = () => energyConsumption("electric");

        // GAS CONSUMPTION
    const gasConsumption = () => energyConsumption("gas");

    /* ----- CASTHOUSE - SAMPLING ----- */

        // SAMPLING
    const sampling = () => {
        const samplingTime_Reduction_Minutes_Day = samples.furnace.amount*(samples.furnace.time-DTE.sampleTime.EA2000)+samples.launder.amount*(samples.launder.time)+samples.crucible.amount*(samples.crucible.time-DTE.sampleTime.EA2000);
        const samplingTime_Reduction_Hours_Day = samplingTime_Reduction_Minutes_Day/60;

        const samplingTime_Savings_Year = ((samplingTime_Reduction_Hours_Day*365)/CH.operatorEfficiency)/(24*365)*CH.employeeSalary*5;
        const opex = Math.round(samplingTime_Savings_Year);
        const capex = 0;
        const revenue = 0;

        const other = samplingTime_Reduction_Hours_Day.toFixed(1);
        const otherPerUnit = Math.round(CH.employeeSalary*5/365/24);;

        return { opex, capex, revenue, other, otherPerUnit };
    };
        // SAMPLE ANALYSIS
    const sampleAnalysis = () => {
        const sampleAlysisTime_Reduction_Minutes_Day = analysisTime*(samples.furnace.amount+samples.launder.amount)/2+samples.crucible.amount*analysisTime;
        const sampleAlysisTime_Reduction_Hours_Day = sampleAlysisTime_Reduction_Minutes_Day/60;
        const sampleAlysisTime_Savings_Year = (((sampleAlysisTime_Reduction_Hours_Day*365))/CH.operatorEfficiency)/(24*365)*CH.employeeSalary*5;

        const opex = Math.round(sampleAlysisTime_Savings_Year);
        const capex = 0;
        const revenue = 0;

        const other = sampleAlysisTime_Reduction_Hours_Day.toFixed(1);
        const otherPerUnit = Math.round(CH.employeeSalary*5/365/24);;

        return { opex, capex, revenue, other, otherPerUnit };
    };
        // LABORATORY
    const laboratory = () => {
        const labCost = 876000;
        const avgLabLifetime = 30;
        const serviceAndMaintenance = 0.05;

        const opex = Math.round(labCost * serviceAndMaintenance);
        const capex = Math.round(labCost / avgLabLifetime);
        const revenue = 0;

        return { opex, capex, revenue };
    };

    /* ----- CASTHOUSE - CASTING ----- */

        // MELT LOSS
    const MeltLoss = () => {
        const cycleTime_Reduction = samples.furnace.time+analysisTime-DTE.sampleTime.EA2000;
        const cycleTime = 24/castings_perDay*60;
        const holdingTime_Reduction = cycleTime_Reduction/cycleTime;
        const drossLoss = productionAmount*meltLoss;
        const metalLoss_Reduction_Year = holdingTime_Reduction*drossLoss/4;
        const increasedQuality = metalLoss_Reduction_Year*(CH.aluminumPrice-CH.whiteDrossPrice);

        const opex = 0;
        const capex = 0;
        const revenue = Math.round(increasedQuality);

        const other = Math.round(metalLoss_Reduction_Year);
        const otherPerUnit = Math.round(revenue/other);

        return { opex, capex, revenue, other, otherPerUnit };
    };
        // CRUCIBLE CYCLE TIME
    const crucibleCycleTime = () => {
        const crucibleCycleTimeReductionPerDay = (samples.crucible.time*samples.crucible.amount+samples.crucible.amount*preFurnaceAnalysisProportion*analysisTime)/60;
        const profit = crucibleCycleTimeReductionPerDay.toFixed(1);

        return { profit };
    };
        // CASTING CAPACITY
    const castingCapacity = () => {
        const castingCycleTime = 24/castings_perDay*60;
        const reducedCastingTimePerCast = samples.furnace.time+analysisTime-DTE.sampleTime.EA2000;
        const castingTimeReduction = reducedCastingTimePerCast/castingCycleTime;
        const increasedCastingCapacity = castingTimeReduction*productionAmount/4;

        const profit = increasedCastingCapacity.toFixed(0);

        return { profit };
    };
        // CASTING QUALITY
    const castingQuality = () => {
        const reducedRemelt = productionAmount*offSpec*DTE.productOffSpecReduction;
        const costOfRemeltReduct = reducedRemelt*(gasFurnaces.price*electricFurnaces.nrOfFurnaces/(totalNrOfFurnaces)+electricFurnaces.price*gasFurnaces.nrOfFurnaces/(totalNrOfFurnaces)+oilFurnaces.price*oilFurnaces.nrOfFurnaces/(totalNrOfFurnaces));
        const higherCastingQuality = DTE.castingQualityIncrease*productionAmount;

        const opex = Math.round(costOfRemeltReduct);
        const capex = 0;
        const revenue = Math.round(higherCastingQuality);

        const other = productionAmount;
        const otherPerUnit = Math.round(revenue/other);

        return { opex, capex, revenue, other, otherPerUnit };
    };

    /* ----- CASTHOUSE - EMISSIONS ----- */

        // CO2 EMISSIONS
    const emissions = () => {
        const castingCycleTime = 24/castings_perDay*60;
        const furnaceCastingTime = castingCycleTime;
        const timeSavedPerCast = samples.furnace.time+analysisTime-DTE.sampleTime.EA2000;
        const holdingTime_Reduction = timeSavedPerCast/furnaceCastingTime;
        const emissions = co2Emissions/1000*productionAmount*((gasFurnaces.nrOfFurnaces+oilFurnaces.nrOfFurnaces)/totalNrOfFurnaces);
        const CO2Emission_Reduction_DTE = emissions*holdingTime_Reduction;
        const CO2Emission_Reduction_Cost = CO2Emission_Reduction_DTE*CH.CO2EmissionPrice.quota;
        const opex = Math.round(CO2Emission_Reduction_Cost);
        const capex = 0;
        const revenue = 0;

        const other = Math.round(CO2Emission_Reduction_DTE);
        const otherPerUnit = Math.round(opex/other);

        return { opex, capex, revenue, other, otherPerUnit };
    };

    /* ----- CASTHOUSE - SCRAP ----- */

    // ALUMINUM SALES
    const aluminumSales = () => {
        const opex = 0;
        const capex = 0;
        const revenue = 0;

        const other = 0;
        const otherPerUnit = 0;

        return { opex, capex, revenue, other, otherPerUnit };
    };
    // REMELTING REDUCTION
    const remeltingReduction = () => {
        const remelt_Reduction = productionAmount*offSpec*DTE.productOffSpecReduction;
        const remelt_Reduction_Cost = remelt_Reduction*(gasFurnaces.price*electricFurnaces.nrOfFurnaces/totalNrOfFurnaces+electricFurnaces.price*gasFurnaces.nrOfFurnaces/totalNrOfFurnaces+oilFurnaces.price*oilFurnaces.nrOfFurnaces/totalNrOfFurnaces)
        const opex = Math.round(remelt_Reduction_Cost);
        const capex = 0;
        const revenue = 0;

        const other = Math.round(remelt_Reduction);
        const otherPerUnit = Math.round(opex/other);

        return { opex, capex, revenue, other, otherPerUnit };
    };
   
    
    // return [ 
    //     electricityConsumption(), gasConsumption(), // Energy
    //     sampling(), sampleAnalysis(), laboratory(), // Sampling
    //     MeltLoss(), crucibleCycleTime(), castingCapacity(), castingQuality(), // Casting
    //     emissions(), // Emissions
    //     aluminumSales(), remeltingReduction(), // Scrap
    // ];
    return {
        electricityConsumption: electricityConsumption(), gasConsumption:gasConsumption(), // Energy
        sampling:sampling(), sampleAnalysis:sampleAnalysis(), laboratory:laboratory(), // Sampling
        meltLoss:MeltLoss(), crucibleCycleTime:crucibleCycleTime(), castingCapacity:castingCapacity(), castingQuality:castingQuality(), // Casting
        emissions:emissions(), // Emissions
        aluminumSales:aluminumSales(), remeltingReduction:remeltingReduction(), // Scrap
    };
};

module.exports = { calculations };