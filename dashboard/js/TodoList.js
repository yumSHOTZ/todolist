var addtextbox = document.querySelector("#addtodo");
var left = document.querySelector("#left");
var addbtn = document.querySelector("#addbtn");
var counter = 0;
var right = document.querySelector("#right");

//for date variables
 var minDate = document.querySelector("#date");
//for date variables
    

addbtn.addEventListener("click", function() {
    addtextbox.focus();
    var re = /A-Za-z/
    if (addtextbox.value == "" || addtextbox.value == !re || addtextbox.value == null) {
        alert("Please input a todo item before submitting");
        addtextbox.focus();
    } else {
        // if (true) {}
        counter++;
        var addnewtodo = document.createElement("input");
        var addbutton = document.createElement("input");
        var addbutton2 = document.createElement("input");
        var todoDiv = document.createElement("div");



        left.appendChild(todoDiv).setAttribute("id", "todoDiv" + counter);
        left.appendChild(todoDiv).setAttribute("class", "todoDiv");



        // ADD
        todoDiv.appendChild(addnewtodo).setAttribute("class", "form-control styleTextbox dataFloat");
        todoDiv.appendChild(addnewtodo).setAttribute("value", addtextbox.value);
        todoDiv.appendChild(addnewtodo).setAttribute("disabled", "");
        todoDiv.appendChild(addnewtodo).setAttribute("id", "specialtextbox" + counter);
        addtextbox.value = "";
        // EDITOK
        todoDiv.appendChild(addbutton).setAttribute("class", "btn btn-default styleButton editButton btn-float left");
        todoDiv.appendChild(addbutton).setAttribute("type", "button");
        todoDiv.appendChild(addbutton).setAttribute("id", "editOk" + counter);
        todoDiv.appendChild(addbutton).setAttribute("value", "EDIT");
        // DELDONE
        todoDiv.appendChild(addbutton2).setAttribute("class", "btn btn-default styleButton doneButton btn-float");
        todoDiv.appendChild(addbutton2).setAttribute("type", "button");
        todoDiv.appendChild(addbutton2).setAttribute("id", "delDone" + counter);
        todoDiv.appendChild(addbutton2).setAttribute("value", "DONE");


        //EDITOK EVENT LISTENER START
        var specialtextbox = document.querySelector("#specialtextbox" + counter);
        var editOk = document.querySelector("#editOk" + counter);
        var delDone = document.querySelector("#delDone" + counter);


        editOk.addEventListener("click", function() {
            if (editOk.value == "EDIT") {
                specialtextbox.removeAttribute("disabled");
                specialtextbox.setAttribute("class", "form-control justAclass styleTextbox dataFloat");
                editOk.setAttribute("value", "OK");
                delDone.setAttribute("value", "DEL");
            } else {
                // EDIT VALIDATION
                if (specialtextbox.value == "") {
                    alert('Cannot leave blank.');
                    specialtextbox.focus();
                    return false;
                }
                specialtextbox.setAttribute("disabled", "");
                specialtextbox.setAttribute("class", "form-control styleTextbox dataFloat");
                editOk.setAttribute("value", "EDIT");
                editOk.setAttribute("class", "btn btn-default styleButton btn-float left");
                delDone.setAttribute("value", "DONE");
                }


        });
        //EDITOK EVENT LISTENER END



        //DELDONE EVENT LISTENER START
        var specialtextbox = document.querySelector("#specialtextbox" + counter);
        var editOk = document.querySelector("#editOk" + counter);
        var delDone = document.querySelector("#delDone" + counter);
        var divCount = document.querySelector("#div" + counter);


        delDone.addEventListener("click", function(event) {
counter++;
            if (delDone.value == "DEL") {

                var deletableDiv = event.target.parentElement;
                deletableDiv.remove();


            } else {
                var deletableDiv = event.target.parentElement;
                deletableDiv.remove();



                var add = document.createElement("input");
                var addbutton3 = document.createElement("input");
                var addbutton4 = document.createElement("input");
                var doneDiv = document.createElement("div");
                var todoDiv = document.querySelector("#todoDiv");


                //creates doneitem textbox to (right) and adds value from specialtextbox(left)
                right.appendChild(doneDiv).setAttribute("id", "doneDiv" + counter);
                doneDiv.appendChild(add).setAttribute("id", "doneitem" + counter);
                doneDiv.appendChild(add).setAttribute("class", "form-control styleDone dataFloat");
                doneDiv.appendChild(add).setAttribute("disabled", "");
                doneDiv.appendChild(add).setAttribute("value", specialtextbox.value);
                doneDiv.appendChild(add).setAttribute("title", "Can't edit a done item.");
                //creates undo button on (right)

                doneDiv.appendChild(addbutton3).setAttribute("type", "button");
                doneDiv.appendChild(addbutton3).setAttribute("class", "btn btn-default styleButton btn-float left");
                doneDiv.appendChild(addbutton3).setAttribute("value", "UNDO");
                doneDiv.appendChild(addbutton3).setAttribute("id", "undoButton" + counter);
                doneDiv.appendChild(addbutton3).setAttribute("title", "Click here to undo this item.");

                doneDiv.appendChild(addbutton4).setAttribute("class", "btn btn-default styleButton doneButton btn-float");
                doneDiv.appendChild(addbutton4).setAttribute("type", "button");
                doneDiv.appendChild(addbutton4).setAttribute("id", "del" + counter);
                doneDiv.appendChild(addbutton4).setAttribute("value", "DEL");






                //UNDO EVENT LISTENER START
                var undoButton = document.querySelector("#undoButton" + counter);
                var delButton = document.querySelector("#del" + counter);
                var doneTextbox = document.querySelector("#doneitem" + counter);
                var doneitem = document.querySelector("#doneitem");
                // var todoDiv = document.querySelector("#div" + counter);
                var todoDiv = document.createElement("div");




                undoButton.addEventListener("click", function(event) {

                    //deletes doneitem, undo and del button from right
                    var deletableDiv = event.target.parentElement;
                    deletableDiv.remove();


                    //creates specialtextbox, editok and deldone button
                    left.appendChild(todoDiv).setAttribute("id", "todoDiv" + counter);

                    todoDiv.appendChild(addnewtodo).setAttribute("disabled", "");
                    todoDiv.appendChild(addnewtodo).setAttribute("id", "specialtextbox" + counter);
                    todoDiv.appendChild(addnewtodo).setAttribute("class", "form-control styleTextbox dataFloat");
                    todoDiv.appendChild(addnewtodo).setAttribute("value", doneTextbox.value);

                    todoDiv.appendChild(addbutton).setAttribute("class", "btn btn-default styleButton btn-float left")
                    todoDiv.appendChild(addbutton).setAttribute("type", "button");
                    todoDiv.appendChild(addbutton).setAttribute("id", "editOk" + counter);
                    todoDiv.appendChild(addbutton).setAttribute("value", "EDIT");

                    todoDiv.appendChild(addbutton2).setAttribute("class", "btn btn-default styleButton doneButton btn-float")
                    todoDiv.appendChild(addbutton2).setAttribute("type", "button");
                    todoDiv.appendChild(addbutton2).setAttribute("id", "delDone" + counter);
                    todoDiv.appendChild(addbutton2).setAttribute("value", "DONE");
                });

                //delButton {right} EVENT LISTENER START
                delButton.addEventListener("click", function(event) {
                    var deletableDiv = this.parentElement;
                    deletableDiv.remove();


                });
            }
        });
        //DELDONE EVENT LISTENER END
    }
});
var leftnoitem = document.querySelector("#leftnoitem");
var addtextbox = document.querySelector("#addtodo");
var specialtextbox = document.querySelector("#specialtextbox" + counter);
var editButton = document.querySelector(".editButton");

