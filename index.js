// api app server
import { apiServer } from './api/server.js';

const startServer = async () => {
    const server = await apiServer();
    await server.start();
    console.log('uri %s', server.info.uri);
};

startServer();
