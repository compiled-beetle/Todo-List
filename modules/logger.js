import dotenv from 'dotenv';
dotenv.config();

const env = process.env.ENVIRONMENT;

/**
 * Logs an information to the console.
 *
 * @optios {.info, .error, .warning}
 * @param {string} message - The message to be logged.
 * @param {...*} params - Additional parameters to be logged.
 *
 * Returns nothing.
 */
export const logger = {
    info: (message, ...params) => {
        const formattedParams = params.map((param) =>
            typeof param === 'object' ? JSON.stringify(param, null, 2) : param
        );
        env === 'dev' ? console.log(`INFO >> ${message}`, ...formattedParams) : null;
    },

    error: (message, ...params) => {
        const formattedParams = params.map((param) =>
            typeof param === 'object' ? JSON.stringify(param, null, 2) : param
        );
        env === 'dev' ? console.error(`ERROR >> ${message}`, ...formattedParams) : null;
    },

    warning: (message, ...params) => {
        const formattedParams = params.map((param) =>
            typeof param === 'object' ? JSON.stringify(param, null, 2) : param
        );
        env === 'dev' ? console.warn(`WARNING >> ${message}`, ...formattedParams) : null;
    },
};

export default logger;
