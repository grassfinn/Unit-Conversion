const number = document.querySelector('#number-to-convert');
const feetEl = document.querySelector('#feet');
const gallonsEl = document.querySelector('#gallons');
const poundsEl = document.querySelector('#pounds');

const metersEl = document.querySelector('#meters');
const litersEl = document.querySelector('#liters');
const kilosEl = document.querySelector('#kilos');
const conversion = 20;
number.textContent = conversion;

// FORMULAS
//  f -> m =  F / 3.281
const feetToMeters = (conversion / 3.281).toFixed(3);
//  P -> K = p / 2.205
const poundsToKilo = (conversion / 2.205).toFixed(3);
// G -> L = G / 3.785
const gallonsToLiters = (conversion / 3.785).toFixed(3);
// M -> F = M * 3.281
const metersToFeet = (conversion * 3.281).toFixed(3);
// K -> P = K * 2.205
const kilosToPounds = (conversion * 2.205).toFixed(3);
// L -> G = L * 3.785
const litersToGallons = (conversion * 3.785).toFixed(3);

feetEl.textContent = ` ${conversion} feet = ${feetToMeters}`;

gallonsEl.textContent = ` ${conversion} gallons = ${gallonsToLiters}`;

poundsEl.textContent = ` ${conversion} pounds = ${poundsToKilo}`;

metersEl.textContent = `${conversion} meters = ${metersToFeet} `

litersEl.textContent = `${conversion} liters = ${litersToGallons} `

kilosEl.textContent = `${conversion} kilograms = ${kilosToPounds} `

