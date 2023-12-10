let person = {

    age  : 23 ,
    contact  : 12343,
     name : "Atif Zeb ",
     gender : "Male"


}
// Accessing Object Properties
// console.log(person.gender)
// console.log(person['age'])


// update object property
person.contact = "03489783283"
person.age = 34


// delete object property

delete person.age
console.log(person)

// Adding a new property

person.profession = "Cyber Analyst"
person.nationality = "Pakistani"


// print objects properites using for loop
for(key in person)

{
    console.log(`${key} :  ${person[key]}`)
}


let attack = {
    type_of_attack : "Ransomware",
    System_affected : "Two System",
    Time_of_attack : "9 PM"


}
console.log(attack)



// for (key in attack){

//     console.log(`${key} :  : ${attack[key]}`)

// }




for (key in attack){

    if(key !="type_of_attack")

    console.log(`${key} :  : ${attack[key]}`)

}







let patient1 = {p_id : 1 , p_name : "Ali" , age : 21 , dr_name : "Bali" ,disease : "Cancer"}
let patient2 = {p_id : 2 , p_name : "Ali Jan" , age : 24 , dr_name : "Babu",disease : "flu"}
let patient3 = {p_id : 3 , p_name : "Atif" , age : 50 , dr_name : "Basit",disease : "HCV"}
let patient4 = {p_id : 4, p_name : "Akram" , age : 65 , dr_name : "kasim",disease : "TB"}
let patient5 = {p_id : 5 , p_name : "Ahmad" , age : 41 , dr_name : "dawood",disease : "flu"}
let patient6 = {p_id : 6 , p_name : "adada" , age : 51 , dr_name : "saud",disease : "flu"}
let patient7 = {p_id : 7 , p_name : "Ajmal" , age : 61 , dr_name : "kako",disease : "thaipaides"}
let patient8 = {p_id : 8 , p_name : "Asif" , age : 93 , dr_name : "jawad",disease : "flu"}


let patient = [patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8]


// for (let a=0 ; a< patient.length; a++){
//     for (key in patient[a])


// {
//     if (key == 'disease'){
//         if (patient[a][key]=='flu'){

//             console.log(patient[a]['p_name'])
//         }
//     }
// }
// }



for (let a=0 ; a< patient.length; a++){
    for (key in patient[a])


{
    if (key == 'disease'){
        if (patient[a][key]=='Cancer'){

            console.log(patient[a]['dr_name'])
        }
    }
}
}