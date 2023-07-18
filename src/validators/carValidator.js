import Joi from "joi";

const carValidator = Joi.object({
brand: Joi.string().regex(/^[a-zA-Za-яА-яєІїЇ]{1,20}$/).required().messages({
    'string.pattern.base':'Бренд має складатись тільки з літер мін 1 мак символів',
    'string.required':'Це поле є обов\'язковим'
}),
    price: Joi.number().min(0).max(1000000).required().messages({
       "number.min":"No buy",
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})
export {carValidator}