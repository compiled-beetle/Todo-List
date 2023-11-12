import { editDataById } from '../../database/crud/_index.js';

/**
 * Executes a PATCH on a todo and returns a response.
 *
 * @param {Object} request - The request object.
 * @param {Object} http - The http object.
 * @return {Promise<any>} - The response message or the http error code.
 */
export const patchRequest = async (request, http) => {
    const id = request.params.id;
    const body = request.payload;

    if (!id) {
        return http.response('id is required').code(404);
    } else if (!body) {
        if (!body.description || !body.state) {
            return http.response('description or state is required').code(404);
        }
        if (body.state !== 'INCOMPLETE' || body.state !== 'COMPLETE') {
            return http.response('state is invalid').code(404);
        }
        return http.response('body is required').code(404);
    }

    const result = await editDataById(id, body);

    if (!result) {
        return http.response('data not found').code(404);
    } else if (result === 'completed') {
        return http.response('data is locked').code(400);
    }

    return http.response(JSON.stringify(result)).code(200);
};
