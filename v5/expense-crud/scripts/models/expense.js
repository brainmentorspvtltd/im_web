//Data Model
/*
function createExpense(id, name, price, color, date, remarks){
    // literal
const expenseObject = {
   id, name, price, color, date, remarks
};
return expenseObject;
}*/
// ES6 Class
class Expense{
    constructor(id , name , price, color, date, remarks){
        this.id = id;
    this.name = name;
    this.price = price;

    this.date = date;
    this.color = color;
    this.remarks = remarks;
    this.markForDelete = false;
    }

    toggleMark(){
        this.markForDelete = !this.markForDelete;
    }
}

// function constructor
/*
function Expense(id , name , price, color, date, remarks){
    this.id = id;
    this.name = name;
    this.price = price;

    this.date = date;
    this.color = color;
    this.remarks = remarks;
    this.markForDelete = false;
}
Expense.prototype.toggleMark = function(){
    this.markForDelete = !this.markForDelete;
}
*/