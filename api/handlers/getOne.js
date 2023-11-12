/**
 * Gets a single todo from the database.
 *
 * @param {Object} request - The request object.
 * @param {Object} http - The http object.
 * @return {string|Object} - The response message or the http error code.
 */
export const getOneRequest = (request, http) => {
    const id = request.params.id;

    // logic here
    if (!id) {
        return http.response('data not found').code(404);
    }
    return `GET request > id ${id}`;
};
