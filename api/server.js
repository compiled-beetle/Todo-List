import hapi from '@hapi/hapi';

/**
 * Creates and configures an using Hapi API server.
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
        handler: (request, http) => {
            return 'GET request';
        },
    });

    server.route({
        method: 'GET',
        path: '/api/todo/{id}',
        handler: (request, http) => {
            const id = request.params.id;
            return 'GET request > id ${id}';
        },
    });

    server.route({
        method: 'POST',
        path: '/api/todo',
        handler: (request, http) => {
            return 'POST request';
        },
    });

    server.route({
        method: 'PATCH',
        path: '/api/todo/{id}',
        handler: (request, http) => {
            const id = request.params.id;
            return `PATCH request > id ${id}`;
        },
    });

    server.route({
        method: 'DELETE',
        path: '/api/todo/{id}',
        handler: (request, http) => {
            const id = request.params.id;
            return `DELETE request > id ${id}`;
        },
    });

    return server;
};
