import joi from 'joi';

export const responseSchema = joi.array().items(
    joi.object({
        id: joi.number().integer().required(),
        state: joi.string().valid('INCOMPLETE', 'COMPLETE').required(),
        description: joi.string().min(3).max(255).required(),
        created_at: joi.date().required(),
        completed_at: joi.date().allow(null).required(),
    })
);
