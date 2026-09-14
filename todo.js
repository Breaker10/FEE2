
let todoList=[];
displayItems();


function addTodo(){
    //todo-input
    let inputElement=document.querySelector('#todo-input');
    let todoItem=inputElement.value;
    //todo-date
    let dateElement=document.querySelector('#todo-date');
    let tododate=dateElement.value;
    todoList.push({item: todoItem , dueDate: tododate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    let containerElement =document.querySelector('.todo-container');
    let newHTML='';
    for(let i=0;i<todoList.length;i++){
        let{item,dueDate}=todoList[i];
        
        newHTML+=`
        
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="todoList.splice(${i}, 1);
                displayItems();">Delete</button>    
    `;
    }
    containerElement.innerHTML=newHTML;
}