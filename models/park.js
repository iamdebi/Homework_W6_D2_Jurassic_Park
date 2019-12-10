const Dinosaur = require("./dinosaur.js");

const Park = function(name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

// Add a dinosaur to its collection of dinosaurs
Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};
// Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDinosaur = function(dinosaur) {
  dinoIndex = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinoIndex, 1);
};
// Find the dinosaur that attracts the most visitors

Park.prototype.popular = function() {
  let sortedDinosaurs = this.dinosaurs.sort(
    (dinosaur1, dinosaur2) =>
      dinosaur2.guestsAttractedPerDay - dinosaur1.guestsAttractedPerDay
  );

  let popularDinosaur = sortedDinosaurs[0];

  return popularDinosaur;
};

// Find all dinosaurs of a particular species
Park.prototype.findBySpecies = function(dinoSpecies) {
  const foundDinoArray = [];
  const DinoArray = this.dinosaurs.filter(dinosaur => dinosaur.species);
  for (const dinosaur of DinoArray) {
    if (dinosaur.species === dinoSpecies) {
      foundDinoArray.push(dinosaur);
    }
  }
  return foundDinoArray;
};

// Calculate the total number of visitors per day
Park.prototype.totalVistors = function() {
  let total = 0;
  for (dinosaur of this.dinosaurs) total += dinosaur.guestsAttractedPerDay;
  return total;
};

// Calculate the total number of visitors per year
Park.prototype.totalVistorsYear = function() {
  let dayTotal = this.totalVistors();
  const total = dayTotal * 365;
  return total;
};

// Calculate the total revenue from ticket sales for one year
Park.prototype.yearTakenings = function() {
  let yearVisotors = this.totalVistorsYear();
  const total = yearVisotors * this.ticketPrice;
  return total;
};

module.exports = Park;
