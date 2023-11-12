/**
 * Executes a POST request to create a todo.
 *
 * @param {object} request - The request object.
 * @param {object} http - The http object.
 * @return {string|Object} - The response message or the http error code.
 */
export const postRequest = (request, http) => {
    const data = request.params.data;

    // logic here
    if (!data) {
        return http.response('data not found').code(404);
    }
    return 'POST request';
};
