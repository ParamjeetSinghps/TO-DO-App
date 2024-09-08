let todo = [];
let req = prompt("Please Enter your request ");
while (true) {
    if (req == "quit") {
        console.log("quitting app")
        break;
    }
    if (req = "list") {
        console.log("__________");
        for (i = 0; i <= todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("________");
    } else if (req == "add") {
        let task = prompt("enter the task to add");
        todo.push(task);
        console.log("task is added");

    } else if (req == "delete") {
        let idx = promot("Enter the task to be removed ");
        todo.splice(idx, 1);
        console.log("task is removed sucessfully");
    } else {
        console.log("wrong request");
    }
    // req = prompt("Please Enter your request ");


}