function mycode() {
    alert ("Bro its mine");
}





function add(a,b){

    document.write("Sum of the Two Numbers  ",a+b)


}





function show(a){
    document.write ("Welcome to my page Mr    ", a);

}


function Numbers(a){
    document.write ("This is Your all numbers is " , a );
   
}
// Sum of all array

function findsum(arr){
   var  sum = 0
    for (a= 0 ; a < arr.length ; a++){
        sum += arr[a];


    }
    document.write(`The Sum of the array ${arr} is ${sum}`);
}