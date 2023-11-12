/**
 * Deletes a todo.
 *
 * @param {Object} request - The request object.
 * @param {Object} http - The http object.
 * @return {string} The result of the delete request.
 */
export const deleteRequest = (request, http) => {
    const id = request.params.id;

    const data = true; // logic here
    if (!data) {
        return http.response('data not found').code(404);
    }
    return `DELETE request > id ${id}`;
};
