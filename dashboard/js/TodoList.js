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
        var nd = document.querySelector('#left').querySelector('#date').value;
        var getTime = new Date(nd);
        var ranId = Math.floor(Math.random() * 1000000000);

        newTodo(ranId, addtextbox.value, getTime.getTime());

        // if (true) {}
        counter++;
        var addnewtodo = document.createElement("input");
        var addbutton = document.createElement("input");
        var addbutton2 = document.createElement("input");
        var todoDiv = document.createElement("div");



        left.appendChild(todoDiv).setAttribute("id", "todoDiv" + counter);
        left.appendChild(todoDiv).setAttribute("class", "todoDiv");
        left.appendChild(todoDiv).setAttribute("value", ranId)
        



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
                console.log(counter);
                specialtextbox.setAttribute("class", "form-control justAclass styleTextbox dataFloat");
                editOk.setAttribute("value", "OK");
                delDone.setAttribute("value", "DEL");
                console.log(specialtextbox);
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

var api = [];
var todos = [];
function apiRequest() {
    const BaseUrl = "http://localhost:3000/todos";
    // var urlRoute = BaseUrl + "/todos";

    return fetch(BaseUrl).then(function(response) {
        return response.json();
    });
}
// console.log(getFetch);

apiRequest().then(function(data) {
    todos = data;
    var todo = todos.find((todo) => todo.status === "todo");
    // console.log(todos.length)
    for(var i = 0 ; i <= todos.length - 1; i++){
        console.log(todos[i].status == "todo")
        if (todos[i].status == "todo") {
            renderinMoto(todos,i);
        }

        else
             createDone(todos,i);

    }

 
   });







// else {
//    var deletableDiv = event.target.parentElement;
//    deletableDiv.remove();



//    var add = document.createElement("input");
//    var addbutton3 = document.createElement("input");
//    var addbutton4 = document.createElement("input");
//    var doneDiv = document.createElement("div");
//    var todoDiv = document.querySelector("#todoDiv");

//creates doneitem textbox to (right) and adds value from specialtextbox(left)

