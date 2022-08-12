
export const potroomSections = {
    electricity: {
        id: 0, title: "Electricity Consumption", description: "Reduced electricity consumption",
        profitTab: true, 
        otherTab: {title: "Electricity Saved", unit: "Mwh", prefix: "Price"},
        comment: "Assuming a 0.5% decrease in electricity consumption.",
    },
    sampling: {
        id: 1, title: "Pot Sampling", description: "Reduced sampling time",
        profitTab: true, 
        otherTab: {title: "Time Saved", unit: "Hours", prefix: "Price"},
        comment: "Assuming a new sampling time of 79.8 seconds.",
    },
    laboratory: {
        id: 2, title: "Pot Laboratory", description: "Discontinued equipment & maintenance",
        profitTab: true, 
        comment: "Assuming an equipment and maintenance cost at 3.5% of laboratory price.",  
    },
    anodes: {
        id: 3, title: "Anodes", description: "Reduced anode consumption",
        profitTab: true, 
        otherTab: {title: "Anodes Saved", unit: "kg", prefix: "Price"},
        comment: "Assuming a 2% reduction in anode consumption.",
    },
    fluoride: { 
        id: 4, title: "Fluoride", description: "Reduced fluoride consumption",
        profitTab: true, 
        otherTab: {title: "Fluoride Saved", unit: "kg", prefix: "Price"},
        comment: "Assuming a 5% reduction in fluoride consumption.",
    },
    tapouts: {
        id: 5, title: "Tapouts", description: "Reduced tapout rate",
        profitTab: true, 
        otherTab: {title: "Tapouts Prevented", unit: "", prefix: "Loss"},
        comment: "Assuming a 50% reduction in tapouts.",
    }, 
    potReplacements: { 
        id: 6, title: "Pot Replacements", description: "Increased pot durability",
        profitTab: true, 
        otherTab: {title: "Replacements Prevented", unit: "", prefix: "Price"},
        comment: "Assuming a 0.5% increase in pot durability.",
    },
    shutdowns: {
        id: 7, title: "Shutdowns", description: "Reduced shutdown rate", amountDesc: "Mitigation", 
        profitTab: false, 
        otherTab: {title: "Other", unit: "$", prefix: ""},
        comment: "Assuming 1 shutdown every 15 years.",  
        amountType: "$",
    },
};

