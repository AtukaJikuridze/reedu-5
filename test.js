// 1) ფუნქცია რომელიც ითვლის უკუსვლით 0-მდე
function countdown(sec) {
  let interval = setInterval(() => {
    console.log(sec);
    sec--;
    if (sec < 0) {
      clearInterval(interval);
      console.log("Done!");
    }
  }, 1000);
}

// 2) ფუნქცია - რიცხვს გადაცემ და until დაემთხვევა random-ს
function matchRandom(num) {
  let rand;
  do {
    rand = Math.floor(Math.random() * 10) + 1; // 1-10
    console.log("Random:", rand);
  } while (rand !== num);
  console.log("Matched:", num);
}

// 3) ფუნქცია n და callback-ით
function checkNumber(n, callback) {
  if (n > 27) {
    callback();
  } else {
    console.log(`${n} ნაკლებია ან ტოლია 27`);
  }
}

// 4) API-დან მომხმარებლების წამოღება
function getUsersThen() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data.slice(0, 4)))
    .catch((err) => console.error("Error:", err));
}

// with async/await
async function getUsersAsync() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data.slice(0, 4));
  } catch (err) {
    console.error("Error:", err);
  }
}

// 5) reduce - 10-ზე მეტი და 20-ზე ნაკლები ასაკები
let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 },
];

let groupedByAge = people.reduce(
  (acc, person) => {
    if (person.age > 10 && person.age < 20) {
      acc.between10And20.push(person);
    } else {
      acc.others.push(person);
    }
    return acc;
  },
  { between10And20: [], others: [] }
);

console.log(groupedByAge);

// 6) ორი რიცხვი და callback
function compareNumbers(a, b, callback) {
  if (a > b) {
    callback();
    console.log("მეტია");
  } else {
    console.log("ნაკლები ან ტოლია");
  }
}

// 7) reduce - პროდუქტის დაჯგუფება ფასის მიხედვით
let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 },
];

let groupedProducts = products.reduce(
  (acc, product) => {
    if (product.price > 20) {
      acc.moreThan20.push(product);
    } else {
      acc.lessOrEqual20.push(product);
    }
    return acc;
  },
  { moreThan20: [], lessOrEqual20: [] }
);

console.log(groupedProducts);
