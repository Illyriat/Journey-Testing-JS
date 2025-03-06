const Journey = require("./journey");

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  // const getJourneysByMinDistance = this.journeys.filter((journey) => {
    //   return journey.distance > minDistance;
    // });
    // return getJourneysByMinDistance;
    return this.journeys.filter((journey) => journey.distance > minDistance);
  };

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // map. get all transport returned in an array.
  const transports = this.journeys.map((journey) => journey.transport);
  ///
  const uniqueTransportTypes = transports.filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  });
  return uniqueTransportTypes;
};


module.exports = Traveller;
