const { assumptions, DTE } = require("../constants");

const checkIfNum = (n) => { if (typeof n === "string") return 0; return n; };

const calculations = (data=null) => {    
    const { 
        productionAmount, anodePrice, energyConsumption, samples_amount,
        samples_time, pots_amount, potlines_amount, potReplacementCost, potLifespan, tapoutFrequency,
    } = data; 

    const PR = assumptions().potroom;

    const potLifespan_Years = potLifespan/365;
    /* ----- POTROOM - ENERGY ----- */

        // POT ELECTRICITY
    const getElectricity = () => {
        const electricityCost = PR.energyCost.electric;
        const opex = Math.round(productionAmount*energyConsumption*DTE.electricitySavings*electricityCost);
        const capex = 0;
        const revenue = 0;
        
        const other = Math.round(opex/electricityCost);
        const otherPerUnit = electricityCost;

        return { opex, capex, revenue, other, otherPerUnit };
    };

    /* ----- POTROOM - SAMPLING ----- */

        // POT SAMPLING
    const getSampling = () => {
        const timeSaved_Minutes_PerDay = samples_amount*(samples_time-DTE.sampleTime.EA1000)+60;
        const timeSaved_Hours_PerDay = timeSaved_Minutes_PerDay/60;
        const timeSaved_Hours_PerYear = timeSaved_Hours_PerDay*365;
        const employeeCostSaved = ((timeSaved_Hours_PerYear/PR.operatorEfficiency)/(24*365))*PR.employeeSalary*5;

        const opex = Math.round(employeeCostSaved);
        const capex = 0;
        const revenue = 0;

        const other = Math.round(timeSaved_Hours_PerYear/PR.operatorEfficiency);
        const otherPerUnit = Math.round(PR.employeeSalary*5/365/24);


        return { opex, capex, revenue, other, otherPerUnit };
    };

        // POT LABORATORY
    const getLaboratory = () => {
        const equipmentAndMaintenanceCost = 876000;
        const SOMEPERCENTAGE =  0.035;
        const labLifetime = 30;
        const opex = Math.round(equipmentAndMaintenanceCost*SOMEPERCENTAGE);
        const capex = Math.round(equipmentAndMaintenanceCost/labLifetime);
        const revenue = 0;


        return { opex, capex, revenue };
    };

    /* ----- POTROOM - RAW MATERIAL ----- */

        // ANODES

    const getAnodes = () => {
        const anodeConsumption_PerYear = PR.anodeConsumption*productionAmount;
        const anodesSaved_PerYear = anodeConsumption_PerYear*DTE.anodeSavings;
        const anodeCost_PerYear = anodesSaved_PerYear*anodePrice;

        const opex = Math.round(anodeCost_PerYear);
        const capex = 0;
        const revenue = 0;

        const other = anodesSaved_PerYear;
        const otherPerUnit = anodePrice;
        

        return { opex, capex, revenue, other, otherPerUnit };
    };



        // FLUORIDE
    const getFluoride = () => {
        const fluorideCost_KG = PR.fluorideCostPerTonne/1000;
        const fluorideConsumption_PerYear = PR.fluorideAdded*productionAmount;
        const fluorideSaved_PerYear = fluorideConsumption_PerYear*DTE.fluorideReduction;
        const fluorideCost_PerYear = fluorideSaved_PerYear*fluorideCost_KG;

        const opex = Math.round(fluorideCost_PerYear);
        const capex = 0;
        const revenue = 0;
        
        const other = fluorideSaved_PerYear;
        const otherPerUnit = fluorideCost_KG;


        return { opex, capex, revenue, other, otherPerUnit };
    };

    /* ----- POTROOM - POT CONTROL ----- */

        // TAPOUTS
    const getTapouts = () => {
        const reducedNumberOfTaputs = tapoutFrequency*DTE.suddenPotTapoutReduction;
        const production_PerDay = productionAmount/pots_amount/365;
        const potReplacementReduction = (pots_amount/potLifespan_Years)-(pots_amount/(potLifespan_Years*(1+DTE.potLifeIncrease)));
        const increasedPotUptime = potReplacementReduction*production_PerDay*PR.aluminumPrice;
        const costOfTapouts = (pots_amount/potlines_amount)*(1/24)*PR.aluminumPrice*reducedNumberOfTaputs;
        const opex = 0;
        const capex = 0;
        const revenue = Math.round(increasedPotUptime+costOfTapouts);
     
        const other = Math.round(reducedNumberOfTaputs);
        const otherPerUnit = Math.round(costOfTapouts/reducedNumberOfTaputs);


        return { opex, capex, revenue, other, otherPerUnit };
    };

        // POT REPLACEMENTS
    const getPotReplacements = () => {
        const potReplacementReduction_PerYear = (pots_amount*DTE.potLifeIncrease)/(potLifespan_Years*(DTE.potLifeIncrease+1));
        const potReplacementCost_PerYear = potReplacementReduction_PerYear*potReplacementCost;
        
        const opex = Math.round(potReplacementCost_PerYear);
        const capex = 0;
        const revenue = 0;
        
        const other = potReplacementReduction_PerYear.toFixed(2);
        const otherPerUnit = potReplacementCost;


        return { opex, capex, revenue, other, otherPerUnit };
    };

    /* ----- POTROOM - RISK ----- */

        // SHUTDOWNS
    const getShutdowns = () => {
        const reduced_Nr_Tapouts_Year = tapoutFrequency * DTE.suddenPotTapoutReduction;
        const shutdown_Rate = (1/15)/tapoutFrequency;
        const potline_Loss_Total_Cost = PR.costOfLosingPotline*(productionAmount/215000)
        const potlineLoss_Risk_Cost = (tapoutFrequency-reduced_Nr_Tapouts_Year)*shutdown_Rate*potline_Loss_Total_Cost;
        const profit = Math.round(potlineLoss_Risk_Cost);

        const other = profit;
        

        return { profit, other };
    };
    
    const electricity = getElectricity();
    const sampling = getSampling();
    const laboratory = getLaboratory();
    const anodes = getAnodes();
    const fluoride = getFluoride();
    const tapouts = getTapouts();
    const potReplacements = getPotReplacements();
    const shutdowns = getShutdowns();

    // const result = {electricity,  sampling, laboratory, anodes, fluoride, tapouts, potReplacements, shutdowns};
    

    // return [electricity,  sampling, laboratory, anodes, fluoride, tapouts, potReplacements, shutdowns];
    return {electricity,  sampling, laboratory, anodes, fluoride, tapouts, potReplacements, shutdowns};
};

module.exports = { calculations };