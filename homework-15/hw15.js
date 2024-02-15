class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResidents(person) {
        this.residents.push(person)
    }
}

class House {
    constructor(maxApartments) {
        this.maxApartments = maxApartments;
    }

    apartments = [];

    addApartments(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment)
        } else {
            console.log('Sorry, it is not possible to add another apartment! The maximum number is filled ')
        }
    }
}

const person1 = new Human('Alex', 'male')
const person2 = new Human('Victoria', 'female')
const person3 = new Human('Svitlana', 'female')

const apartment1 = new Apartment()
const apartment2 = new Apartment()
const apartment3 = new Apartment()

apartment1.addResidents(person1)
apartment2.addResidents(person2)
apartment3.addResidents(person3)

const house = new House(2)

house.addApartments(apartment1)
house.addApartments(apartment2)
house.addApartments(apartment3)

console.log(house)
