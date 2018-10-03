var addtextbox = document.querySelector("#addtodo");
var left = document.querySelector("#left");
var addbtn = document.querySelector("#addbtn");


 addbtn.addEventListener("click", function(){
    var re = /A-Za-z/
        if (addtextbox.value == "" || addtextbox.value ==! re || addtextbox.value == null)
            {  alert("please input a todo item before submitting"); }
            else
	           var addnewtodo= document.createElement("input");
                document.querySelector("#left").appendChild(addnewtodo).setAttribute("class", "form-control");
                document.querySelector("#left").appendChild(addnewtodo).setAttribute("value", addtextbox.value);
                document.querySelector("#left").appendChild(addnewtodo).setAttribute("disabled", "");
                addtextbox.value = ""; 
                
});


addtextbox.addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
    if (key === 13) {  
        var re = /A-Za-z/
        if (addtextbox.value == "" || addtextbox.value ==! re || addtextbox.value == null){   
              alert("Please enter a valid todo item"); 
        }
        else
    var addnewtodo= document.createElement("input");
    document.querySelector("#left").appendChild(addnewtodo).setAttribute("class", "form-control");
    document.querySelector("#left").appendChild(addnewtodo).setAttribute("value", addtextbox.value);
    document.querySelector("#left").appendChild(addnewtodo).setAttribute("disabled", "");
    addtextbox.value = ""; 
     }
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

// for (i=0; asdf < asdf.length; i++)
// {

// }

// todoitem1.setAttribute("value",add.value)