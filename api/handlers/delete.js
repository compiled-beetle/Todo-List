import { deleteDataById } from '../../database/crud/_index.js';

/**
 * Deletes a todo.
 *
 * @param {Object} request - The request object.
 * @param {Object} http - The http object.
 * @return {Promise<any>} The result of the delete request.
 */
export const deleteRequest = async (request, http) => {
    const id = request.params.id;

    if (!id) {
        return http.response('id is required').code(404);
    }

    const result = await deleteDataById(id);

    if (!result) {
        return http.response('data not found').code(404);
    }

    return http.response('').code(200);
};