// if (left.contains(editButton) == true) {
//     leftnoitem.setAttribute("class", "hidethis");
// } else {
//     leftnoitem.removeAttribute("class", "hidethis");
// }







// var editButton = document.querySelector(".editButton");
// var doneButton = document.querySelector(".doneButton");
// var todoDiv = document.querySelector(".todoDiv");
// var title = document.querySelector("#title");

// todoDiv.addEventListener("mouseover", function(){
// editButton.classList.toggle("editButton");
// doneButton.classList.toggle("doneButton");
// });




// var leftnoitem = document.querySelector("#leftnoitem");
// var todoDiv = document.querySelector(".todoDiv");
// var isTrue = (left.contains(todoDiv) != true);

// if (todoDiv == prese){
//     leftnoitem.setAttribute("class", "hidethis");
// }






// var button = document.querySelector("#asdf");
// var element = document.querySelector(".myClass");

// button.addEventListener("click", function(){
//     element.classList.toggle("myClass");
// });




// addtextbox.addEventListener("keypress", function(e){
//  var key = e.which || e.keyCode;
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






// todo -       ADD a toggle function that disables and enables an <input type text> inside #left
//new todo -    REMOVE ALL textbox, add a function that creates a new textbox containing the value of the 
//              [addtextbox] when [enter key] is pressed



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