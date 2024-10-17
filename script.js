// Complete the js code
// Define the Car constructor
function Car(make, model) {
	this.make = make;
	this.model = model;
}

// Define a method on the Car prototype
Car.prototype.getMakeModel = function() {
	return this.make + " " + this.model;
}

// Define the SportsCar constructor
function SportsCar(make, model, topSpeed) {
	// Call the parent constructor (Car) with the context of the current object
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
}

// Inherit the Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Define a method on the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
