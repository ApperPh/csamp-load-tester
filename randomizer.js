'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  const email = Faker.internet.exampleEmail();
  userContext.vars.randomRiderId = uuidv4();

  return done();
}
