const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')


describe('Home page', () => {
    it('should return a HTML welcome message', async () => {
        const res = await request(app)
            .get('/home')

        expect(res.statusCode).equals(200)
        expect(res.text).to.equal('<html><body><p>Welcome</p></body></html>')
    })
})