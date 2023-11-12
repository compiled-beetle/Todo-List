import { listAllData } from '../../database/crud/_index.js';

/**
 * Gets all todos from the database.
 *
 * @param {Object} request - The request object.
 * @param {Object} http - The http object.
 * @return {Promise<any>} - The response message or the http error code.
 */
export const getAllRequest = async (request, http) => {
    const filter = request.query.filter;
    const orderBy = request.query.orderBy || 'created_at';

    let result = await listAllData();

    if (!result) {
        return http.response('data not found').code(404);
    }

    if (filter) {
        result = result.filter((item) => item.state === filter);
    }

    if (orderBy) {
        result.sort((a, b) => {
            if (a[orderBy] < b[orderBy]) {
                return -1;
            }
            if (a[orderBy] > b[orderBy]) {
                return 1;
            }
            return 0;
        });
    }

    return http.response(JSON.stringify(result)).code(200);
};
