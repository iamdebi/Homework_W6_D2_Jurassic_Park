const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

// A name
// A ticket price
// A collection of dinosaurs

describe("Park", function() {
  beforeEach(function() {
    park = new Park("Jurassic Park", 5, ["Dippy", "Arlo", "Downpour"]);
  });

  it("should have a name", function() {
    // act
    actual = park.name;
    expected = "Jurassic Park";
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should have a ticket price", function() {
    // act
    actual = park.ticketPrice;
    expected = 5;
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should have a collection of dinosaurs", function() {
    // act
    actual = park.dinosaurs;
    expected = ["Dippy", "Arlo", "Downpour"];
    // assert
    // assert.equal(true, false);
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to add a dinosaur to its collection", function() {
    // act
    park.addDinosaur("Rex");
    actual = park.dinosaurs;
    expected = ["Rex"];
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to remove a dinosaur from its collection", function() {
    // act
    park.removeDinosaur("Dippy");
    actual = park.dinosaurs;
    expected = ["Arlo", "Downpour"];
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function() {
    // act
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to find all dinosaurs of a particular species", function() {
    // act
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to calculate the total number of visitors per day", function() {
    // act
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to calculate the total number of visitors per year", function() {
    // act
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to calculate total revenue for one year", function() {
    // act
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });
});
