// a special memory created out side the v8 heap which can be utilized 
//for moderate set of data

//The buffers module provides a way of handling streams of binary data.

//The Buffer object is a global object in Node.js, 
//and it is not necessary to import it using the require keyword.

let buf = Buffer.alloc(256);

let len = buf.write("We are learning node implementation");

//octet length, it showed the number of chars
console.log("1. Output from a buffer " + len) 
console.log("2. ",buf.toString("utf8"))  //regular human text
console.log("3. ",buf.toString("base64"))

let buf26 = Buffer.alloc(26); 
for (let i = 0 ; i < 26 ; i++) 
{ 
    buf26[i] = i + 97; 
}

//console.log(buf26)

console.log( "4. ",buf26.toString('ascii')); // outputs: abcdefghijklmnopqrstuvwxyz 
console.log( buf26.toString('ascii',0,5)); // outputs: abcde 
// outputs: abcde. UTF8 is default and is regular text
console.log( buf26.toString('utf8',0,5)); 
console.log( buf26.toString('base64',0,5)); // outputs: YWJjZGU= 
console.log( buf26.toString('base64')); // outputs: YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXo= 
console.log( buf26.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde