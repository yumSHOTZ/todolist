var addtextbox = document.querySelector("#addtodo");
var left = document.querySelector("#left");
var addbtn = document.querySelector("#addbtn");
var counter = 0;

var right = document.querySelector("#right");


 addbtn.addEventListener("click", function(){
    var re = /A-Za-z/
        if (addtextbox.value == "" || addtextbox.value ==! re || addtextbox.value == null)
            {  alert("please input a todo item before submitting"); addtextbox.focus(); }
            else
            {
                counter++;
	            var addnewtodo= document.createElement("input");
                var addbutton = document.createElement("input");
                var addbutton2 = document.createElement("input");

                    // ADD
                left.appendChild(addnewtodo).setAttribute("class", "form-control styleTextbox");
                left.appendChild(addnewtodo).setAttribute("value", addtextbox.value);
                left.appendChild(addnewtodo).setAttribute("disabled", "");
                left.appendChild(addnewtodo).setAttribute("id", "specialtextbox" + counter);
                addtextbox.value = "";
                    // EDITOK
                left.appendChild(addbutton).setAttribute("class", "btn btn-default styleButton")
                left.appendChild(addbutton).setAttribute("type", "button");
                left.appendChild(addbutton).setAttribute("id", "editOk" + counter);
                left.appendChild(addbutton).setAttribute("value", "EDIT");
                	// DELDONE
                left.appendChild(addbutton2).setAttribute("class", "btn btn-default styleButton doneButton")
                left.appendChild(addbutton2).setAttribute("type", "button");
                left.appendChild(addbutton2).setAttribute("id", "delDone" + counter);
                left.appendChild(addbutton2).setAttribute("value", "DONE");


                		//EDITOK EVENT LISTENER START
                    var specialtextbox = document.querySelector("#specialtextbox" + counter);
                    var editOk = document.querySelector("#editOk" + counter);
                    var delDone = document.querySelector("#delDone" + counter);

                    editOk.addEventListener("click", function(){
                    if(editOk.value == "EDIT"){
                        specialtextbox.removeAttribute("disabled");
                        specialtextbox.setAttribute("class", "form-control justAclass styleTextbox");
                        editOk.setAttribute("value", "OK");
						delDone.setAttribute("value", "DEL");
                    }
                    else{
                    				// EDIT VALIDATION
                        		if (specialtextbox.value == "") {
                            		alert('Cannot leave blank.');
                           		 	specialtextbox.focus();
                           		 	return false;
                       			 }                      	
                        specialtextbox.setAttribute("disabled", "");
                        specialtextbox.setAttribute("class", "form-control styleTextbox");
                        editOk.setAttribute("value", "EDIT");
                        editOk.setAttribute("class", "btn btn-default styleButton");
                        delDone.setAttribute("value", "DONE");
                    }

                });
                    	//EDITOK EVENT LISTENER END



                    	//DELDONE EVENT LISTENER START
                    var specialtextbox = document.querySelector("#specialtextbox" + counter);
					var editOk = document.querySelector("#editOk" + counter);
					var delDone = document.querySelector("#delDone" + counter);
						delDone.addEventListener("click", function(){
							if (delDone.value == "DEL")
							{
                                //deletes specialtextbox, editok button and deldone button
                    	document.querySelector("#left").removeChild(specialtextbox);
                    	document.querySelector("#left").removeChild(editOk);
                    	document.querySelector("#left").removeChild(delDone);
                    	
							}
							else{
                        var doneitem = document.createElement("input");
                        var addbutton3 = document.createElement("input");
                        var addbuton4 = document.createElement("input");

                                 //deletes specialtextbox, editok button and deldone button
                        document.querySelector("#left").removeChild(specialtextbox);
                        document.querySelector("#left").removeChild(editOk);
                        document.querySelector("#left").removeChild(delDone);
                                //creates doneitem textbox to (right) and adds value from specialtextbox(left)
                        right.appendChild(doneitem).setAttribute("id", "doneitem" + counter);
                        right.appendChild(doneitem).setAttribute("class", "form-control styleDone");
                        right.appendChild(doneitem).setAttribute("disabled", "");
                        right.appendChild(doneitem).setAttribute("value", specialtextbox.value);
                        right.appendChild(doneitem).setAttribute("title", "Can't edit a done item.");
                                //creates undo button on (right)
                        right.appendChild(addbutton3).setAttribute("type", "button");
                        right.appendChild(addbutton3).setAttribute("class", "btn btn-default styleButton");
                        right.appendChild(addbutton3).setAttribute("value", "UNDO");
                        right.appendChild(addbutton3).setAttribute("id", "undoButton");
                        right.appendChild(addbutton3).setAttribute("title", "Click here to undo this item.");

                        }
						});
						//DELDONE EVENT LISTENER END
                }
                
                        //UNDO EVENT LISTENER START
                    var undoButton = document.querySelector("#undoButton");
                        undoButton.addEventListener("click", function(){
                            alert("wtf");
                        });



});






// addtextbox.addEventListener("keypress", function(e){
// 	var key = e.which || e.keyCode;
//     if (key === 13) {
//         var re = /A-Za-z/
//         if (addtextbox.value == "" || addtextbox.value ==! re || addtextbox.value == null){
//               alert("Please enter a valid todo item");
//         }
//         else
//             {
//                 counter++;
//                 var addnewtodo= document.createElement("input");
//                 var addbutton= document.createElement("input");

//                     // ADD
//                 left.appendChild(addnewtodo).setAttribute("class", "form-control styleTextbox");
//                 left.appendChild(addnewtodo).setAttribute("value", addtextbox.value);
//                 left.appendChild(addnewtodo).setAttribute("disabled", "");
//                 left.appendChild(addnewtodo).setAttribute("id", "specialtextbox" + counter);
//                 addtextbox.value = "";
//                     // EDIT
//                 left.appendChild(addbutton).setAttribute("class", "btn btn-default styleButton")
//                 left.appendChild(addbutton).setAttribute("type", "button");
//                 left.appendChild(addbutton).setAttribute("id", "editOk" + counter);
//                 left.appendChild(addbutton).setAttribute("value", "EDIT");

//                     var specialtextbox = document.querySelector("#specialtextbox" + counter);
//                     var editOk = document.querySelector("#editOk" + counter);
//                     editOk.addEventListener("click", function(){
              
//                     if(editOk.value == "EDIT"){
//                         specialtextbox.removeAttribute("disabled");
//                         specialtextbox.setAttribute("class", "form-control justAclass styleTextbox");
//                         editOk.setAttribute("value", "OK");
//                     }
//                     else{
//                         specialtextbox.setAttribute("disabled", "");
//                         specialtextbox.setAttribute("class", "form-control styleTextbox");
//                         editOk.setAttribute("value", "EDIT");
//                         editOk.setAttribute("class", "btn btn-default styleButton")                 
//                     }             
//                 });
//                 }
//             }
                
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





// //ADD DELETE ITEM if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
// } else {
//     txt = "You pressed Cancel!";
// }