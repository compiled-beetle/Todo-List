// database crud
import {
    insertData,
    listAllData,
    editDataById,
    updateDataTimestampById,
    deleteDataById,
} from './database/crud/_index.js';

// api app server
import { apiServer } from './api/server.js';

const startServer = async () => {
    const server = await apiServer();
    await server.start();
    console.log('uri %s', server.info.uri);
};

startServer();

//const rs = await deleteDataById(12);

//const id = 11;

//updateDataTimestampById(id);
