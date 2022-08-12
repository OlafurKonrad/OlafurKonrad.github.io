const PR = require("./potroom");
const CH = require("./casthouse");
const Secondary = require("./secondary");
const Devices = require("./devices");
const Sections = require("../constants/sections");
const checkIfNum = (n) => { if (typeof n === "string") return 0; return n; };

const { potroomSections, casthouseSections } = Sections;

const primaryResults = (data) => {
    const potroom = PR.calculations(data.potroom);
    const casthouse = CH.calculations(data.casthouse);
    const devices = Devices.getDevices(data.potroom.pots_amount)


    // let potroomResults = [...potroomSections]
    let potroomProfit_Year = 0;
    // Math.round(potroom.map(value => value.profit).reduce((x, y) => checkIfNum(x) + checkIfNum(y),0));
    for (const item in potroom) {
        if (potroomSections[item].profitTab) {
            const { opex, capex, revenue } = potroom[item];
            potroom[item].profit = opex + capex + revenue;
            potroomProfit_Year = potroomProfit_Year+checkIfNum(opex) + checkIfNum(capex) + checkIfNum(revenue);
        }
    }
    let casthouseProfit_Year = 0;
    for (const item in casthouse) {
        if (casthouseSections[item].profitTab) {
            const { opex, capex, revenue } = casthouse[item];
            casthouse[item].profit = opex + capex + revenue;
            casthouseProfit_Year = casthouseProfit_Year+checkIfNum(opex) + checkIfNum(capex) + checkIfNum(revenue);

        }
    }


    // const potroomProfit_Year = Math.round(potroomResults.map(value => value.profit).reduce((x, y) => checkIfNum(x) + checkIfNum(y),0));

    // const casthouseProfit_Year = Math.round(casthouse.map(value => value.profit).reduce((x, y) => checkIfNum(x) + checkIfNum(y),0));
    potroomProfit_Year = Math.round(potroomProfit_Year);
    casthouseProfit_Year = Math.round(casthouseProfit_Year);

    const potroomProfit_Tonne = Math.round(potroomProfit_Year/data.potroom.productionAmount);
    const casthouseProfit_Tonne = Math.round(casthouseProfit_Year/data.casthouse.productionAmount);
    
    const totalProfit = [
        {   // Potroom Total
            annual: potroomProfit_Year, 
            tonne: potroomProfit_Tonne,
        },
        {   // Casthouse
            annual: casthouseProfit_Year,
            tonne: casthouseProfit_Tonne,
        }, 
        {   // Overview
            annual: potroomProfit_Year+casthouseProfit_Year,
            tonne: potroomProfit_Tonne+casthouseProfit_Tonne,
        }, 
    ];

    // return {        
    //     potroom: potroomResults, casthouse: casthouseResults, 
    //     total: totalProfit, devices, 
    // };
    return {        
        potroom, casthouse, 
        total: totalProfit, devices, 
    };
};

const secondaryResults = (data) => {
    const casthouse = Secondary.calculations(data.casthouse);
    return {casthouse};
    // // const devices = Devices.getDevices(data.potroom.pots_amount)
    // const devices = [
    //     { title: 'EA1000', amount: 0 },
    //     { title: 'EA2000', amount: 0 },
    //     { title: 'EA2500', amount: 0 },
    // ];


    // let casthouseResults = [...casthouseSections]
    // for (var i=0; i<casthouseResults.length; i++) {
    //     if (casthouseResults[i].profitTab) {
    //         const { opex, capex, revenue } = casthouse[i];
    //         casthouseResults[i].opex = opex;
    //         casthouseResults[i].capex = capex;
    //         casthouseResults[i].revenue = revenue;
    //         casthouseResults[i].profit = opex + capex + revenue;
    //     } 
    //     if (typeof casthouse[i].other !== "undefined") casthouseResults[i].other = casthouse[i].other;
    //     if (typeof casthouse[i].otherPerUnit !== "undefined") casthouseResults[i].otherPerUnit = casthouse[i].otherPerUnit;
    //     if (typeof casthouse[i].profit !== "undefined") casthouseResults[i].profit = casthouse[i].profit;

    // };

    // const casthouseProfit_Year = Math.round(casthouseResults.map(value => value.profit).reduce((x, y) => checkIfNum(x) + checkIfNum(y),0));
    // const casthouseProfit_Tonne = Math.round(casthouseProfit_Year/data.casthouse.productionAmount);
    
    // const totalProfit = [
    //     {   // Casthouse
    //         annual: casthouseProfit_Year,
    //         tonne: casthouseProfit_Tonne,
    //     }, 
    //     {   // Overview
    //         annual: potroomProfit_Year+casthouseProfit_Year,
    //         tonne: potroomProfit_Tonne+casthouseProfit_Tonne,
    //     }, 
    // ];
    // return {        
    //     casthouse: casthouseResults, 
    //     total: totalProfit, devices, 
    // };
};
module.exports = { primaryResults, secondaryResults };