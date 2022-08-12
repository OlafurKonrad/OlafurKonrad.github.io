import { barchartColors, barchartColorsRGBA } from "../../constants/Barchart";
import { categories, resultTypes } from "../../constants/Categories";
import { potroomSections, casthouseSections } from "../../constants/Sections";

const labels = ["OpEx", "CapEx", "Revenue"];
const sectionDetails = [potroomSections, casthouseSections];

// Object.filter = (obj, condition) => 
//     Object.keys(obj)
//           .filter( key => condition(obj[key]) )
//           .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

const filterObject = (obj, condition) => (
    Object.keys(obj)
          .filter( key => condition(obj[key]) )
          .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} )
);
const someSectionsOpen = (data, selectedID) => {
    const selectedCategorySections = data.filter(x => x.categoryID===selectedID)
    const no_of_sections = selectedCategorySections.length;
    const no_of_open_sections = selectedCategorySections.filter(x => x.isOpen===true).length;
    if ((no_of_open_sections !== 0) && (no_of_open_sections < no_of_sections)) return true;
    return false;
};

const getOverviewChartResults = (results, smelterType) => {

    let allCategories;
    if (smelterType===1) allCategories = [...categories["Casthouse"]];
    else allCategories = [...categories["Potroom"], ...categories["Casthouse"]];

    const chartLabels = [...new Set(allCategories.map(category => category.info.title))];

    const no_of_categories = chartLabels.length;
    let data = [Array(no_of_categories).fill(0), Array(no_of_categories).fill(0), Array(no_of_categories).fill(0)];
    let resultID = 0;

    for (const resultType in categories) {
        categories[resultType].forEach(function(category) {
            const idx = chartLabels.indexOf(category.info.title);
            category.sections.forEach(function(sectionID) {
                // const section = sectionDetails[resultID][sectionID];
                const section = filterObject(sectionDetails[resultID], section => section.id===sectionID); 
                const sectionType = Object.keys(section)[0]; 
                const result = results[resultType][sectionType];

                // console.log("section - ", section);
                // const result = results[resultType].filter(x => x.id === section.id)[0];
                if (typeof result.opex !== "undefined") {
                    data[0][idx] += result.opex;
                    data[1][idx] += result.capex;
                    data[2][idx] += result.revenue;
                }
            });
        });
        resultID++;
    };
    return data;
};

// const findObject = (obj, condition) => (
//     Object.assign(...Object.keys(obj)
//     .filter( key => condition(obj[key]) )
//     .map( key => ({ [key]: obj[key] }) ) )
// );



const getChartResults = (results, resultID, resultType) => {
    // const resultType = resultTypes[resultID];
    const details = sectionDetails[resultID];
    let data = [[], [], []]; let titles = []; let sectionCategories = []; let sectionIDs = [];

    categories[resultType].forEach(function(category) {
        const categoryID = category.id;
        category.sections.forEach(function(sectionID) {
            // const section = Object.filter(details, section => section.id===sectionID); 
            const section = filterObject(details, section => section.id===sectionID); 

            const sectionType = Object.keys(section)[0]; 
            // console.log("SECTION - ", sectionType);
            /// const section = details[sectionID];
            //const result = results.filter(x => x.id === section.id)[0];
            const result = results[sectionType];
           // console.log("results - ", result)

            if (typeof result !== "undefined") {
                titles.push(section.title); sectionCategories.push(categoryID);
                sectionIDs.push(section.id);
                const op = Array(5).fill(0); const cap = Array(5).fill(0); const rev = Array(5).fill(0);
                op[categoryID] = result.opex; cap[categoryID] = result.capex; rev[categoryID] = result.revenue;
                data[0].push(op); data[1].push(cap); data[2].push(rev);
            }
        });
    });

    return { data, titles, sectionCategories, sectionIDs };
};

