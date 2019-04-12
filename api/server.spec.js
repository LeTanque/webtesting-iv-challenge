const request = require('supertest');
const server = require('./server.js');


describe('server.js', () => {
    describe('GET /', () => {
        it('should respond with 200 OK', () => {
            return request(server)
            .get('/')
            .then(response => {
                expect(response.status).toBe(200);
            })
        })
    })

    describe('DELETE /users/:id', () => {
        it('should respond with 204 OK', async () => {
            const response = await request(server).delete('/users/:id');
            expect(response.status).toBe(204);
        })
    })

    describe('POST /users', () => {
        it('should respond with 400 (no username supplied)', async () => {
            const response = await request(server).post('/users');
            expect(response.status).toBe(400);
        })
    })

})

