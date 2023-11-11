import logger from './modules/logger.js';

import pg from './database/database.js';

/**
 * Inserts data into the 'todos' table.
 *
 * @param {Object} data - The data to be inserted.
 * @return {Promise<void>} A promise that resolves when the data is insertet.
 */
const insertData = async (data) => {
    try {
        await pg('todos').insert(data);
        logger.info('data inserted successfully');
    } catch (error) {
        logger.error('error inserting data >', error);
    } finally {
        pg.destroy();
    }
};

//const data = { state: 'INCOMPLETE', description: 'test value' };
//insertData(data);

/**
 * Retrieves all rows from the 'todos' table.
 *
 * @return {Promise<object>} An array of rows from the 'todos' table.
 */
const listRows = async () => {
    try {
        const rows = await pg('todos').select('*');
        logger.info('rows >', rows);
    } catch (error) {
        logger.error('error listing rows >', error);
    } finally {
        pg.destroy();
    }
};

listRows();

/**
 * Deletes a row by its ID.
 *
 * @param {number} id - The ID of the row to be deleted.
 * @return {Promise<void>} - A Promise that resolves when the row is deleted.
 */
const deleteRowById = async (id) => {
    try {
        await pg('todos').where('id', id).del();
        logger.log('row deleted successfully');
    } catch (error) {
        logger.error('error deleting row >', error);
    } finally {
        pg.destroy();
    }
};

//deleteRowById(1);

/**
 * Updates a row in the 'todos' table with the specified id.
 *
 * @param {number} id - The id of the row to be updated.
 * @param {object} data - The new data to update the row with.
 * @return {Promise<void>} A promise that resolves when is data updated.
 */
const editRowById = async (id, data) => {
    try {
        await pg('todos').where('id', id).update(data);
        logger.log('row updated successfully');
    } catch (error) {
        logger.error('Error updating row >', error);
    } finally {
        pg.destroy();
    }
};

//const id = 2;
//const data = { state: 'INCOMPLETE', description: 'edited value' };

//editRowById(id, data);

/**
 * Updates the timestamp of a specific record in the 'todos' table.
 *
 * @param {number} id - The ID of the record to update.
 * @param {object} data - The data to update the record with.
 * @return {Promise<void>} - A promise that resolves when the state and timestamp is updated.
 */
const updateTimestamp = async (id, data) => {
    try {
        await pg('todos').where('id', id).update(data);
        logger.log('row updated successfully');
    } catch (error) {
        logger.error('error updating timestamp >', error);
    } finally {
        pg.destroy();
    }
};

//const id = 2;
//const data = { state: 'COMPLETE', completed_at: pg.fn.now() };

//updateTimestamp(id, data);
