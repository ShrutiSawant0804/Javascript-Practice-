function h(x, fn) {
    //h -> Higher Order Function
    // fn -> Function to be applied
    console.log(x*x);
    fn(); // Call the function passed as an argument

}

// h(4, function() { // Callback function pass to fn();
//     console.log("done with callback");
// });

h(10, exec);

function exec(n) {
    console.log("squared value is", n)
}