import logger from '../../modules/logger.js';

import pg from '../../database/database.js';

/**
 * Inserts data into the 'todos' table.
 *
 * @param {Object} data - The data to be inserted.
 * @return {Promise<any>} The inserted data or false if an error occurred.
 */
export const insertData = async (data) => {
    data = { ...data, state: 'INCOMPLETE' };

    try {
        const result = await pg('todos').insert(data).returning('*');
        logger.info('data inserted successfully');
        return result;
    } catch (error) {
        logger.error('error inserting data >', error);
        return false;
    } finally {
        // caousing issues
        //pg.destroy();
    }
};
