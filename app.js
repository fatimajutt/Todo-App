var list=document.getElementById("list");
function addTodo(){
	var todo_item=document.getElementById("todo-item");

	var li=document.createElement('li');
	var liText=document.createTextNode(todo_item.value);
	li.setAttribute("class","mt-5")
	li.appendChild(liText);

	var delBtn=document.createElement("button")
    var delText=document.createTextNode("Delete");
    delBtn.setAttribute("class","ml-3")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText);

    var editBtn=document.createElement("button")
    var editText=document.createTextNode("Edit");
    editBtn.setAttribute("class","ml-3")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)

	list.appendChild(li);
	todo_item.value=""
} 

function deleteItem(e){
	e.parentNode.remove()
}
function editItem(e){
	var val=e.parentNode.firstChild.nodeValue;
	var editValue=prompt("Enter edit value",val)
	e.parentNode.firstChild.nodeValue=editValue
}
function deleteAll(){
	list.innerHTML=""
}