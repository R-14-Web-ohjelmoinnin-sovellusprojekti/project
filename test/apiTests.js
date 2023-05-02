const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Create user Tests', function () {

    describe('POST /register', function () {
        it('should create new user', function (done) {

            // send http reguest

            chai.request('http://localhost:8080')
                .post('/register')
                .type('form')
                .send({
                    uname: 'pöllö',
                    pw: '1234'
                })
                .end(function (err, res) {
                    expect(err).to.be.null;
                    // check response staus
                    expect(res).to.have.status(200);
                    done();
                })
        })
    })
})

describe('Login Tests', function () {

    describe('POST /login', function () {
        it('should log in', function (done) {

            // send http reguest

            chai.request('http://localhost:8080')
                .post('/login')
                .type('form')
                .send({
                    uname: 'pöllö',
                    pw: '1234'
                })
                .end(function (err, res) {
                    expect(err).to.be.null;
                    // check response staus
                    expect(res).to.have.status(200);
                    done();
                })
        })
    })
})

describe('Delete user Tests', function () {

    describe('DELETE /delete/user', function () {
        it('should delete user', function (done) {

            // send http reguest

            chai.request('http://localhost:8080')
                .delete('/delete/user/testi2')
                //.type('form')
                //.send({ uname: 'testi2' })
                .end(function (err, res) {
                    expect(err).to.be.null;
                    // check response staus
                    expect(res).to.have.status(200);
                    done();
                })
        })
    })
})