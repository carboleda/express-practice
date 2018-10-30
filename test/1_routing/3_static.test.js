const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Enable static directory with express', function(){
    it('Test that public/index.html can be accessed', function(done) {
        chai.request(server)
            .get('/public/index.html')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            })
    });

    it('Test that public/index.html has the correct headers', function(done) {
        chai.request(server)
            .get('/public/index.html')
            .end(function(err, res) {
                expect(res.headers).to.have.property('x-powered-by', 'devhack.com');
                done();
            })
    });
});