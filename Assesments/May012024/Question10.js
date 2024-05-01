//10. Create an example of generator function of your choice

function *todoList(){
    
    yield console.log("Pick kids up");
    yield console.log("bake cake");
    yield console.log("cook dinner");
    
    return "Done";
}

console.log(todoList());
console.log(todoList());
console.log(todoList());



