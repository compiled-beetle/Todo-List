const env = process.env.ENVIRONMENT;

/**
 * Logger prints to console.
 *
 * @options .info .error .warning
 * @param {string} message - String to be printed.
 *
 * Logger cannot recive variables.
 */
const logger = {
    info: (message) => {

        env === 'dev' ? console.log(`INFO >> ${message}`) : null;
    },

    error: (message) => {

        env === 'dev' ? console.error(`ERROR >> ${message}`) : null;
    },

    warning: (message) => {

        env === 'dev' ? console.warn(`WARNING >> ${message}`) : null;
    }
};

module.exports = logger;
