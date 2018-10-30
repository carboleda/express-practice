const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Basic routing with express', function(){
    it('Test that Hello express text is answered', function(done) {
        chai.request(server)
            .get('/routing/basic/text')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello express');
                done();
            })
    });

    it('Test that Hello express json is answered', function(done) {
        chai.request(server)
            .get('/routing/basic/json')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('hello', 'express');
                //expect(res.body).to.have.hello('expresss');
                done();
            })
    });
});