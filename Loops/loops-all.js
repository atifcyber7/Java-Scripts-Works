

// in this loop we cannot add continue dishes in for loop

/*let dishes = []

for (let a=0;a<=5;a++){
fav_dsh= prompt("Tell me your fvrt dish name or press q to quit")
if(fav_dsh!='q'){
dishes.push(fav_dsh)
}
else{
    break
}
}
console.log(dishes)*/




// in there we break the loop first we define counter = 0 now the value is zero
// then we set the value less than 10 
// then we use multiple sterks for every value power 
// we use counter ++ for this to increment a value from 0 to 1 from 1 to 2 until loop terminate 
// when the square value greater than 50 then the loop will be terminate 
/*counter = 0   
while (counter <10){
    square = counter**2
    if(square>50)
    {
        break
    }
    else {
        console.log(square)
        counter++
    }
} */



// another example 

/*counter = 0   
while (counter <10){
    counter +=2
    square = counter**2
    if(square>50)
    {
        break
    }
    else {
        console.log(square)
        
    }
}*/






// in there we  create  a list 
dishes = []
// flag we use for true or false mean continue or break the loop 
flag = true 

// in there our loop is true
while (flag)

{
    dish_name= prompt("Enter Dish name or Press q to quit ")
    if (dish_name!=  'q')
    {
        dishes.push(dish_name)

    }
    else{
        flag =  false
    }



}
console.log(dishes)