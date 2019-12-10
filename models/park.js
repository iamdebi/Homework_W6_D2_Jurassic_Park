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

// Park.prototype.popular = function() {
//   for (const dinosaur of this.dinosaurs) {
//     const visitArray = dinosaur.guestsAttractedPerDay.sort();
//     let popularDino = visitArray.shift();
//   }
//   return popularDino;
// };

// Park.prototype.popular = function() {
//   this.dinosaurs.map(dinosaur => {
//     const visitArray = dinosaur.guestsAttractedPerDay.sort();
//     let popularDino = visitArray.shift();
//   });
//   return popularDino;
// };

// Find all dinosaurs of a particular species

// Calculate the total number of visitors per day

// Calculate the total number of visitors per year

// Calculate the total revenue from ticket sales for one year

module.exports = Park;
