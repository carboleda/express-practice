const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Errors handlers with express', function(){
    it('Test that status 404 is handled with Boom', function(done) {
        chai.request(server)
            .get('/this/route/not/exist')
            .end(function(err, res) {
                expect(res).to.have.status(404);
                assert.isObject(res.body);
                expect(res.body).to.have.property('isBoom', true);
                done();
            })
    });

    it('Test that status 500 is handled with Boom', function(done) {
        chai.request(server)
            .get('/routing/basic/error')
            .end(function(err, res) {
                expect(res).to.have.status(500);
                assert.isObject(res.body);
                expect(res.body).to.have.property('isBoom', true);
                done();
            })
    });
});