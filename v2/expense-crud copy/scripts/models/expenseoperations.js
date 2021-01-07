// CRUD
// namespace , singleton
const expenseOperations = {
    // add:function(){}
    expenses:[],
    add(id, name, price, color, date, remarks){
      var expenseObject = new Expense(id,name,price,color,date,remarks);
      this.expenses.push(expenseObject);
      console.log('Expense Added ',this.expenses);
    },
    getExpenses(){
        return this.expenses;
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

