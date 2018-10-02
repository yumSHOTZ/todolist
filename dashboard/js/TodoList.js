var add = document.querySelector("#addtodo");
var addtextbox = document.querySelector("#addtodo");
var todoitem1 = document.querySelector("#todoitem1");
var left = document.querySelector("#left");
var todoitem6 = document.querySelector("#todoitem6");

addtextbox.addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
    if (key === 13) {     
	todoitem1.setAttribute("value",add.value)
	todoitem6.classList.toggle("todoitem6");
	;
}
});






// todo -     	ADD a toggle function that disables and enables an <input type text> inside #left
//new todo - 	REMOVE ALL textbox, add a function that creates a new textbox containing the value of the 
//				[addtextbox] when [enter key] is pressed



function addItem() {
    var btn = document.createElement("div");
    var t = document.createTextNode("asdf");
    btn.appendChild(t);
    document.body.appendChild(btn);
}
