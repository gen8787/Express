const faker = require('faker');

class User {
    constructor() {
        this._id = faker.random.number(),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.phoneNumber(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this._id = faker.random.number(),
        this.name = faker.company.companyName(),
        this.address = new Address()
    }
}

class Address {
    constructor() {
        this.street = faker.address.streetAddress(),
        this.city = faker.address.city(),
        this.state = faker.address.state(),
        this.zipCode = faker.address.zipCode(),
        this.country = faker.address.country()
    }
}

module.exports = {
    newUser: (req,res) => {
        res.json({user: new User()});
    },

    newCompany: (req,res) => {
        res.json({company: new Company()});
    },

    newUserCompany: (req,res) => {
        res.json({user: new User(), company: new Company()});
    }   
}