import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'only letters min 0 max 20',
        'string.empty':'no empty'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'price must be min 0',
        'number.max':'price must be max 1 000 000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'year must be gte 1990',
        'number.max':`year must be lte ${new Date().getFullYear()}`
    })
});

export {
    carValidator
}