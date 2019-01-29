const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Middlewares con express', function(){
    it('Prueba que el middleware basico esté configurado', function(done) {
        chai.request(server)
            .get('/routing/basic/text')
            .end(function(err, res) {
                const resHeaders = res.request.req.res.headers;
                expect(res).to.have.status(200);
                expect(resHeaders).to.have.property('set-cookie');
                assert.isAtLeast(Object.keys(resHeaders).length, 1);
                assert.isArray(resHeaders['set-cookie']);
                assert.match(resHeaders['set-cookie'], /devhack\.com/);
                done();
            })
    });
});