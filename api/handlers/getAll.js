import { listAllData } from '../../database/crud/_index.js';

import joi from 'joi';
import { responseSchema } from '../validation/todo.js';

const getAllRequestSchema = joi
    .object({
        filter: joi.string().valid('INCOMPLETE', 'COMPLETE', 'ALL').default('ALL').optional(),
        orderBy: joi
            .string()
            .allow('')
            .valid('', 'id', 'state', 'description', 'created_at', 'completed_at')
            .default('created_at')
            .optional(),
    })
    .or('filter', 'orderBy');

/**
 * Gets all todos from the database.
 *
 * @param {Object} request - The request object.
 * @param {Object} http - The http object.
 * @return {Promise<any>} - The response message or the http error code.
 */
export const getAllRequest = async (request, http) => {
    const { error, value } = getAllRequestSchema.validate(request.query);

    if (error) {
        return http.response('query is invalid').code(400);
    }

    let result = await listAllData();
    result = responseSchema.validate(result);
    console.log(result);

    if (!result) {
        return http.response('data not found').code(404);
    }

    if (value.filter && value.filter !== 'ALL') {
        result.value = result.value.filter((item) => item.state === value.filter);
    }

    if (value.orderBy) {
        result.value.sort((a, b) => {
            if (a[value.orderBy] < b[value.orderBy]) {
                return -1;
            }
            if (a[value.orderBy] > b[value.orderBy]) {
                return 1;
            }
            return 0;
        });
    }

    return http.response(JSON.stringify(result.value)).code(200);
};
