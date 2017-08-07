const expect = require("chai").expect;
const request = require('request');

const URL = 'http://localhost:3000/api/stadiums'
// const URL =

describe("Stadium", function() {
  var apiError, apiResponse, apiBody;
  before(function(done) {
    request(URL, function(error, response, body) {
      apiError = error;
      apiResponse = response;
      apiBody = body;
      done();
    });
  });
  it("should return 200 - OK", function() {
    expect(apiResponse.statusCode).to.eq(200);
  });

  it("should have a title in the array of stadiums", function() {
    if (typeof(apiBody) == "string") {
      apiBody = JSON.parse(apiBody);
    }
    console.log(apiBody[0].title);
    expect(apiBody[0].title).to.not.be.empty;
  });
});