// (), (), // Energy
//         (), (), (), // Sampling
//         (), (), (), (), // Casting
//         (), // Emissions
//         (), (), // Scrap
export const casthouseSections = {
    electricityConsumption: {
        id: 0, title: "Electricity Consumption", description: "Reduced casting time",
        profitTab: true, 
        otherTab: {title: "Electricity Saved", unit: "MWh", prefix: "Price"},
    },
    gasConsumption: {
        id: 1, title: "Gas Consumption", description: "Reduced casting time",
        profitTab: true, 
        otherTab: {title: "Gas Saved", unit: "Mwh", prefix: "Price"},
    },
    sampling: {
        id: 2, title: "Sampling", description: "Reduced sampling time",
        profitTab: true, 
        otherTab: {title: "Time Saved per Day", unit: "Hours", prefix: "Price"},
        comment: "Assuming a reduced sampling time of 90 seconds.",
    },
    sampleAnalysis: { 
        id: 3, title: "Sample Analysis", description: "Transportation & Analysis elimination",
        profitTab: true, 
        otherTab: {title: "Time Saved per Day", unit: "Hours", prefix: "Price"},
        comment: "With DTE, analysis is done on site and in real time, reducing the overhead of analysis and sample transportation to 0.",
    },
    laboratory: { 
        id: 4, title: "Laboratory", description: "Discontinued equipment & maintenance",
        profitTab: true, 
        comment: "Assuming an equipment and maintenance cost at 5% of laboratory price.",  
    },
    meltLoss: { 
        id: 5, title: "Melt Loss", description: "Reduced melt loss",
        profitTab: true, 
        otherTab: {title: "Loss Prevented", unit: "Tonnes", prefix: "Price"},
    },
    crucibleCycleTime: { 
        id: 6, title: "Crucible Cycle Time", description: "Reduction per day", 
        amountType: "Hours", amountDesc: "Reduction", 
        profitTab: false, 
        comment: "With reduced sampling and analysis times.",
    },
    castingCapacity: { 
        id: 7, title: "Casting Capacity", description: "Increase in casting capacity", 
        amountType: "Tonnes", amountDesc: "Increase", 
        profitTab: false, 
        comment: "Annual potential increase with reduced sampling and analysis times.",
    },
    castingQuality: { 
        id: 8, title: "Casting Quality", description: "Increased casting quality",
        profitTab: true, 
        otherTab: {title: "Production", unit: "Tonnes", prefix: "Increase"},
        comment: "With an increased potential for casting higher quality metals.",
    },
    emissions: { 
        id: 9, title: "CO2 Emissions", description: "Gas furnace emissions reduction",
        profitTab: true, 
        otherTab: {title: "Reduced CO2 Emissions", unit: "Tonnes", prefix: "Price"},
        comment: "With reduced casting times.",
    },
    aluminumSales: { 
        id: 10, title: "Aluminum Sales", description: "Off spec decrease",
        profitTab: true, 
        otherTab: {title: "Sales Increase", unit: "Tonnes", prefix: "Margin"},
        comment: "With a decrease in off spec production, the volume of aluminum sales increases. Some of the aluminum previously sold as scrap can now be sold as pure aluminum. Assuming a 90% decrease in off-spec production.",
    },
    remeltingReduction: { 
        id: 11, title: "Remelting Reduction", description: "Off spec decrease", 
        profitTab: true, 
        otherTab: {title: "Remelting Prevented", unit: "Tonnes", prefix: "Price"},
        comment: "Assuming a 90% decrease in remelt.",
    },
};
// export const potroomSections = [
//     {
//         id: 0, title: "Electricity Consumption", description: "Reduced electricity consumption",
//         profitTab: true, 
//         otherTab: {title: "Electricity Saved", unit: "Mwh", prefix: "Price"},
//         comment: "Assuming a 0.5% decrease in electricity consumption.",
//     },
//     {
//         id: 1, title: "Pot Sampling", description: "Reduced sampling time",
//         profitTab: true, 
//         otherTab: {title: "Time Saved", unit: "Hours", prefix: "Price"},
//         comment: "Assuming a new sampling time of 79.8 seconds.",
//     },
//     {
//         id: 2, title: "Pot Laboratory", description: "Discontinued equipment & maintenance",
//         profitTab: true, 
//         comment: "Assuming an equipment and maintenance cost at 3.5% of laboratory price.",  
//     },
//     {
//         id: 3, title: "Anodes", description: "Reduced anode consumption",
//         profitTab: true, 
//         otherTab: {title: "Anodes Saved", unit: "kg", prefix: "Price"},
//         comment: "Assuming a 2% reduction in anode consumption.",
//     },
//     { 
//         id: 4, title: "Fluoride", description: "Reduced fluoride consumption",
//         profitTab: true, 
//         otherTab: {title: "Fluoride Saved", unit: "kg", prefix: "Price"},
//         comment: "Assuming a 5% reduction in fluoride consumption.",
//     },
//     {
//         id: 5, title: "Tapouts", description: "Reduced tapout rate",
//         profitTab: true, 
//         otherTab: {title: "Tapouts Prevented", unit: "", prefix: "Loss"},
//         comment: "Assuming a 50% reduction in tapouts.",
//     }, 
//     { 
//         id: 6, title: "Pot Replacements", description: "Increased pot durability",
//         profitTab: true, 
//         otherTab: {title: "Replacements Prevented", unit: "", prefix: "Price"},
//         comment: "Assuming a 0.5% increase in pot durability.",
//     },
//     {
//         id: 7, title: "Shutdowns", description: "Reduced shutdown rate", amountDesc: "Mitigation", 
//         profitTab: false, 
//         otherTab: {title: "Other", unit: "$", prefix: ""},
//         comment: "Assuming 1 shutdown every 15 years.",  
//         amountType: "$",
//     },
// ];

