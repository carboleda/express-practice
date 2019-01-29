const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Habilitar directorio estatico con express', function(){
    it('Prueba que public/index.html puede ser accesado', function(done) {
        chai.request(server)
            .get('/public/index.html')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Prueba que public/index.html tiene los headers correctos', function(done) {
        chai.request(server)
            .get('/public/index.html')
            .end(function(err, res) {
                expect(res.headers).to.have.property('x-powered-by', 'devhack.com');
                done();
            });
    });
});