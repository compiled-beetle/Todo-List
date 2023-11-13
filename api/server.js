import hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import vision from '@hapi/vision';
import hapiSwagger from 'hapi-swagger';

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

    await server.register([
        inert,
        vision,
        {
            plugin: hapiSwagger,
            options: {
                info: {
                    title: 'API Documentation',
                    version: '1.0',
                },
                swaggerUIPath: '/api/docs',
                documentationPath: '/api/docs',
            },
        },
    ]);

    server.route({
        method: 'GET',
        path: '/api/todos',
        handler: getAllRequest,
        options: {
            description: 'Get all todos.',
            tags: ['api'],
        },
    });

    server.route({
        method: 'POST',
        path: '/api/todo',
        handler: postRequest,
        options: {
            description: 'Create a new todo.',
            tags: ['api'],
        },
    });

    server.route({
        method: 'PATCH',
        path: '/api/todo/{id}',
        handler: patchRequest,
        options: {
            description: 'Edit a todo.',
            tags: ['api'],
        },
    });

    server.route({
        method: 'DELETE',
        path: '/api/todo/{id}',
        handler: deleteRequest,
        options: {
            description: 'Delete a todo.',
            tags: ['api'],
        },
    });

    return server;
};
