var addtextbox = document.querySelector("#addtodo");
var left = document.querySelector("#left");
var addbtn = document.querySelector("#addbtn");
var counter = 0;



 addbtn.addEventListener("click", function(){
    var re = /A-Za-z/
        if (addtextbox.value == "" || addtextbox.value ==! re || addtextbox.value == null)
            {  alert("please input a todo item before submitting"); }
            else
            {
// // for (counter=0; counter < specialbutton.length; counter++)
// {
                counter++;
	            var addnewtodo= document.createElement("input");
                var addbutton= document.createElement("input");

                    // ADD
                left.appendChild(addnewtodo).setAttribute("class", "form-control styleTextbox");
                left.appendChild(addnewtodo).setAttribute("value", addtextbox.value);
                left.appendChild(addnewtodo).setAttribute("disabled", "");
                left.appendChild(addnewtodo).setAttribute("id", "specialtextbox" + counter);
                addtextbox.value = "";
                    // EDIT
                left.appendChild(addbutton).setAttribute("class", "btn btn-default styleButton")
                left.appendChild(addbutton).setAttribute("type", "button");
                left.appendChild(addbutton).setAttribute("id", "specialbutton" + counter);
                left.appendChild(addbutton).setAttribute("value", "EDIT");

                    var specialtextbox = document.querySelector("#specialtextbox" + counter);
                    var specialbutton = document.querySelector("#specialbutton" + counter);
                    specialbutton.addEventListener("click", function(){
              
                    if(specialbutton.value == "EDIT"){
                        specialtextbox.removeAttribute("disabled");
                        specialtextbox.setAttribute("class", "form-control justAclass styleTextbox");
                        specialbutton.setAttribute("value", "OK");
                    }
                    else{
                        specialtextbox.setAttribute("disabled", "");
                        specialtextbox.setAttribute("class", "form-control styleTextbox");
                        specialbutton.setAttribute("value", "EDIT");
                        specialbutton.setAttribute("class", "btn btn-default styleButton")
                    }             
                });
                }
                
                
});





// addtextbox.addEventListener("keypress", function(e){
// 	var key = e.which || e.keyCode;
//     if (key === 13) {
//         var re = /A-Za-z/
//         if (addtextbox.value == "" || addtextbox.value ==! re || addtextbox.value == null){
//               alert("Please enter a valid todo item");
//         }
//         else
//                 var addnewtodo= document.createElement("input");
//                 var addbutton= document.createElement("input");


//                 left.appendChild(addnewtodo).setAttribute("class", "form-control");
//                 left.appendChild(addnewtodo).setAttribute("value", addtextbox.value);
//                 left.appendChild(addnewtodo).setAttribute("disabled", "");
//                 left.appendChild(addnewtodo).setAttribute("id", "specialtextbox");
//                 addtextbox.value = "";
//                 left.appendChild(addbutton).setAttribute("class", "btn btn-default")
//                 left.appendChild(addbutton).setAttribute("type", "button");
//                 left.appendChild(addbutton).setAttribute("id", "specialbutton");
//                 left.appendChild(addbutton).setAttribute("value", "EDIT");

//                     var specialtextbox = document.querySelector("#specialtextbox");
//                     var specialbutton = document.querySelector("#specialbutton");
//                     specialbutton.addEventListener("click", function(){
//                     specialtextbox.removeAttribute("disabled");
//                 });

//      }
// });



                


// todo -     	ADD a toggle function that disables and enables an <input type text> inside #left
//new todo - 	REMOVE ALL textbox, add a function that creates a new textbox containing the value of the 
//				[addtextbox] when [enter key] is pressed



// function addItem() {
//     var btn = document.createElement("div");
//     var t = document.createTextNode("asdf");
//     btn.appendChild(t);
//     document.body.appendChild(btn);
// }

