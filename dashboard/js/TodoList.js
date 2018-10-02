var add = document.querySelector("#addtodo");
var addtextbox = document.querySelector("#addtodo");
var todoitem1 = document.querySelector("#todoitem1");
var left = document.querySelector("#left");
var todoitem6 = document.querySelector("#todoitem6");
var addbtn = document.querySelector("#addbtn");

addbtn.addEventListener("click", function(){
	 todoitem1.setAttribute("value",add.value)
		var node = document.createElement("div");
    	var textnode = document.createTextNode("asdf");
    	node.appendChild(t);
   		document.querySelector("#leftz").appendChild(node);

});


addtextbox.addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
    if (key === 13) {     
	var addline = document.createElement("div");
    var t = document.createTextNode("asdf");
    addline.appendChild(t);
    document.querySelector("todolist1").appendChild(addline);
}
	;
});


// todo -     	ADD a toggle function that disables and enables an <input type text> inside #left
//new todo - 	REMOVE ALL textbox, add a function that creates a new textbox containing the value of the 
//				[addtextbox] when [enter key] is pressed


// SAMPLE CODE OF CREATE EVENT
// function addItem() {
//     var addline = document.createElement("div");
//     var t = document.createTextNode("asdf");
//     addline.appendChild(t);
//     document.body.appendChild(addline);
// }

