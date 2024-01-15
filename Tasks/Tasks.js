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