var counting = 0;
/////API data render
function renderinMoto(data,i) {
        var api = data;
        var objId = api[i]['id'];
        var todoValue = api[i].title;
        console.log(todoValue);

        // if (true) {}
        var addnewtodo = document.createElement("input");
        var addbutton = document.createElement("input");
        var addbutton2 = document.createElement("input");
        var todoDiv = document.createElement("div");



        left.appendChild(todoDiv).setAttribute("id", "todoDiv");
        left.appendChild(todoDiv).setAttribute("class", "todoDiv");
        left.appendChild(todoDiv).setAttribute("value", objId);


    
        // ADD
        todoDiv.appendChild(addnewtodo).setAttribute("class", "form-control styleTextbox dataFloat");
        todoDiv.appendChild(addnewtodo).setAttribute("value", todoValue);
        todoDiv.appendChild(addnewtodo).setAttribute("disabled", "");
        todoDiv.appendChild(addnewtodo).setAttribute("id", "specialtextbox");
        // addtextbox.value = "";
        // EDITOK
        todoDiv.appendChild(addbutton).setAttribute("class", "btn btn-default styleButton editButton btn-float left");
        todoDiv.appendChild(addbutton).setAttribute("type", "button");
        todoDiv.appendChild(addbutton).setAttribute("id", "editOk");
        todoDiv.appendChild(addbutton).setAttribute("value", "EDIT");
        // DELDONE
        todoDiv.appendChild(addbutton2).setAttribute("class", "btn btn-default styleButton doneButton btn-float");
        todoDiv.appendChild(addbutton2).setAttribute("type", "button");
        todoDiv.appendChild(addbutton2).setAttribute("id", "delDone");
        todoDiv.appendChild(addbutton2).setAttribute("value", "DONE");


        //EDITOK EVENT LISTENER START
        var specialtextbox = todoDiv.querySelector("#specialtextbox");
        // console.log(specialtextbox);
        var editOk = todoDiv.querySelector("#editOk");
        // console.log(editOk)
        var delDone = todoDiv.querySelector("#delDone");
        // var undoButton1 = document.querySelector('#')

        // editOk = document.
        editOk.addEventListener("click", function(event) {

            var ableTextbox = event.target.previousSibling;
            var switchDL = event.target.nextSibling;
            var switchEO = event.target;
            var divID = event.target.parentElement.getAttribute("value");


            if (switchEO.value == "EDIT") {
                // var textfield = document.querySelector("specialtextbox" + counter);
                ableTextbox.removeAttribute("disabled");
                // console.log(ableTextbox);
                // console.log(event);
                ableTextbox.setAttribute("class", "form-control justAclass styleTextbox dataFloat");
                switchEO.setAttribute("value", "OK");
                switchDL.setAttribute("value", "DEL");
                console.log('if')
                // console.log(specialtextbox, counter);
            } else {
                // EDIT VALIDATION
                if (ableTextbox.value == "") {
                    alert('Cannot leave blank.');
                    ableTextbox.focus();
                    return false;
                }
                 var todo = todos.find((todo) => todo.id === divID); //<-- si Vic gumagawa ni to kung baga yan ung alternative at madalas na siguro gamitin for comparing kesa sa loooping
                 if(todo.title !== ableTextbox.value) { //< eto na ung condition
                    updateAPI(ableTextbox.value, divID, todo.timestamp, todo.status); //<-- eto na ung nag.input ka na sa variable nang function                    
                 }
            
                    // if(compare != ableTextbox.value){
                    //     console.log(compare + " " + i)
                    //               updateAPI(ableTextbox.value, divID);

                    // }
            
                console.log('else')
                ableTextbox.setAttribute("disabled", "");
                ableTextbox.setAttribute("class", "form-control styleTextbox dataFloat");
                switchEO.setAttribute("value", "EDIT");
                switchEO.setAttribute("class", "btn btn-default styleButton btn-float left");
                switchDL.setAttribute("value", "DONE");
            }


        });
        //EDITOK EVENT LISTENER END


        //DELDONE EVENT LISTENER START
        // var specialtextbox = document.querySelector("#specialtextbox" + counter);
        // var editOk = document.querySelector("#editOk" + counter);
        // var delDone = document.querySelector("#delDone" + counter);
        // var divCount = document.querySelector("#div" + counter);


        delDone.addEventListener("click", function(event) {
            // counting++;
            var ableTextbox = event.target.parentElement.firstChild;
            var switchDL = event.target;
            var switchEO = event.target.previousSibling;
            console.log();

            if (switchDL.value == "DEL") {

                var deletableDiv = event.target.parentElement;
                deletableDiv.remove();
                console.log("if")


            } else {
                var deletableDiv = event.target.parentElement;
                deletableDiv.remove();
                 console.log("else")

                // function(event) {

                //     console.log(event)

                createDone();

                // }

                // function{
                    
                // }
            }
        })

    
}

function updateAPI(updateValue, id, time, status) { //<--- eto ung mga request variable or variable na as is
    var url = "http://localhost:3000/todos/" + id; //<--- ID ung specific object
    var changed = {"title": updateValue,
                    "timestamp": time,
                    "status": status}; //<--- ung papalitan o ung changes

    fetch(url, {
        method: "PUT",  //<--- eto ung request para maupdate
        body: JSON.stringify(changed), //<--- eto ung change na nasa variable na inistringify para maconvert to string
        headers: {
            "Content-Type": "application/json" // <--- don't forget this! mahalaga to
        }
    }).then(function(response){ //<-- eto na ung response
        return response.json();

    });
}


