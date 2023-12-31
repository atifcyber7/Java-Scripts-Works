/*


// There we create a simple function


function  great_user(){
    console.log("Welcome to SMIT")
}
// and we call there function because without calling function will not b work
great_user()


// we cannot create functions with same name because the called overide function ..
// Function with parameters

function  user(username){
    console.log(`welcome to ${username}`)

}

user("ATIF")




function check_value(a,b)
{
    if (a > b){
        console.log("A is greater than B")
    }
    else{
        if (b>a){
        console.log("B is greater than A")
        }
        else{
            console.log(" Both are equal")
        }
    }
}

check_value(10,10)





function User_Info(weight,height){
    if (weight <= 0 || height <= 0){
        console.log("Your value is invalid ")

    }

    bmi = weight / (height ** 2)

    return bmi
}
    let weight_kg = (parseFloat(prompt("Please enter weight in kg")))
    let height_m = (parseFloat(prompt("enter height in Ft")))/3.3


    console.log(User_Info(weight_kg,height_m))



    



    //  calculate BMi using function



    function obsec_cal(weight,height)
{
    bmi = weight / (height **2)
    if (bmi>=40){
        return "Obses"
    }
    else if (bmi >= 25 && bmi<40)
    {
        return "over weight"

    }
    else if (bmi>= 18.5 && bmi < 25)
    {
        return "Normal"
    }
    else{
         return " under weight"
    }

    
    
}
let weight_kg = (parseFloat(prompt("Please enter weight in kg")))
    let height_m = (parseFloat(prompt("enter height in Ft")))/3.3

    console.log(`Dear sir you are ${obsec_cal(weight_kg,height_m)}`)*/


function salary_calculator(salary) {
    let taxAmount;

    if (salary > 100000) {
        taxAmount = salary * 0.15;
    } else if (salary > 70000) {
        taxAmount = salary * 0.10;
    } else if (salary > 50000) {
        taxAmount = salary * 0.05;
    }

    return taxAmount;
}

const salary = 80000;
const tax = salary_calculator(salary);

console.log(`Tax for a salary of $${salary.toLocaleString()} is $${tax.toFixed(2)}`);

  





