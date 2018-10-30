const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Advanced routing with express', function() {
    const environment = {
        user: {
            id: 1,
            name: "Carlos Arboleda",
            email: "arbofercho@gamil.com"
        }
    };

    it('Test getting all users', function(done) {
        chai.request(server)
            .get('/routing/advanced/users')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.should.have.lengthOf(10);
                done();
            })
    });

    it('Test getting a user by id', function(done) {
        chai.request(server)
            .get(`/routing/advanced/users/${environment.user.id}`)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.have.property('id', environment.user.id);
                done();
            })
    });

    it('Test that user was patched', function(done) {
        chai.request(server)
            .patch(`/routing/advanced/users/${environment.user.id}`)
            .send(environment.user)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('name', environment.user.name);
                expect(res.body).to.have.property('phone');
                done();
            })
    });
});