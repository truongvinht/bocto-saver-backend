// apiResponse.js
// Response data for api request.
// ==================

/**
 * API Response object for request response.
 */
 class ApiResponse {
    /**
     * Constructor for initializing api Response
     * @constructor
     * @param {number} code - HTTP Response Code
     */
    constructor (code) {
        this.code = code;
    }

    /**
     * Return HTTP Response Code
     * @return {number} response code
     */
    getHttpCode () {
        return this.code;
    }

    /**
     * Return HTTP Response Message
     * @return {number} response message
     */
    getMessage () {
        switch (this.code) {
        case 400:
            return 'Bad Request';
        case 401:
            return 'Unauthorized';
        case 403:
            return 'Forbidden';
        case 404:
            return 'Not Found';
        case 500:
            return 'Internal server error';
        default:
            return `Undefined Error: ${this.code}`;
        }
    }

    /**
     * Return Long HTTP Response Message
     * @return {number} response message
     */
    getLongMessage () {
        switch (this.code) {
        case 400:
            return 'Bad Request (400)';
        case 401:
            return 'Unauthorized access (401)';
        case 403:
            return 'Forbidden: No credentials sent! (403)';
        case 404:
            return 'Ressource not Found (404)';
        case 500:
            return 'Internal server error (500)';
        default:
            return `Undefined Error: ${this.code}`;
        }
    }
};

module.exports = ApiResponse;
