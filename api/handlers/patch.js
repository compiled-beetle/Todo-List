/**
 * Executes a PATCH on a todo and returns a response.
 *
 * @param {Object} request - The request object.
 * @param {Object} http - The http object.
 * @return {string|Object} - The response message or the http error code.
 */
export const patchRequest = (request, http) => {
    const data = request.params.data;

    // logic here
    if (!data) {
        return http.response('data not found').code(404);
    }
    return `PATCH request > id ${data.id}`;
};
