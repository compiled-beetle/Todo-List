import logger from '../../modules/logger.js';

import pg from '../../database/database.js';

/**
 * Updates data in the 'todos' table with the specified id.
 *
 * @param {number} id - The id of the row to be updated.
 * @param {object} data - The new data to update the row with.
 * @return {Promise<void>} A promise that resolves when is data updated.
 */
export const editDataById = async (id, data) => {
    try {
        await pg('todos').where('id', id).update(data);
        logger.info('row updated successfully');
    } catch (error) {
        logger.error('error updating row >', error);
    } finally {
        pg.destroy();
    }
};

/**
 * Updates the timestamp of a specific record in the 'todos' table.
 *
 * @param {number} id - The ID of the record to update.
 * @param {object} data - The data to update the record with.
 * @return {Promise<void>} - A promise that resolves when the state and timestamp is updated.
 */
export const updateDataTimestampById = async (id, data) => {
    try {
        await pg('todos').where('id', id).update(data);
        logger.info('row updated successfully');
    } catch (error) {
        logger.error('error updating timestamp >', error);
    } finally {
        pg.destroy();
    }
};
