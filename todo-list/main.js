// Make an abstraction of a TODO List
var todoList = [
    {
        text: "get groceries"
    },
    {
        text: "clean room"
    },
    {
        text: "clean baseboards"
    }
]

// Decide how to render our abstraction 
function renderTodoList(list) {

    var todoListHTMLArray = list.map(function(todo){
        return `<li>${todo.text}</li>`
    });

    return todoListHTMLArray.join('');
}


//"ACTION"
// as soon as the page loads, show todo list to the screen
document.getElementById('todo-list-container').innerHTML = renderTodoList(todoList)


// ACTION
// User adds a todo to the list
function addTodo(newTodo) {
    todoList.push(newTodo);
}


document.getElementById('todoInput').addEventListener('change', function(){
    var todoTextThatTheUserEntered = this.value;

    var newTodo = {
        text: todoTextThatTheUserEntered
    }

    // trigger your action
    addTodo(newTodo);

    document.getElementById('todo-list-container').innerHTML = renderTodoList(todoList)
});