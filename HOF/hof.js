function h(x, fn) {
    //h -> Higher Order Function
    // fn -> Function to be applied
    console.log(x*x);
    fn(x*x); // Call the function passed as an argument 
    // fn(x); // Call the function passed as an argument with original value

}

// h(4, function() { // Callback function pass to fn();
//     console.log("done with callback");
// });

h(10, exec);

function exec(n) {
    console.log("squared value is", n)
}


console.log("start")
setTimeout(function f() {
    console.log("timmer done");
},5000);

console.log("end");

