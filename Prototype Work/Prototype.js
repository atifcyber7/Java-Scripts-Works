function Person(name,age,gender,cnic){
    this.name =name,
    this.age = age,
    this.gender=gender,
    this.cnic=cnic
}


let p1 = new Person('kaleemullah',23,'male','12345')
let p2 = new Person('Nasir',30,'male','456235')


function Plan(name, price, space, transfer, pages, discountMonths) 
{
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;

    }

Plan.prototype.calcAnnual = function() 
{
var bestPrice = this.price;
var currDate = new Date();
var thisMo = currDate.getMonth()+1;

    for (var i = 0; i < this.discountMonths.length; i++) 
    {
        if (this.discountMonths[i] === thisMo) 
            {
            bestPrice = this.price * .80;
            break;
            }
    }
    return bestPrice * 12;
};

myPlan = new Plan('Advance',99.99,1000,5000,500,[6,12])
apkaPlan = new Plan('Basic',50.99,100,500,50,[1,6,12])


function Last_Name() {
    if (document.getElementById("Last Name").value.length === 0) {
        alert("Please Enter Your Last Name");
        return false;
        // The alert will be displayed if the last name is not entered.
    }
    
    // This line always returns false, indicating that the form should not be submitted.
}
