/*

let person1 = {
    name : 'nasir',
    age :23,
}

function Person(name,age,city,course){
    this.name = name
    this.age = age
    this.city = city
    this.course =course
}


class Student{
    #name;
    #age;
    #city;
    #course;
    #gender;
    #institute;

    constructor (name,age,city,gender,course){
        this.#name = name
        this.#age = age
        this.#city = city
        this.#course =course
        this.#gender = gender
        this.#institute = 'SMIT'

    }

    get name(){
        return this.#name
    }

    set name(new_name){
        if (new_name==='hamza'){
            console.log(`You can have not a name ${new_name}`)
        }
        else{
            this.#name = new_name
        }

        
    }


}


s1 = new Student('asad',23,'Lahore','Male','AI')
s2 = new Student('rehan',23,'Lahore','Male','AI')
s3 = new Student('sana',23,'Lahore','Male','AI')


*/




// ?Employeee Tracking App

class employeeapp{
//  We Create Constructor and declare object names 
    constructor(fname,lname ,num_of_years){
        this.fname = fname 
        this.lname = lname
        this.num_of_years = num_of_years
        this.company = "EGrow"
    }
    // their we create a fuction to show values in one time
    emp_details (){
        console.log(`
        Employee Name is :  ${this.fname} ${this.lname}
        Experience is:       ${this.num_of_years}
        Company is :          ${this.company}
        `)
        };
    }
    

    // We create a empty array to sotore data 

let employe = [] ;

e1 = new employeeapp ("Atif " , "Zeb" , 10)
e2 = new employeeapp ("Atif " , "khan" , 30)
e3= new employeeapp ("Atif " , "Alam" , 20)



// we push the data to in array
employe.push(e1);
employe.push(e2);
employe.push(e3);

for (let i = 0; i < employe.length; i++) {

if (employe[i].num_of_years <= 20) {
    employe[i].emp_details();
}
}











// Menu items price calculator



