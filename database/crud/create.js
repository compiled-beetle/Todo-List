import logger from '../../modules/logger.js';

import pg from '../../database/database.js';

/**
 * Inserts data into the 'todos' table.
 *
 * @param {Object} data - The data to be inserted.
 * @return {Promise<void>} A promise that resolves when the data is insertet.
 */
export const insertData = async (data) => {
    try {
        await pg('todos').insert(data);
        logger.info('data inserted successfully');
    } catch (error) {
        logger.error('error inserting data >', error);
    } finally {
        pg.destroy();
    }
};