export const getChartData = (CategoryID=null, isSectionOpen=null, results=null) => {
    const allDataSets = []; 
    // const resultType = resultTypes[resultID];
    for (var r=0; r<2; r++) {
        const resultType = resultTypes[r];
        // let resultType = r==0 ? "potroom" : "casthouse";

        const dataSet = []; 

        const chartRes = getChartResults(results[resultType], r, resultType);
        const { data, titles, sectionCategories, sectionIDs } = chartRes;

        const no_of_sections = data[0].length;
        
        for (var j=0; j < no_of_sections; j++) {
            let barColors = [ barchartColors["OpEx"].default, barchartColors["CapEx"].default, barchartColors["Revenue"].default ];
            if (sectionCategories[j] === CategoryID) barColors = [barchartColors["OpEx"].selected, barchartColors["CapEx"].selected, barchartColors["Revenue"].selected];

            for (var i=0; i < labels.length; i++) {
                dataSet.push({
                    label: labels[i].concat(" - ", titles[j]),
                    data: data[i][j],
                    backgroundColor: barColors[i],
                    stack: labels[i],
                    categoryID: sectionCategories[j],
                    sectionID: sectionIDs[j],
                    isOpen: isSectionOpen[r][sectionIDs[j]],
                })
                
            };
        };
        allDataSets.push(dataSet);
    }
    // const resultType = resultTypes[2];
    const dataSet = []; 

    const data = getOverviewChartResults(results);

    const barColors = [barchartColors["OpEx"].selected, barchartColors["CapEx"].selected, barchartColors["Revenue"].selected];

    for (var i=0; i < labels.length; i++) {
        dataSet.push({
            label: labels[i],
            data: data[i],
            backgroundColor: barColors[i],
        })
    };
    allDataSets.push(dataSet);
    // if (resultID !== 2) {
    //     const chartRes = getChartResults(results[resultType], resultID);
    //     const { data, titles, sectionCategories, sectionIDs } = chartRes;

    //     const no_of_sections = data[0].length;
        
    //     for (var j=0; j < no_of_sections; j++) {
    //         let barColors = [ barchartColors["OpEx"].default, barchartColors["CapEx"].default, barchartColors["Revenue"].default ];
    //         if (sectionCategories[j] === CategoryID) barColors = [barchartColors["OpEx"].selected, barchartColors["CapEx"].selected, barchartColors["Revenue"].selected];

    //         for (var i=0; i < labels.length; i++) {
    //             dataSet.push({
    //                 label: labels[i].concat(" - ", titles[j]),
    //                 data: data[i][j],
    //                 backgroundColor: barColors[i],
    //                 stack: labels[i],
    //                 categoryID: sectionCategories[j],
    //                 sectionID: sectionIDs[j],
    //                 isOpen: isSectionOpen[sectionIDs[j]],
    //             })
                
    //         };
    //     };
        
    // } else {
    //     const data = getOverviewChartResults(results);

    //     const barColors = [barchartColors["OpEx"].selected, barchartColors["CapEx"].selected, barchartColors["Revenue"].selected];

    //     for (var i=0; i < labels.length; i++) {
    //         dataSet.push({
    //             label: labels[i],
    //             data: data[i],
    //             backgroundColor: barColors[i],
    //         })
    //     };
    // }
    return allDataSets;
};

export const getChartLabels = (smelterType) => {
    let labels = {"Potroom": [], "Casthouse": [], "Overview": []};
    for (const resultType in categories) {
        categories[resultType].forEach(function(category) {
            labels[resultType].push(category.info.title);
        });
    }
    if (smelterType===1) labels["Overview"] = [...labels["Casthouse"]];
    else labels["Overview"] = [...new Set([...labels["Potroom"], ...labels["Casthouse"]])];
    return labels;
};

export const changeBarColors = (dataSet, selectedID=null) => {
    let tempData = [...dataSet];
    const sectionsOpen = someSectionsOpen(tempData, selectedID);

    tempData.forEach(function(x) {
        if (x.categoryID === selectedID) {
            if ((!x.isOpen) && (sectionsOpen)) {
                x.backgroundColor = barchartColorsRGBA[x.stack];
            } else x.backgroundColor = barchartColors[x.stack].selected;
        } else x.backgroundColor = barchartColors[x.stack].default;
    });

    return tempData;
};

export const openSectionBar = (dataSet, isSectionOpen) => {
    let tempData = [...dataSet];
    tempData.forEach(function(x) {x.isOpen = isSectionOpen[x.sectionID]});
    return tempData;
};






