const smallTemplate = [
    [
        {value: "USD",name: "", catagory: "Potroom"}, 
        {value: null,name: "factoryLocation", catagory: "Potroom"}, 
        {value: 150000,name: "metricTonsPerYear", catagory: "Potroom"},
        {value: 0.4,name: "anodePrice", catagory: "Potroom"},
        {value: 27,name: "electricityCost", catagory: "Potroom"},
        {value: 14.8,name: "energyConsumption", catagory: "Potroom"},
        {value: 80,name: "potSamplesPerDay", catagory: "Potroom"},
        {value: 1.5,name: "potSamplingTime", catagory: "Potroom"}, 
        {value: 250,name: "numberOfPots", catagory: "Potroom"}, 
        {value: 2,name: "numberOfPotlines", catagory: "Potroom"}, 
        {value: 190000,name: "potReplacementCost", catagory: "Potroom"}, 
        {value: 1700,name: "potLifespan", catagory: "Potroom"}, 
        {value: 20,name: "tapoutFrequency", catagory: "Potroom"}
    ],[ 
        {name: "currency",value: "USD", catagory: "Casthouse"}, {name: "factoryLocation",value:  null, catagory: "Casthouse"}, {name: "metricTonsPerYear",value:  150000, catagory: "Casthouse"},
        {name: "alloyProduction",value:  0.5, catagory: "Casthouse"}, // TAKA ÚT!!
        {name: "naturalGasPrice",value:  0.005, catagory: "Casthouse"}, {name: "electricityCost",value:  27, catagory: "Casthouse"}, {name: "co2Emissions",value:  60, catagory: "Casthouse"}, {name: "skimmingStations",value:  1, catagory: "Casthouse"},
        {name: "crucibleSamplesPerDay",value: 60, catagory: "Casthouse"}, {name: "furnaceSamplesPerDay",value:  20, catagory: "Casthouse"}, {name: "launderSamplesPerDay",value:  45, catagory: "Casthouse"}, {name: "analysisTime",value:  5, catagory: "Casthouse"},
        {name: "crucibleSamplingTime",value:  2, catagory: "Casthouse"}, {name: "furnaceSamplingTime",value:  4, catagory: "Casthouse"}, {name: "launderSamplingTime",value:  2, catagory: "Casthouse"}, {name: "crucibleReviewing",value:  0.5, catagory: "Casthouse"},
        {name: "numberOfElectricFurnaces",value:  0, catagory: "Casthouse"}, {name: "numberOfGasFurnaces",value:  2, catagory: "Casthouse"}, {name: "numberOfOilFurnaces",value:  0, catagory: "Casthouse"}, {name: "avgNoOfCastingsPerDay",value:  8, catagory: "Casthouse"}, 
        {name: "furnaceCapacity",value:  60, catagory: "Casthouse"}, // TAKA ÚT!!
        {name: "electricMeltLoss",value:  0.03, catagory: "Casthouse"}, {name: "gasMeltingLoss",value:  0.03, catagory: "Casthouse"}, {name: "oilMeltingLoss",value:  0.03, catagory: "Casthouse"}, {name: "offSpec",value:  0.01, catagory: "Casthouse"}, 
        {name: "pureAluHoldingTime",value:  0.5, catagory: "Casthouse"}, {name: "AlloyHoldingTime",value:  1, catagory: "Casthouse"}, // TAKA ÚT!!
        {name: "offSpecRemelt",value:  1, catagory: "Casthouse"}
    ],
];

