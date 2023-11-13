import { editDataById } from '../../database/crud/_index.js';

import joi from 'joi';
import { responseSchema } from '../validation/todo.js';

const patchIdRequestSchema = joi.number().integer().required();
const patchStateRequestSchema = joi.string().valid('INCOMPLETE', 'COMPLETE').default('INCOMPLETE').optional();
const patchDescriptionRequestSchema = joi.string().min(3).max(255).optional();

/**
 * Executes a PATCH on a todo and returns a response.
 *
 * @param {Object} request - The request object.
 * @param {Object} http - The http object.
 * @return {Promise<any>} - The response message or the http error code.
 */
export const patchRequest = async (request, http) => {
    const body = request.payload;
    const id = patchIdRequestSchema.validate(request.params.id);
    const state = patchStateRequestSchema.validate(request.payload.state);
    const description = patchDescriptionRequestSchema.validate(request.payload.description);

    if (!id) {
        return http.response('id is required').code(404);
    } else if (!body) {
        if (!description || !state) {
            return http.response('description or state is required').code(404);
        }
        if (state.value !== 'INCOMPLETE' || state.value !== 'COMPLETE') {
            return http.response('state is invalid').code(404);
        }
        return http.response('body is required').code(404);
    }

    let result = await editDataById(id.value, body);

    if (!result) {
        return http.response('data not found').code(404);
    }

    if (!result) {
        return http.response('data not found').code(404);
    } else if (result === 'completed') {
        return http.response('data is locked').code(400);
    }

    result = responseSchema.validate(result);

    return http.response(JSON.stringify(result.value)).code(200);
};