// export const casthouseSections = [
//     {
//         id: 0, title: "Electricity Consumption", description: "Reduced casting time",
//         profitTab: true, 
//         otherTab: {title: "Electricity Saved", unit: "MWh", prefix: "Price"},
//     },
//     {
//         id: 1, title: "Gas Consumption", description: "Reduced casting time",
//         profitTab: true, 
//         otherTab: {title: "Gas Saved", unit: "Mwh", prefix: "Price"},
//     },
//     {
//         id: 2, title: "Sampling", description: "Reduced sampling time",
//         profitTab: true, 
//         otherTab: {title: "Time Saved per Day", unit: "Hours", prefix: "Price"},
//         comment: "Assuming a reduced sampling time of 90 seconds.",
//     },
//     { 
//         id: 3, title: "Sample Analysis", description: "Transportation & Analysis elimination",
//         profitTab: true, 
//         otherTab: {title: "Time Saved per Day", unit: "Hours", prefix: "Price"},
//         comment: "With DTE, analysis is done on site and in real time, reducing the overhead of analysis and sample transportation to 0.",
//     },
//     { 
//         id: 4, title: "Laboratory", description: "Discontinued equipment & maintenance",
//         profitTab: true, 
//         comment: "Assuming an equipment and maintenance cost at 5% of laboratory price.",  
//     },
//     { 
//         id: 5, title: "Melt Loss", description: "Reduced melt loss",
//         profitTab: true, 
//         otherTab: {title: "Loss Prevented", unit: "Tonnes", prefix: "Price"},
//     },
//     { 
//         id: 6, title: "Crucible Cycle Time", description: "Reduction per day", 
//         amountType: "Hours", amountDesc: "Reduction", 
//         profitTab: false, 
//         comment: "With reduced sampling and analysis times.",
//     },
//     { 
//         id: 7, title: "Casting Capacity", description: "Increase in casting capacity", 
//         amountType: "Tonnes", amountDesc: "Increase", 
//         profitTab: false, 
//         comment: "Annual potential increase with reduced sampling and analysis times.",
//     },
//     { 
//         id: 8, title: "Casting Quality", description: "Increased casting quality",
//         profitTab: true, 
//         otherTab: {title: "Production", unit: "Tonnes", prefix: "Increase"},
//         comment: "With an increased potential for casting higher quality metals.",
//     },
//     { 
//         id: 9, title: "CO2 Emissions", description: "Gas furnace emissions reduction",
//         profitTab: true, 
//         otherTab: {title: "Reduced CO2 Emissions", unit: "Tonnes", prefix: "Price"},
//         comment: "With reduced casting times.",
//     },
//     { 
//         id: 10, title: "Aluminum Sales", description: "Off spec decrease",
//         profitTab: true, 
//         otherTab: {title: "Sales Increase", unit: "Tonnes", prefix: "Margin"},
//         comment: "With a decrease in off spec production, the volume of aluminum sales increases. Some of the aluminum previously sold as scrap can now be sold as pure aluminum. Assuming a 90% decrease in off-spec production.",
//     },
//     { 
//         id: 11, title: "Remelting Reduction", description: "Off spec decrease", 
//         profitTab: true, 
//         otherTab: {title: "Remelting Prevented", unit: "Tonnes", prefix: "Price"},
//         comment: "Assuming a 90% decrease in remelt.",
//     },
// ];

const getIsOpen = (section) => {
    const sectionIsOpen = {};
    for (var i=0; i < Object.keys(section).length; i++) {
        sectionIsOpen[i] = false;
    };
    return sectionIsOpen;
};

const potroomSectionIsOpen = getIsOpen(potroomSections);
const casthouseSectionIsOpen = getIsOpen(casthouseSections);

export const sectionIsOpen = [potroomSectionIsOpen, casthouseSectionIsOpen];