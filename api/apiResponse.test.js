// location.test.js
// Testing location api
// ================

const ApiResponse = require('./apiResponse');

it('test api response 400', () => {
    const code = 400;
    const response = new ApiResponse(code); 

    expect(response.getHttpCode()).toBe(code);
    expect(response.getMessage()).toBe('Bad Request');
    expect(response.getLongMessage()).toBe('Bad Request (400)');
});

it('test api response 401', () => {
    const code = 401;
    const response = new ApiResponse(code); 

    expect(response.getHttpCode()).toBe(code);
    expect(response.getMessage()).toBe('Unauthorized');
    expect(response.getLongMessage()).toBe('Unauthorized access (401)');
});

it('test api response 403', () => {
    const code = 403;
    const response = new ApiResponse(code); 

    expect(response.getHttpCode()).toBe(code);
    expect(response.getMessage()).toBe('Forbidden');
    expect(response.getLongMessage()).toBe('Forbidden: No credentials sent! (403)');
});

it('test api response 404', () => {
    const code = 404;
    const response = new ApiResponse(code); 

    expect(response.getHttpCode()).toBe(code);
    expect(response.getMessage()).toBe('Not Found');
    expect(response.getLongMessage()).toBe('Ressource not Found (404)');
});

it('test api response 500', () => {
    const code = 500;
    const response = new ApiResponse(code); 

    expect(response.getHttpCode()).toBe(code);
    expect(response.getMessage()).toBe('Internal server error');
    expect(response.getLongMessage()).toBe('Internal server error (500)');
});

it('test api response 501', () => {
    const code = 501;
    const response = new ApiResponse(code); 

    expect(response.getHttpCode()).toBe(code);
    expect(response.getMessage()).toBe(`Undefined Error: ${code}`);
    expect(response.getLongMessage()).toBe(`Undefined Error: ${code}`);
});

