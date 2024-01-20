// class BankAccount{

//     constructor(account_number, account_holder_name,balance){
//         this.account_number =account_number
//         this.account_holder_name = account_holder_name
//         this.balance = balance
//     }
//     deposit(amt){

//         this.balance = this.balance + amt
//         alert("Yaqin rakhen apk pasie Allah ki qasam apk me chaly gaye hen")

//     }
//     withdraw(amt){
//         if (this.balance < amt){
//             alert("In sufficient Balance")
//         }
//         else{
//         this.balance = this.balance - amt
//         }
//     }
//     transfer(beneficiary_acc, amt){

//         for(let a=0; a<accounts.length;a++){

//             if (accounts[a].account_number === beneficiary_acc){
//                 accounts[a].balance = accounts[a].balance + amt
//                 this.balance = this.balance-amt

//                 alert("Amt transfres successfuly")
//             }

//         }

//     }
//     balance(){

//         console.log(`Your account balance is ${this.balance} `)
//     }

// }

// acc1 = new BankAccount(1001, 'nasir', 10000)
// acc2 = new BankAccount(1002, 'hussain', 10000)
// acc3 = new BankAccount(1003, 'ali', 10000)

// var accounts = []
// accounts.push(acc1,acc2,acc3)





class Bank {
    constructor(Account_holder_Name  , Account_Number  , Balance){

        this.Account_holder_Name = Account_holder_Name
        this.Account_Number = Account_Number
        this.Balance = Balance


    }
    deposite(amount){
        this.Balance = this.Balance + amount
        alert("Bhai kar ley yaqeen hogya hai bsss")
    }
    withdraw(amount){
        if(this.Balance < amount){
            alert("Bhai Kuch Paise tau daal dei")
        }
        else{
            this.Balance = this.Balance - amount
        }
    }

    transfer(beneficiary_account, amount) {
        for (let a = 0; a < accounts.length; a++) {
            if (accounts[a].Account_Number === beneficiary_account) {
                accounts[a].Balance += amount; // Use += for assignment
                this.Balance -= amount; // Deduct the transferred amount from the sender's account
                alert("Transfer successful!");
                return;
            }
        }
        alert("Beneficiary account not found!");
    }
    

    balance(){

        console.log(`Your Balance is ${this.Balance}`)

    }
}



acc1  = new Bank ("Atif ", "123212" , 10000)
acc2  = new Bank ("Atif Alam ", "123212" , 20000)
acc3  = new Bank ("Atif Zeb", "123212" , 30000)


var accounts = []
accounts.push(acc1, acc2 , acc3)