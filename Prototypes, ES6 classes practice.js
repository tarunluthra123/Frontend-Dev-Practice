class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class TimeLord extends Person {
    constructor(name, age, regenerations) {
        super(name, age)
        this.regenerations = regenerations
    }
}

let doctor = new TimeLord('Doctor', 2000, 13)
let pond = new Person('Amy Pond', 23)
let river = new TimeLord('River Song', 200, 3)

console.log(doctor)
console.log(pond)
console.log(river)