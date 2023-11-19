let name = "Atif Zeb";
let profession = "Cyber Security Analyst";
let age = 22;
let height = 5.9;

console.log(profession);

let instu = prompt("Enter Your Institute name")
let std_name = prompt ("Enter Student Name ")
let score = Number(prompt("ENter score in html"))
let s2 = Number(prompt("Enter score in css"))
let js_sc = Number(prompt("Enter Score i js "))
let rec_sc = Number(prompt("Enter Score i js "))
let py_sc = Number(prompt("Enter Score i js "))

let obt = score + s2 +js_sc+rec_sc+py_sc
let percn = obt / 500 * 100
var grade = ""

if (percn >= 90){
    grade = "A +"
}
else if (percn>=80){
    grade = "A"

}
else if (percn>=70){
    grade = "b"

}
else if (percn>=60){
    grade = "C"

}
else if (percn>=50){
    grade = "D"

}
else{
    grade = "Fail hai tau bhai"
}



// alert ("You Obatined  "+ obt +" \n Your grade is "+ grade + "\n Your percentage is  "+ percn ) 

alert(`#################### ${instu}############
 Student Name ${std_name}
 You Obatained Marks ${obt}
 Your Grade is  ${grade}
 Your Percentage is ${percn} `
    
)