const Template = require("../models/template_model");
// const Templates = require("../templates");

const createTemplates = (req, res) => {
    const body = req.body;
    console.log(body);

};

const getTemplatePrimary = async (req, res) => {
    await Template.findOne({ id: req.params.templateId }, (err, template) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!template) {
            return res
                .status(404)
                .json({ success: false, error: `Template not found` });
        }
        console.log("Template Found\n", template);
        return res.status(200).json({ success: true, template });
    }).catch(err => console.log(err));
};

const getTemplateSecondary = async (req, res) => {
    await Template.findOne({ id: req.params.templateId }, (err, template) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!template) {
            return res
                .status(404)
                .json({ success: false, error: `Template not found` });
        }
        console.log("Template Found\n", template.casthouse);
        return res.status(200).json({ success: true, template: template.casthouse });
    }).catch(err => console.log(err));
};

module.exports = {
    createTemplates,
    getTemplatePrimary,
    getTemplateSecondary,
};