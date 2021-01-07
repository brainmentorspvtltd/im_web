// DOM , BOM

window.addEventListener('DOMContentLoaded',init);
//window.addEventListener('DOMContentLoaded',bindEvents);
//window.addEventListener('load',bindEvents);
function bindEvents(){
    document.getElementById('add').addEventListener('click',addExpense);
}

function init(){
    getCount();
    bindEvents();
}

const getCount=()=>document.querySelector('#total').innerText= expenseOperations.getExpenses().length;


//document.getElementById('add').addEventListener('click',addExpense);
function addExpense(){
    // DOM
    //var id = document.getElementById('id').value;
    // # id
    // . class
    // attribute input[type='text']
    //document.querySelectorAll('button')
    // var id = document.querySelector('#id').value;
    // var name = document.getElementById('name').value;
    // var price = document.getElementById('price').value;
    // var date = document.getElementById('date').value;
    // var color = document.getElementById('color').value;
    // var remarks = document.getElementById('remarks').value;
    var expenseObject = expenseOperations.getObject();

    for(let key in expenseObject){
        expenseObject[key] =  document.querySelector(`#${key}`).value;
    }
    expenseOperations.add(expenseObject);
    printExpenses();
    getCount();

}

function printExpenses(){
    var tbody = document.getElementById('expenses');
    tbody.innerHTML='';
    var expenses = expenseOperations.getExpenses();
    expenses.forEach(expense => printRow(expense));
}
function createIcon(path, fn){
    var img = document.createElement('img');
    //img.src = 'assets/images/trash.png';
    img.src = path;
    img.className = 'size';
    img.addEventListener('click',fn);
    return img;
}

function edit(){
    console.log('Edit Click');
}

function markDelete(){
    console.log('Delete Click');
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
    let td = tr.insertCell(index);
    td.appendChild(createIcon(config.paths.trash, markDelete));
    td.appendChild(createIcon(config.paths.edit, edit));
    // var td = tr.insertCell(0);
    // td.innerText = 1001;
}