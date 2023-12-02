// *************** Array works  *****************

let students = ['Atif Zeb','Arshad ','Ali '," Umar"]
// indecing/index      0         1         2       3
alert(students[0])
alert(students[1])


// String Properties
console.log(students[0].length)
console.log(students[1].toLowerCase())



// Array Propreties
console.log(students.length)
console.log(students.concat(['usama','khan']))
students.push("Jawad")
students.pop([1])






// More Work


let txt= prompt("Enter Your Text Here")


alert(`Your Total charchter is ${txt.length}, Your Total words is ${txt.split("").length}`)
