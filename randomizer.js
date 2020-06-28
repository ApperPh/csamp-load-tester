'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');
const baseBookingLong = 14;
const baseBookingLat = 121;

const baseTargetLong = 14;
const baseTargetLat = 120;

function generateRandomData(userContext, events, done) {
  const email = Faker.internet.exampleEmail();
  userContext.vars.randomRiderId = uuidv4();
  
  userContext.vars.randomBookingLocN = (baseBookingLong + Math.random()).toString().substring(0, 9);
  userContext.vars.randomBookingLocW = (baseBookingLat + Math.random()).toString().substring(0, 9);
  
  userContext.vars.randomTargetLocN = (baseTargetLong + Math.random()).toString().substring(0, 9);
  userContext.vars.randomTargetLocW = (baseTargetLat + Math.random()).toString().substring(0, 9);

  return done();
}