const mediumTemplate = [
    [
        {name: "currency",value: "USD"}, {name:"factoryLocation",value: null}, {name:"metricTonsPerYear",value: 300000}, {name: "anodePrice",value: 0.4}, {name:"electricityCost",value: 27}, {name:"energyConsumption",value: 14.8}, {name:"potSamplesPerDay",value: 160}, {name:"potSamplingTime",value: 1.5}, 
        {name: "numberOfPots",value: 500}, {name:"numberOfPotlines",value: 4}, {name:"potReplacementCost",value: 190000}, {name:"potLifespan",value: 1700}, {name:"tapoutFrequency",value: 40} 
    ],
    [
        {name: "currency",value: "USD"}, {name:"factoryLocation",value: null}, {name:"metricTonsPerYear",value: 300000}, 
        {name: "alloyProduction",value: 0.5}, // TAKA ÚT!!
        {name:"naturalGasPrice",value: 0.005}, {name:"electricityCost",value: 27}, {name:"co2Emissions",value: 60},  {name:"skimmingStations",value: 2}, 
        {name: "crucibleSamplesPerDay",value: 120}, {name:"furnaceSamplesPerDay",value: 40}, {name:"launderSamplesPerDay",value: 90}, {name:"analysisTime",value: 5}, 
        {name: "crucibleSamplingTime",value: 2}, {name:"furnaceSamplingTime",value: 4}, {name:"launderSamplingTime",value: 2}, {name:"crucibleReviewing",value: 0.5}, 
        {name: "numberOfElectricFurnaces",value: 0}, {name:"numberOfGasFurnaces",value: 4}, {name: "numberOfOilFurnaces",value: 0}, {name:"avgNoOfCastingsPerDay",value: 10}, 
        {name:"furnaceCapacity",value: 60}, // TAKA ÚT!!
        {name: "electricMeltLoss",value: 0.03}, {name:"gasMeltingLoss",value: 0.03}, {name:"oilMeltingLoss",value: 0.03}, {name:"offSpec",value: 0.01}, 
        {name:"pureAluHoldingTime",value: 0.5}, {name:"AlloyHoldingTime",value: 1}, // TAKA ÚT!!
        {name:"offSpecRemelt",value: 1}
    ],
];

const largeTemplate = [
    [
        {name: "currency",value: "USD"}, {name:"factoryLocation",value: null}, {name:"metricTonsPerYear",value: 600000}, {name: "anodePrice",value: 0.4}, 
		{name:"electricityCost",value: 27}, {name:"energyConsumption",value: 14.8}, {name: "potSamplesPerDay",value: 320}, 
		{name:"potSamplingTime",value: 1.5}, {name: "numberOfPots",value: 1000}, {name:"numberOfPotlines",value: 8}, {name:"potReplacementCost",value: 190000}, {name:"potLifespan",value: 1700}, {name:"tapoutFrequency",value: 80}
    ],
    [
        {name: "currency",value: "USD"}, {name:"factoryLocation",value: null}, {name:"metricTonsPerYear",value: 600000},
        {name: "alloyProduction",value: 0.5}, // TAKA ÚT!!
        {name:"naturalGasPrice",value: 0.005}, {name:"electricityCost",value: 27},{name:"co2Emissions",value: 60},  {name:"skimmingStations",value: 4},
        {name: "crucibleSamplesPerDay",value: 240}, {name:"furnaceSamplesPerDay",value: 80}, {name:"launderSamplesPerDay",value: 180}, {name:"analysisTime",value: 5}, 
        {name: "crucibleSamplingTime",value: 2}, {name:"furnaceSamplingTime",value: 4}, {name:"launderSamplingTime",value: 2}, {name:"crucibleReviewing",value: 0.5}, 
        {name: "numberOfElectricFurnaces",value: 0}, {name:"numberOfGasFurnaces",value: 8}, {name: "numberOfOilFurnaces",value: 0}, {name:"avgNoOfCastingsPerDay",value: 20}, 
        {name:"furnaceCapacity",value: 60}, // TAKA ÚT!!
        {name: "electricMeltLoss",value: 0.03}, {name:"gasMeltingLoss",value: 0.03}, {name:"oilMeltingLoss",value: 0.03}, {name:"offSpec",value: 0.01}, 
        {name:"pureAluHoldingTime",value: 0.5}, {name:"AlloyHoldingTime",value: 1}, // TAKA ÚT!!
        {name:"offSpecRemelt",value: 1} 
    ],
];

export const templates = { 0: smallTemplate, 1: mediumTemplate, 2: largeTemplate}