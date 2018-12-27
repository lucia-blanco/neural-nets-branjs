////////// FIRST EXAMPLE /////////////////
/* const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
];

  // In train, it does:
  // Forward propagation -> predicts what it'll need
  // Backward propagation -> measures the error and learns 

net.train(trainingData, {
    // log: (error) => console.log(error),
    // logPeriod: 100
  }
);

console.log(net.run([0,0]));
console.log(net.run([0,1]));
console.log(net.run([1,0]));
console.log(net.run([1,1]));*/


/////// WORKING WITH OBJECTS //////////
/* const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

const colors = [
  { green: 0.2, blue: 0.4 },
  { green: 0.4, blue: 0.6 },
  { red: 0.2, green: 0.8, blue: 0.8 },
  { green: 1, blue: 1 },
  { red: 0.8, green: 1, blue: 1 },
  { red: 1, green: 1, blue: 1 },
  { red: 1, green: 0.8, blue: 0.8 },
  { red: 1, green: 0.6, blue: 0.6 },
  { red: 1, green: 0.4, blue: 0.4 },
  { red: 1, green: 0.31, blue: 0.31 },
  { red: 0.8 },
  { red: 0.6, green: 0.2, blue: 0.2 }
];

const brightnesses = [
  { dark: 0.8 },
  { neutral: 0.8 },
  { light: 0.7 },
  { light: 0.8 },
  { light: 0.9 },
  { light: 1 },
  { light: 0.8 },
  { neutral: 0.7, light: 0.5 },
  { dark: 0.5, neutral: 0.5 },
  { dark: 0.6, neutral: 0.3 },
  { dark: 0.85 },
  { dark: 0.9 }
];

const trainingData = []

colors.forEach((color, index) => {
  trainingData.push({
    input: color,
    output: brightnesses[index]
  });
});

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({
  red: 0.9
})); */

////////////// MORE THAN NUMBERS //////////////
const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

const restaurants = {
  "Brilliant Yellow Corral": "Monday",
  "Penny’s": "Tuesday",
  "Right Coast Wings": "Wednesday",
  "The Delusion Last Railway Car": "Thursday",
  "Fun Day Inn": "Friday",
  "JHOP": "Saturday",
  "Owls": "Sunday"
};

const trainingData = [];

// isn't this for loop the coolest???
for (let restaurantName in restaurants) {
  const dayOfWeek = restaurants[restaurantName];
  trainingData.push({
    input: { [dayOfWeek]: 1},
    output: { [restaurantName]: 1 }
  })
}

const stats = net.train(trainingData);

console.log(stats);

// this asociates a likelyhood to each restaurant
/*console.log(net.run({
  'Wednesday': 1
}));*/

// to get the name of the restaurant:
function restaurantForDay(dayOfWeek) {
  const result = net.run({ [dayOfWeek]: 1 });
  console.log(result);
  let highestValue = 0;
  let highestRestaurantName = '';

  for( let restaurantName in result) {
    if (result[restaurantName] > highestValue) {
      highestValue = result[restaurantName];
      highestRestaurantName = restaurantName;
    }
  }
  return highestRestaurantName;
}

console.log(restaurantForDay('Monday'));
