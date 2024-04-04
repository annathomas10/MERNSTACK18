//stacksize is very limited it gets blown up if we do not control the iterations

function foo(params) {
    throw "This is executed on stack!!"
}

function bar(params) {
    foo()   
}

function baz(params) {
    bar()
}

//baz() - this won't blow up the stack

//blow up the stack - RangeError: Maximum call stack size exceeded

function User(params) {
    User()  //like recursive
}

User()