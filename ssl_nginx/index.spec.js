const supertest = require("supertest")
const { app, server } = require('./index.js')

describe('App', () => {
  describe('GET /', () => {
    it("should respond 'Deu bom :)'", async () => {
      await supertest(app)
        .get('/')
        .expect(200)
        .then((res) => {
          expect(res.text).toBe('Deu bom :)')
        })
    })
  })

  afterAll((done) => {
    server.close(done);
  })
})
