class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    console.log(this.rate * this.days);
  }
}

class Cat {
  constructor(petName, breed, weight, ownerName) {
    this.petname = petName;
    this.breed = breed;
    this.weight = weight;
    this.ownerName = ownerName;
  }
}

const createClass = () => {
  let catInfo = document.querySelectorAll(".input");
  let cat = new Cat(
    catInfo[0].value,
    catInfo[1].value,
    catInfo[2].value,
    catInfo[3].value
  );

  console.log(cat);
};

class Calculator {
  static sum() {
    return `Result: ${
      Number(prompt("First number")) + Number(prompt("Second number"))
    }`;
  }
  static minus() {
    return `Result: ${
      Number(prompt("First number")) - Number(prompt("Second number"))
    }`;
  }
  static multyply() {
    return `Result: ${
      Number(prompt("First number")) * Number(prompt("Second number"))
    }`;
  }
  static divide() {
    return `Result: ${
      Number(prompt("First number")) / Number(prompt("Second number"))
    }`;
  }
}

const emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const domainFormat = new RegExp(
  /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/
);
const dateFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
const phoneFormat = /^((\+7|7|8)+([0-9]){10})$/;
class ValidatorStatic {
  isEmail(str) {
    return emailFormat.test(str) ? true : false;
  }
  isDomain(str) {
    return domainFormat.test(str) ? true : false;
  }
  isDate(str) {
    return dateFormat.test(str) ? true : false;
  }
  isPhone(str) {
    return phoneFormat.test(str) ? true : false;
  }
}
let validator = new ValidatorStatic();
