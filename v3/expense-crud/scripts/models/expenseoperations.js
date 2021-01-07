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
    getExpenses(){
        return this.expenses;
    },
    getObject(){
        return new Expense();
    },

    remove(){

    },
    search(){

    },
    update(){

    },
    sort(){

    },
    totalCount(){

    },
    countMark(){

    }

}

