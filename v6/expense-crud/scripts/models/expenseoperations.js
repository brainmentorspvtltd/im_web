// CRUD
// namespace , singleton
const expenseOperations = {
    // add:function(){}
    expenses:[],
    // add(id, name, price, color, date, remarks){
    //   var expenseObject = new Expense(id,name,price,color,date,remarks);
    //   this.expenses.push(expenseObject);
    //   console.log('Expense Added ',this.expenses);
    // },
    add(expenseObject){
        this.expenses.push(expenseObject);
    },
    markForDelete(currentId){
        var expenseObject = this.expenses.find(expense=>expense.id == currentId);
        if(expenseObject){
            expenseObject.toggleMark();
            //expenseObject.markForDelete = !expenseObject.markForDelete;
        }
    },
    getExpenses(){
        return this.expenses;
    },
    getObject(){
        return new Expense();
    },

    remove(){
        this.expenses = this.expenses.filter(expense=>!expense.markForDelete);
    },
    search(){

    },
    update(){

    },
    sort(){

    },
    totalCount(){
            return this.expenses.length;
    },
    countMark(){
        return this.expenses.filter(expense=>expense.markForDelete).length;
    }

}

