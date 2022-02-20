const firstName = ["Super", "Mega", "Duper", "Cold", "Hero"];

const secondName = ["Duper", "Warmer", "King Edition", "Budget", "Anti fog"];

class Heater {
  constructor(id) {
    this.id = id;
    this.name = getName();
    this.price = getPrice(4000, 30000);
    this.installationCost = getPrice(4000, 30000);
    this.total = this.price + this.installationCost;
  }
}

const getPrice = (min, max) => {
  return Math.round((Math.floor(Math.random() * max) + min) / 1000) * 1000;
};

const getName = () => {
  const first = firstName[Math.floor(Math.random() * firstName.length)];
  const second = secondName[Math.floor(Math.random() * secondName.length)];

  return `${first} ${second} ${Math.floor(Math.random() * 500) + 1}`;
};

const test = {
  data: [],
};

for (let index = 1; index <= 100; index++) {
  const product = new Heater(index);
  test.data.push(product);
}

module.exports = test;
