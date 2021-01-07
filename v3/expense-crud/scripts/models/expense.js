//Data Model
/*
function createExpense(id, name, price, color, date, remarks){
    // literal
const expenseObject = {
   id, name, price, color, date, remarks
};
return expenseObject;
}*/
// function constructor
function Expense(id , name , price, color, date, remarks){
    this.id = id;
    this.name = name;
    this.price = price;

    this.date = date;
    this.color = color;
    this.remarks = remarks;
}