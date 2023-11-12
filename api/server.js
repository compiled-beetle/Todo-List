import hapi from '@hapi/hapi';

import { getAllRequest, postRequest, patchRequest, deleteRequest } from './handlers/_index.js';

/**
 * Creates and configures an Hapi API server.
 *
 * @return {Promise<any>} Hapi server instance.
 */
export const apiServer = async () => {
    const server = hapi.server({
        port: 3000,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/api/todos',
        handler: getAllRequest,
    });

    server.route({
        method: 'POST',
        path: '/api/todo',
        handler: postRequest,
    });

    server.route({
        method: 'PATCH',
        path: '/api/todo/{id}',
        handler: patchRequest,
    });

    server.route({
        method: 'DELETE',
        path: '/api/todo/{id}',
        handler: deleteRequest,
    });

    return server;
};
