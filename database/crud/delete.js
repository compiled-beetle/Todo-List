import logger from '../../modules/logger.js';

import pg from '../../database/database.js';

/**
 * Deletes data by its ID.
 *
 * @param {number} id - The ID of the row to be deleted.
 * @return {Promise<void>} - A Promise that resolves when the row is deleted.
 */
export const deleteDataById = async (id) => {
    try {
        await pg('todos').where('id', id).del();
        logger.info('row deleted successfully');
    } catch (error) {
        logger.error('error deleting row >', error);
    } finally {
        pg.destroy();
    }
};

export default deleteDataById;
