import logger from './modules/logger.js';

import pg from './database/database.js';

async function insertData() {
    try {
        await pg('todos').insert({ state: 'INCOMPLETE', description: 'test value' });
        logger.info('data inserted successfully');
    } catch (error) {
        logger.error('error inserting data >', error);
    } finally {
        pg.destroy();
    }
}

//insertData();

async function listRows() {
    try {
        const rows = await pg('todos').select('*');
        logger.info('rows >', rows);
    } catch (error) {
        logger.error('error listing rows >', error);
    } finally {
        pg.destroy();
    }
}

listRows();

async function deleteRowById(id) {
    try {
        await pg('todos').where('id', id).del();
        logger.log('row deleted successfully');
    } catch (error) {
        logger.error('error deleting row >', error);
    } finally {
        pg.destroy();
    }
}

//deleteRowById(1);

async function editRowById(id, newData) {
    try {
        await pg('todos').where('id', id).update(newData);
        logger.log('row updated successfully');
    } catch (error) {
        logger.error('Error updating row >', error);
    } finally {
        pg.destroy();
    }
}

//const id = 2;
//const newData = { state: 'INCOMPLETE', description: 'edited value' };

//editRowById(id, newData);

async function updateTimestamp(id, newData) {
    try {
        await pg('todos').where('id', id).update(newData);
        logger.log('row updated successfully');
    } catch (error) {
        logger.error('error updating timestamp >', error);
    } finally {
        pg.destroy();
    }
}

//const id = 2;
//const newData = { state: 'COMPLETE', completed_at: pg.fn.now() };

//updateTimestamp(id, newData);
