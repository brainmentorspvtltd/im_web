// DOM , BOM


window.addEventListener('DOMContentLoaded',bindEvents);
//window.addEventListener('load',bindEvents);
function bindEvents(){
    document.getElementById('add').addEventListener('click',addExpense);
}

//document.getElementById('add').addEventListener('click',addExpense);
function addExpense(){
    // DOM
    //var id = document.getElementById('id').value;
    // # id
    // . class
    // attribute input[type='text']
    //document.querySelectorAll('button')
    var id = document.querySelector('#id').value;
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var date = document.getElementById('date').value;
    var color = document.getElementById('color').value;
    var remarks = document.getElementById('remarks').value;
    expenseOperations.add(id, name, price,color,date,remarks);
    printExpenses();

}

function printExpenses(){
    var tbody = document.getElementById('expenses');
    tbody.innerHTML='';
    var expenses = expenseOperations.getExpenses();
    expenses.forEach(expense => printRow(expense));
}
function printRow(expense){
    var tbody = document.getElementById('expenses');

    var tr = tbody.insertRow();
    // object traverse
    var index = 0;
    for(let key in expense){
        let td = tr.insertCell(index);
        td.innerText = expense[key];
        index++;
    }
    // var td = tr.insertCell(0);
    // td.innerText = 1001;
}