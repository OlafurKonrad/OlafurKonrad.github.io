const generalAssumptions = {
    aluminumPrice: 3300, // USD
    employeeSalary: 120000, // USD per Year
    operatorEfficiency: 0.7, // Percent
    energyCost: {electric: 27, gas: 11, oil: 6}, // USD per Mwh - Electric -> Iceland - NA and Landsvirkjun contract
};

const statsDTE = {
    sampleTime: {EA1000: 1.33, EA2000: 1.5}, // Minutes 
    electricitySavings: 0.005, // Percent
    anodeSavings: 0.02, // Percent
    fluorideReduction: 0.05, // Percent
    suddenPotTapoutReduction: 0.5, // Percent
    potLifeIncrease: 0.005, // Percent
    productOffSpecReduction: 0.9, // Percent
    castingQualityIncrease: 1.5, // USD per Ton
};

const assumptions = () => ({ 
    potroom: {
        ...generalAssumptions,
        anodeConsumption: 501, // kg per Ton of Aluminum
        fluorideCostPerTonne: 1400, // USD per Tonne
        fluorideAdded: 15, // kg per Tonne of Aluminum
        costOfLosingPotline: 20000000, // USD
    },
    casthouse: {
        ...generalAssumptions,
        CO2QuotaPrice: 51.9, // USD per Ton of CO2 - June 2021
        CO2EmissionPrice : {
            quota: 51.9, // June 2021
            china: 8.2, EU: 88.9, UK: 99.9, california: 30.8, australia: 24.1, 
            newZealand: 48.7, southKorea: 15.2, japan: 31.5, colombia: 10.0
        }, // USD per Ton of CO2
        whiteDrossPrice: 462, // USD per Ton - July 2021
    },
});

module.exports = { assumptions, DTE: statsDTE };