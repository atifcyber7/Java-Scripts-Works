class Person {
    constructor(name , age ,country){
        this.name = name 
        this.age = age
        this.country = country


    }

    person_deatils(){
        console.log(`the name is ${this.name} Age is ${this.age} Country is ${this.country}`)
    }
}

p1 = new Person ("Atif Zeb " , 22,"Pakistan")
p2 = new Person ("Alam zeb" , 58 , "Pakistan")


p1.person_deatils()
p2.person_deatils()