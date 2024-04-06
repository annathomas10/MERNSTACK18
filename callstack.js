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

/* good article - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
"A downside of this model is that if a message takes too long to complete, the web 
application is unable to process user interactions like click or scroll. "
setTimeout:
" For this reason, the second argument indicates a minimum time — not a guaranteed time."
"Zero delay doesn't mean the call back will fire-off after zero milliseconds"
"The execution depends on the number of waiting tasks in the queue"
"A very interesting property of the event loop model is that JavaScript, 
unlike a lot of other languages, never blocks"
"Legacy exceptions exist like alert or synchronous XHR, but it is considered good practice
to avoid them. Beware: exceptions to the exception do exist (but are usually implementation 
bugs, rather than anything else)."
Also see his slides */