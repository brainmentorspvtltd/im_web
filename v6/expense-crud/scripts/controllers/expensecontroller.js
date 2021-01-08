// DOM , BOM

window.addEventListener('DOMContentLoaded',init);
//window.addEventListener('DOMContentLoaded',bindEvents);
//window.addEventListener('load',bindEvents);
function bindEvents(){
    document.querySelector('#loadfromserver').addEventListener('click',loadFromServer);
    document.querySelector('#load').addEventListener('click',loadData);
    document.querySelector('#save').addEventListener('click',saveData);
    document.querySelector('#delete').addEventListener('click',deleteForEver);
    document.getElementById('add').addEventListener('click',addExpense);
}

function loadFromServer(){
    var pr = doAjax();
    pr.then(response=>response.json().then(data=>console.log(data)).catch(e=>console.log('Invalid JSOn '))).catch(err=>console.log(err));
    // Print same like loadData Logic
}

function loadData(){
    //sessionStorage;
    if(window.localStorage){
        if(localStorage.mydata){
            var arr = JSON.parse(localStorage.mydata);
            expenseOperations.expenses = [];
            console.log('Data is ',arr);
            var expenseArr = arr.map(obj=>{
                let exp = new Expense(obj.id, obj.name,obj.price,obj.color, obj.date,obj.remarks);
                expenseOperations.add(exp);
            });
            printExpenses();
            getCount();
            //expenseOperations.expenses = obj;
        }
        else{
            alert('No Data in Storage...');
        }
    }
    else{
        alert("Old Browser");
    }
}

function saveData(){
    var expenseArray = expenseOperations.getExpenses();
    var json = JSON.stringify(expenseArray);
    localStorage.mydata = json;
    alert('Data Saved...');
}

function deleteForEver(){
    expenseOperations.remove();
    printExpenses();
    getCount();
}

function init(){
    getCount();
    bindEvents();
}

const getCount=()=>{
    document.querySelector('#total').innerText= expenseOperations.totalCount();
    document.querySelector('#mark').innerText= expenseOperations.countMark();
    document.querySelector('#unmark').innerText= expenseOperations.totalCount() - expenseOperations.countMark();

}


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
        if(key=='markForDelete'){
            continue;
        }
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
function createIcon(path, fn, id){
    var img = document.createElement('img');
    //img.src = 'assets/images/trash.png';
    img.setAttribute('expid',id);
    img.src = path;
    img.className = 'icon';
    img.addEventListener('click',fn);  // img.fn() // img.markDelete()
    return img;
}

function edit(){
    console.log('Edit Click');
}

function markDelete(){
    var currentImage = this;
    console.log('Delete Click ',currentImage);
    var currentId  = currentImage.getAttribute('expid');
    expenseOperations.markForDelete(currentId);
    var tr = currentImage.parentNode.parentNode;
    //tr.className = 'red';
    tr.classList.toggle('red');
    getCount();

}

function printRow(expense){
    var tbody = document.getElementById('expenses');

    var tr = tbody.insertRow();
    // object traverse
    var index = 0;
    for(let key in expense){
        if(key=='markForDelete'){
            continue;
        }
        let td = tr.insertCell(index);
        td.innerText = expense[key];
        index++;
    }
    let td = tr.insertCell(index);
    td.appendChild(createIcon(config.paths.trash, markDelete, expense.id));
    td.appendChild(createIcon(config.paths.edit, edit, expense.id));
    // var td = tr.insertCell(0);
    // td.innerText = 1001;
}