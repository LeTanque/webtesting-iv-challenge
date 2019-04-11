const db = require('../knexConfig.js');
const Users = require('./router.js');


describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', () => {
        it('should insert the provided users', async () => {
            await Users.insert({ username: 'tank' });
            await Users.insert({ username: 'glaston' });
            await Users.insert({ username: 'theory' });
            const users = await db('users');
            expect(users).toHaveLength(3);
        });

        it('should insert the provided users', async () => {
            let users = await Users.insert({ username: 'tank' });
            expect(users.username).toBe('tank');

            users = await Users.insert({ username: 'sam' });
            expect(users.username).toBe('sam');
        });
    });
});

