const Joi = require("@hapi/joi");
const validateUPS = (data) => {
    const schema = Joi.object({
        service:Joi.string().valid('UPSExpress', 'UPS2DAY').required(),
        width: Joi.object({
            value: Joi.number().required(),
            unit: Joi
                .string()
                .valid('inch').required(),
        }).required(),
        height: Joi.object({
            value: Joi.number().required(),
            unit: Joi
                .string()
                .valid('inch').required(),
        }).required(),
        length: Joi.object({
            value: Joi.number().required(),
            unit: Joi
                .string()
                .valid('inch').required(),
        }).required(),
        weight: Joi.object({
            value: Joi.number().required(),
            unit: Joi
                .string()
                .valid('pound').required(),
        }).required(),

    });
    return schema.validate(data);
};
const validateFEDEX = (data) => {
    const schema = Joi.object({
        service:Joi.string().valid('fedexAIR', 'fedexGroud').required(),
        width: Joi.object({
            value: Joi.number().required(),
            unit: Joi
                .string()
                .valid('cm').required(),
        }).required(),
        height: Joi.object({
            value: Joi.number().required(),
            unit: Joi
                .string()
                .valid('cm').required(),
        }).required(),
        length: Joi.object({
            value: Joi.number().required(),
            unit: Joi
                .string()
                .valid('cm').required(),
        }).required(),
        weight: Joi.object({
            value: Joi.number().required(),
            unit: Joi
                .string()
                .valid('gram').required(),
        }).required(),

    });
    return schema.validate(data);
};

module.exports.validateUPS = validateUPS;
module.exports.validateFEDEX = validateFEDEX;