const express = require("express");

const TemplateCtrl = require("../controllers/template_ctrl");

const router = express.Router();

router.post('/template', TemplateCtrl.createTemplates);
router.get('/template/primary/:templateId', TemplateCtrl.getTemplatePrimary);
router.get('/template/secondary/:templateId', TemplateCtrl.getTemplateSecondary);


module.exports = router;