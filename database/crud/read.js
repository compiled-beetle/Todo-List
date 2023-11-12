import logger from '../../modules/logger.js';

import pg from '../../database/database.js';

/**
 * Retrieves all data from the 'todos' table.
 *
 * @return {Promise<object>} An array of rows from the 'todos' table.
 */
export const listAllData = async () => {
    try {
        const rows = await pg('todos').select('*');
        logger.info('rows >', rows);
    } catch (error) {
        logger.error('error listing rows >', error);
    } finally {
        pg.destroy();
    }
};
