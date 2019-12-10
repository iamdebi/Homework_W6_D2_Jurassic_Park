// beforeEach when const or let before name undefined?

const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

// A name
// A ticket price
// A collection of dinosaurs

describe("Park", function() {
  beforeEach(function() {
    rex = new Dinosaur("t-rex", "carnivore", 50);
    dippy = new Dinosaur("diplodocus", "herbivore", 70);
    arlo = new Dinosaur("apatosaurus", "herbivore", 80);
    downpour = new Dinosaur("pterodactyl", "carnivore", 60);
  });

  beforeEach(function() {
    park = new Park("Jurassic Park", 5, [dippy, arlo, downpour]);
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
    expected = [dippy, arlo, downpour];
    // assert
    // assert.equal(true, false);
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to add a dinosaur to its collection", function() {
    // act
    park.addDinosaur(rex);
    actual = park.dinosaurs;
    expected = [dippy, arlo, downpour, rex];
    // assert
    // assert.equal(true, false);
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to remove a dinosaur from its collection", function() {
    // act
    park.removeDinosaur(dippy);
    actual = park.dinosaurs;
    expected = [arlo, downpour];
    // assert
    // assert.equal(true, false);
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function() {
    // act
    actual = park.popular();
    expected = arlo;
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to find all dinosaurs of a particular species", function() {
    // act
    actual = park.findBySpecies("apatosaurus");
    expected = [arlo];
    // assert
    // assert.equal(true, false);
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to calculate the total number of visitors per day", function() {
    // act
    actual = park.totalVistors();
    expected = 210;
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to calculate the total number of visitors per year", function() {
    // act
    actual = park.totalVistorsYear();
    expected = 210 * 365;
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });

  it("should be able to calculate total revenue for one year", function() {
    // act
    actual = park.yearTakenings();
    expected = 383250;
    // assert
    // assert.equal(true, false);
    assert.strictEqual(actual, expected);
  });
});
