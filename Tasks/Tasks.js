// Tasks in java scripts with OOP (Object oriented programming)



// 1. Write a JavaScript program to create a class called "Person" with properties
// for name, age and country. Include a method to display the person's details.
// Create two instances of the 'Person' class and display their details.



class person {
    constructor(name , age , country){

        this.name = name
        this.age = age
        this.country = country ; 
       
    }
    person_deatils(){
        console.log(`Name is : ${this.name}, Age is : ${this.age}, Country is  : ${this.country}`)
    }


   

}


p1 = new person ("Nasir Husaain" , 35 , "Pakistan");
p2 = new person ("Atif Zeb" , 22 , "Saudi Arabia");
p3 = new person ("Hassan Ali" , 28 , "Iraq");
p1.person_deatils();
p2.person_deatils();
p3.person_deatils();










// 2. Write a JavaScript program to create a class called 'Rectangle' with properties
// for width and height. Include two methods to calculate rectangle area and
// perimeter. Create an instance of the 'Rectangle' class and calculate its area and
// perimeter.



class Rectangle {
    constructor(width , height ){

        this.width = width 
        this.height  = height

    }

    calculate_area(){
        return this.width * this.height
    }
    calculate_peramter(){
        return 2 * (this.width + this.height)
    }
}


v1  = new Rectangle ( 17 , 18);

area = v1.calculate_area();
preimter = v1.calculate_peramter();


console.log(`The total area is : ${area}`);
console.log(`The total peramter is : ${preimter}`);








// Write a JavaScript program that creates a class called 'Vehicle' with properties
// for make, model, and year. Include a method to display vehicle details. Create a
// subclass called 'Car' that inherits from the 'Vehicle' class and includes an
// additional property for the number of doors. Override the display method to
// include the number of doors.





class vehicle {
    constructor(make , model , year){

        this.make  = make 
        this.model = model
        this.year  = year

    }
    display_deatils(){
        console.log(`Make is : ${this.make} , Model is :  ${this.model} , Release year is ${this.year} `)
    }
}

class car extends vehicle {
    constructor (make , model , year , num_of_doors){

        super(make , model , year)
        this.num_of_doors = num_of_doors
    }
    display_deatils(){
        super.display_deatils();
        console.log(`The num of doors is ${this.num_of_doors}`)
    }
}

vheicle_one = new vehicle ( "Toyta" , "V8" , 2018);

console.log("Vehicle deatils ")
vheicle_one.display_deatils();


car_one = new car ("Toyta" , "Civic" , 2022 , 4 );
console.log ("Car Deatils")
car_one.display_deatils();




// 4. Write a JavaScript program that creates a class called "BankAccount" with
// properties for account number and balance. Include methods to deposit and
// withdraw money from the account. Create some instances of the "BankAccount"
// class, deposit some money, and withdraw a portion of it.





class BankAccount{
    constructor(account_number , balance){

        this.account_number = account_number
        this.balance = balance 


    }
    deposit (amount){
        if (amount > 0 ){
            this.balance += amount ;
            console.log(`Deposited ${amount} , New Balance is : ${this.balance}`)

        }
        else{
            console.log("Please deposit a valid amount")
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`withdraw is ${amount} , Your new balance is : ${this.balance}`)
        }
    }
}



my_account = new BankAccount ("1234532" , 4000)

my_account.deposit(200);
my_account.withdraw(300);





// Write a JavaScript program that creates a class called 'Shape' with a method
// to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit
// from the 'Shape' class and override the area calculation method. Create an
// instance of the 'Circle' class and calculate its area. Similarly, do the same for the
// 'Triangle' class.




class shape {
    constructor(){
        this.type = "Shape";

    }
    area (){
        return 0 ;
    }



}
class circle extends shape {
        constructor(radius){
            super();
            this.type = "circle"
            this.radius = radius;
        }
        area(){
            return Math.PI * this.radius ** 2 ;

        }
}

class Triangle extends shape {
    constructor (base ,height){
        super ();
        this.type = "Triangle"
        this.base = base
        this.height = height

    }
    area (){
        return 0.5 * this.base * this.height;
    }
}



circle_instance = new circle (5)
console.log(`Area of Circle : ${circle_instance.area().toFixed(2)}`);

triangle_instance = new Triangle (4,6)
console.log(`Area of the Triangle ${triangle_instance.area().toFixed(2)}`);




// Write a JavaScript program that creates a class called 'Employee' with
// properties for name and salary. Include a method to calculate annual salary.
// Create a subclass called 'Manager' that inherits from the 'Employee' class and
// adds an additional property for department. Override the annual salary
// calculation method to include bonuses for managers. Create two instances of the
// 'Manager' class and calculate their annual salary.




class Employee {
      constructor (name , salary){
        this.name = name
        this.salary = salary


      }
      calculate_Annual (){
        return this.salary * 12;
      }
}

class Manager extends Employee{
    constructor(name , salary , department){

        super (name , salary)
        this.department = department ; 

    }
    calculate_Annual (){
       const bouns =  0.1 * this.salary ;
        return super.calculate_Annual()+ bouns;
    }
}


per1 = new Manager ("Nasir Husaain" , 90000 , "Finance ")
per2 = new Manager ("Atif Zeb" , 200000 , "Security and PT")

console.log(`Name is ${per1.name}  Annual Salary is $${per1.calculate_Annual().toFixed(2)}`);
console.log(`Name is ${per2.name} Annual Salary is $${per2.calculate_Annual().toFixed(2)}`);