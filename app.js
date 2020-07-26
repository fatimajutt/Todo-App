var list=document.getElementById("list");
function addTodo(){
	var todo_item=document.getElementById("todo-item");

	var li=document.createElement('li');
	var liText=document.createTextNode(todo_item.value);
	li.appendChild(liText);

	var delBtn=document.createElement("button")
    var delText=document.createTextNode("Delete");
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deletItem()")
    delBtn.appendChild(delText);

    li.appendChild(delBtn)

	list.appendChild(li);
	console.log(li)
} 

function deleteItem(){

}
