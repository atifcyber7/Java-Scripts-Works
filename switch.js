// This is a simple swtich example 


let day_of_week = prompt("Enter the day of week").toLowerCase();

switch (day_of_week){
    case  'monday':
        
        alert ("Gym chest day ")
        break
    case  "tuesday" : 
        alert ("Wings Day")
        break
    case  'wednesday': 
        console.log ("Tricep")
         break
    case 'thursday' : 
         console.log ('Shoulder')
         break
    case "friday"   :
        console.log("Namaz day")
         break
    case 'saturday' :
        console.log ("Back Day")
        break
    case "sunday":
        console.log("Cheet day")
        break
    default :
        console.log ("Invalid Input")

}



// and or example in switch 

let day_we = prompt("Enter the day of week").toLowerCase();
switch (true){

    case day_we === "monday" || day_we === "mon" :
        alert("Gym Chest day");
        break;
    case day_we === "tuesday " || day_we === "tues" :
        alert("Wings Day")
        break
    case day_we === "wednesday" || day_we === "wednes" :
        alert("Biecep Day")
        break 
    case day_we == "thursday"   || day_we == "thur":
        alert ("Triecep Day")
        break 
    case day_we == "friday"   || day_we == "fri" :
        alert ("Namaz")
        break
    case day_we == "saturday" || day_we == "satr" :
      alert ("Back Day")
         break

     case day_we == "sunday "  || day_we == "sun" :
         alert ("Cheet day")
         break
    default :
    alert ("Invalid Input")
    

}









// Grade Checking using Switch

let per = prompt("Enter Your Marks Here ")

switch (true){
    case per >= 90 && per <= 100:
        alert ("Your Grade is A+")
        break 
    case per >= 80 && per <= 89: 
        alert ("Your Grade is A")
         break
        
    case per >= 70 && per <= 79: 
       alert ("Your Grade is B")
        break
    case per >= 60 && per <69 : 
        alert ("Your Grade is C")
        break
    case per >= 50 && per <= 59 :
        alert ("Your Grade is E")
        break
    
    case per <= 50 :
        alert ("You are Fail")
        break 
    default :
     alert ("Invalid Input")


}

