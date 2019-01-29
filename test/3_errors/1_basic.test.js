const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Mandejo de errors con express', function(){
    it('Prueba que el estatus 404 es manejado con Boom', function(done) {
        chai.request(server)
            .get('/this/route/not/exist')
            .end(function(err, res) {
                expect(res).to.have.status(404);
                assert.isObject(res.body);
                expect(res.body).to.have.property('isBoom', true);
                done();
            })
    });

    it('Prueba que el estatus 500 es manejado con Boom', function(done) {
        chai.request(server)
            .get('/purpose/error')
            .end(function(err, res) {
                expect(res).to.have.status(500);
                assert.isObject(res.body);
                expect(res.body).to.have.property('isBoom', true);
                done();
            })
    });
});