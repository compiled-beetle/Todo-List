import logger from '../../modules/logger.js';

import pg from '../../database/database.js';

/**
 * Retrieves all data from the database.
 *
 * @return {Promise<any>} An array of todos with the following properties:
 * - id: The unique identifier of the todo.
 * - state: The state of the todo.
 * - description: The description of the todo.
 * - created_at: The timestamp when the todo was created.
 * - completed_at: The timestamp when the todo was completed.
 *
 * Returns false if no rows are found.
 */
export const listAllData = async () => {
    let todos = [];

    try {
        const rows = await pg('todos').select('*');

        if (rows.length === 0) {
            logger.info('no rows found');
            return false;
        } else {
            rows.forEach((row) => {
                todos.push({
                    id: row.id,
                    state: row.state,
                    description: row.description,
                    created_at: row.created_at,
                    completed_at: row.completed_at,
                });
            });
        }
        logger.info('rows >', rows);
    } catch (error) {
        logger.error('error listing rows >', error);
    } finally {
        pg.destroy();
    }
    return todos;
};
