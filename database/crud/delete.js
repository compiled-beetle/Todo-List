import logger from '../../modules/logger.js';

import pg from '../../database/database.js';

/**
 * Deletes data from the 'todos' table by the given ID.
 *
 * @param {number} id - The ID of the data to be deleted.
 * @return {Promise<boolean>} Returns true if the data was deleted successfully, false otherwise.
 */
export const deleteDataById = async (id) => {
    try {
        const result = await pg('todos').where('id', id);
        if (result.length === 0) {
            logger.info('row not found');
            return false;
        } else {
            await pg('todos').where('id', id).del();
            logger.info('row deleted successfully');
        }
    } catch (error) {
        logger.error('error deleting row >', error);
        return false;
    } finally {
        pg.destroy();
    }
    return true;
};

export default deleteDataById;
