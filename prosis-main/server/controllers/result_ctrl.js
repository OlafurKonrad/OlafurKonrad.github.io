const Result = require("../models/result_model");
const calculations = require("../calculations");

const { ResultModel } = Result;

const testData = { 
    casthouse: {
        productionAmount: 80000,
        samples_furnace_amount: 10,
        samples_launder_amount: 20,
        analysisTime: 5,
        samples_furnace_time: 4,
        samples_launder_time: 2,
        furnaces_electric_amount: 0,
        furnaces_gas_amount: 2,
        furnaces_oil_amount: 0,
        castings_perDay: 5,
        meltLoss: 0.03,
        offSpec: 0.01,

        // NEW
        castingLines_amount: 1,

        // SLEPPA
        naturalGasPrice: 0.005,
        electricityCost: 27,
        co2Emissions: 60,
        skimmingStations: 1,
        samples_crucible_amount: 60,
        samples_crucible_time: 2,
        crucibleReviewing: 0.5,
        offSpecRemelt: 1,
    },
};

const createResults = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide input data',
        });
    }
    const {operation, inputData} = body;

    // const test = calculations.secondaryResults(testData);
    // console.log("TEST - ", test);
    let new_res;
    // if (!operation) 
    new_res = calculations.primaryResults(inputData);
   
    const result = new ResultModel(new_res);

    if (!result) {
        return res.status(400).json({ success: false, error: err })
    }

    let res_data;
    // if (!operation) 
    res_data = {"Potroom": result.potroom, "Casthouse": result.casthouse, devices: result.devices, total: result.total};

    result
        .save()
        .then(() => {
            // console.log("Result Created\n", result);
            return res.status(201).json({
                success: true,
                result: res_data,
                message: 'Result created!',
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Result not created!',
            });
        })
    
};

// const getResultsPrimary = async (req, res) => {
//     await Templates.findOne({ id: req.params.templateId }, (err, template) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!template) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Template not found` });
//         }
//         console.log("Template Found\n", template);
//         return res.status(200).json({ success: true, template });
//     }).catch(err => console.log(err));
// };

// const getResultsSecondary = async (req, res) => {
//     console.log("GET RESULTS - SERVER");
//     const { templateId } = req.params;
//     // const { templateId, operationId } = req.params;
//     // console.log("templateId - ", templateId);
//     // console.log("operationId - ", operationId);

//     const template = Templates.filter(x => x.id === templateId).casthouse;

//     return res.status(200).json({ success: true, template });
// };

module.exports = {
    createResults,
    // getResultsPrimary,
    // getResultsSecondary,
};