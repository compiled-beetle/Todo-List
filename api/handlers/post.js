import { insertData } from '../../database/crud/_index.js';

/**
 * Executes a POST request to create a todo.
 *
 * @param {object} request - The request object.
 * @param {object} http - The http object.
 * @return {Promise<any>} - The response message or the http error code.
 */
export const postRequest = async (request, http) => {
    const description = request.payload.description;
    let result;

    if (!description) {
        return http.response('description is required').code(404);
    }

    const data = { description: description };
    result = await insertData(data);

    if (!result) {
        return http.response('error inserting data').code(404);
    }

    return http.response(JSON.stringify(result)).code(201);
};
