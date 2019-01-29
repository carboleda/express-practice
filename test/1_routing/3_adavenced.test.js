const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const { server } = require('../../config/config.test.json');

describe('Enrutamiento avanzado con express', function() {
    const environment = {
        user: {
            id: 1,
            name: "Carlos Arboleda",
            email: "arbofercho@gamil.com"
        }
    };

    it('Prueba que se obtienen todos los usuarios', function(done) {
        chai.request(server)
            .get('/routing/advanced/users')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.should.have.lengthOf(10);
                done();
            });
    });

    it('Prueba que se obtiene el usuario por id', function(done) {
        chai.request(server)
            .get(`/routing/advanced/users/${environment.user.id}`)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.have.property('id', environment.user.id);
                done();
            });
    });

    it('Prueba que el usuario fue actualizado', function(done) {
        chai.request(server)
            .patch(`/routing/advanced/users/${environment.user.id}`)
            .send(environment.user)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('name', environment.user.name);
                expect(res.body).to.have.property('phone');
                done();
            });
    });

    it('Prueba que se suba la imagen', function(done) {
        chai.request(server)
            .post('/routing/advanced/upload')
            .attach('image', `${__dirname}/logomark.png`, 'logomark.png')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('OK');

                chai.request(server)
                .get('/public/images/logomark.png')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
            });
    });
});