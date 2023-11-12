import logger from '../../modules/logger.js';

import pg from '../../database/database.js';

/**
 * Edits data in the "todos" table by id.
 *
 * @param {number} id - The id of the data to edit.
 * @param {object} data - The updated data to save.
 * @return {Promise<boolean>} Returns true if the data was edited successfully, otherwise false.
 */
export const editDataById = async (id, data) => {
    data.state === 'COMPLETE' ? (data = { ...data, completed_at: pg.fn.now() }) : void 0;

    try {
        const result = await pg('todos').where('id', id);

        if (result.length === 0) {
            logger.info('row not found');
            return false;
        } else if (result[0].state === 'COMPLETE') {
            logger.info('row cannot be updated');
            return false;
        } else {
            await pg('todos').where('id', id).update(data);
            logger.info('row updated successfully');
        }
    } catch (error) {
        logger.error('error updating row >', error);
        return false;
    } finally {
        pg.destroy();
    }
    return true;
};

/**
 * Update the state and timestamp of data by its ID.
 *
 * @param {number} id - The ID of the data.
 * @return {Promise<boolean>} Returns true if the data is successfully updated, false otherwise.
 */
export const updateDataTimestampById = async (id) => {
    const data = { state: 'COMPLETE', completed_at: pg.fn.now() };

    try {
        const result = await pg('todos').where('id', id);

        if (result.length === 0) {
            logger.info('row not found');
            return false;
        } else if (result[0].state === 'COMPLETE') {
            logger.info('row cannot be updated');
            return false;
        } else {
            await pg('todos').where('id', id).update(data);
            logger.info('row updated successfully');
        }
    } catch (error) {
        logger.error('error updating timestamp >', error);
        return false;
    } finally {
        pg.destroy();
    }
    return true;
};
