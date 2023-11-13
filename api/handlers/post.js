import { insertData } from '../../database/crud/_index.js';

import joi from 'joi';
import { responseSchema } from '../validation/todo.js';

const postRequestSchema = joi.string().min(3).max(255).required();

/**
 * Executes a POST request to create a todo.
 *
 * @param {object} request - The request object.
 * @param {object} http - The http object.
 * @return {Promise<any>} - The response message or the http error code.
 */
export const postRequest = async (request, http) => {
    const { error, value } = postRequestSchema.validate(request.payload.description);

    if (error) {
        return http.response('query is invalid').code(400);
    }

    let result;

    if (!value) {
        return http.response('description is required').code(404);
    }

    const data = { description: value };
    result = await insertData(data);
    result = responseSchema.validate(result);

    if (!result.value) {
        return http.response('error inserting data').code(404);
    }

    return http.response(JSON.stringify(result.value)).code(201);
};
