const assert = require("assert");
const Dinosaur = require("../models/dinosaur.js");

describe("Dinosaur", function() {
  let dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur("t-rex", "carnivore", 50);
    dippy = new Dinosaur("diplodocus", "herbivore", 70);
    arlo = new Dinosaur("apatosaurus", "herbivore", 80);
    downpour = new Dinosaur("pterodactyl", "carnivore", 60);
  });

  it("should have a species", function() {
    const actual = dinosaur.species;
    assert.strictEqual(actual, "t-rex");
  });

  it("should have a diet", function() {
    const actual = dinosaur.diet;
    assert.strictEqual(actual, "carnivore");
  });

  it("should have an average number of visitors it attracts per day", function() {
    const actual = dinosaur.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });
});
