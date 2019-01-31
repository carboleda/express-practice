const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Enrutamiento basico con express', function(){
    it('Prueba que se responde el texto Hello express', function(done) {
        chai.request(server)
            .get('/routing/basic/text')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello express');
                done();
            })
    });

    it('Prueba que se responde un json {hello: "express"}', function(done) {
        chai.request(server)
            .get('/routing/basic/json')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('hello', 'express');
                //expect(res.body).to.have.hello('expresss');
                done();
            })
    });

    it('Prueba que se responde la suma de a y b', function(done) {
        chai.request(server)
            .get('/routing/basic/query?a=10&b=35')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.text).equal('45');
                done();
            })
    });
});