class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getPerson() {
        console.log(this.name, this.age)
    }
}

const person1 = new Person('Alex', 23)
const person2 = new Person('Tom', 17)

person1.getPerson()
person2.getPerson()

class Car {
    constructor(brand, model, years, sign) {
        this.brand = brand;
        this.model = model;
        this.years = years;
        this.sign = sign;
    }

    getOwner(person) {
        if (person.age >= 18) {
            console.log(`${person.name} is owner this car!`)
            return person.name
        } else {
            console.log(`${person.name} can't be owner car!`)
        }
    }

    getCar(person) {
        console.log(this.brand, this.model, this.years, this.sign, `Owner: ${this.getOwner(person)}`)
    }
}

class Car1 extends Car {
    constructor(brand, model, years, sign) {
        super(brand, model, years, sign);
        this.owner = this.getOwner(person1)
    }
}

class Car2 extends Car {
    constructor(brand, model, years, sign) {
        super(brand, model, years, sign);
        this.owner = this.getOwner(person2)
    }
}

const car1 = new Car1('BMW', 'x5', 2015, 'KA 0180 CO')
const car2 = new Car2('Mercedes-Benz ', 'GLE-Class', 2022, 'AO 2404 HP')

console.log(car1)
console.log(car2)

car1.getCar(person1)
car2.getCar(person2)