function createDone(apidata, i){
    var doneTextbox = document.createElement("input");
                    var addbutton3 = document.createElement("input");
                    var addbutton4 = document.createElement("input");
                    var doneDiv = document.createElement("div");
                    var todoDiv = document.querySelector("#todoDiv");

                   // creates doneitem textbox to (right) and adds value from specialtextbox(left)
                    right.appendChild(doneDiv).setAttribute("id", "doneDiv");
                    right.appendChild(doneDiv).setAttribute("class", "doneDiv");
                    doneDiv.appendChild(doneTextbox).setAttribute("id", "doneitem");
                    doneDiv.appendChild(doneTextbox).setAttribute("class", "form-control styleDone dataFloat");
                    doneDiv.appendChild(doneTextbox).setAttribute("disabled", "");
                    doneDiv.appendChild(doneTextbox).setAttribute("value", apidata[i].title);
                    doneDiv.appendChild(doneTextbox).setAttribute("title", "Can't edit a done item.");
                    //creates undo button on (right)

                    doneDiv.appendChild(addbutton3).setAttribute("type", "button");
                    doneDiv.appendChild(addbutton3).setAttribute("class", "btn btn-default styleButton btn-float left");
                    doneDiv.appendChild(addbutton3).setAttribute("value", "UNDO");
                    doneDiv.appendChild(addbutton3).setAttribute("id", "undoButton");
                    doneDiv.appendChild(addbutton3).setAttribute("title", "Click here to undo this item.");

                    doneDiv.appendChild(addbutton4).setAttribute("class", "btn btn-default styleButton doneButton btn-float");
                    doneDiv.appendChild(addbutton4).setAttribute("type", "button");
                    doneDiv.appendChild(addbutton4).setAttribute("id", "del");
                    doneDiv.appendChild(addbutton4).setAttribute("value", "DEL");






                    //UNDO EVENT LISTENER START
                    var doneElem = document.querySelector('#doneDiv');
                    var undoButton = doneDiv.querySelector("#undoButton");
                    // console.log(undoButton)
                    var delButton = doneDiv.querySelector("#del");
                    // var doneTextbox = doneElem.querySelector("#doneitem");
                    // var doneitem = document.querySelector("#doneitem");
                    // var todoDiv = document.querySelector("#div" + counter);
                    // var todoDiv = document.createElement("div");
                    var createDiv = document.createElement('div');
                    // var selectTodo = todoDiv



                    undoButton.addEventListener("click", function(event) {

                        //deletes doneitem, undo and del button from right
                        // var todoDiv = document.createElement('div');
                        var doneTextbox = event.target.previousSibling;

                        var deletableDiv = event.target.parentElement;
                        deletableDiv.remove();


                       // creates specialtextbox, editok and deldone button



 
                        left.appendChild(createDiv).setAttribute("class", "todoDiv");

                        // left.appendChild(todoDiv).setAttribute("style", "border:1px solid; width:100px; height:100px;");
                        console.log(this);



                        createDiv.appendChild(addnewtodo).setAttribute("disabled", "");
                        createDiv.appendChild(addnewtodo).setAttribute("id", "specialtextbox");
                        createDiv.appendChild(addnewtodo).setAttribute("class", "form-control styleTextbox dataFloat");
                        createDiv.appendChild(addnewtodo).setAttribute("value", doneTextbox.value);

                        createDiv.appendChild(addbutton).setAttribute("class", "btn btn-default styleButton btn-float left")
                        createDiv.appendChild(addbutton).setAttribute("type", "button");
                        createDiv.appendChild(addbutton).setAttribute("id", "editOk");
                        createDiv.appendChild(addbutton).setAttribute("value", "EDIT");

                        createDiv.appendChild(addbutton2).setAttribute("class", "btn btn-default styleButton doneButton btn-float")
                        createDiv.appendChild(addbutton2).setAttribute("type", "button");
                        createDiv.appendChild(addbutton2).setAttribute("id", "delDone");
                        createDiv.appendChild(addbutton2).setAttribute("value", "DONE");

                    });

                    //delButton {right} EVENT LISTENER START
                    delButton.addEventListener("click", function(event) {
                        var deletableDiv = this.parentElement;
                        deletableDiv.remove();


                    });
}
// after mo mabasa dito punta ka nang line 428

function newTodo(id, title, timestamp){

       var todoDetails = {
                "title": title,
                "timestamp": timestamp,
                "status": "todo",
                "userid": null,
                "id": id
        }


    fetch("http://localhost:3000/todos", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Content-Type': "application/json; charset=utf-8"},
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(todoDetails)
        }).then(function(response){ return response.json();});
}

console.log(putOnload(data));
