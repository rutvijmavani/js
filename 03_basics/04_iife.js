// Immediately Invoked Function Expressions!

(function chai() {
    console.log(`DB Connected`);
})();    // DB Connected

( (name) => {
    console.log(`DB connected 2 ${name}`);
} ) ("hitesh")         //DB connected 2 hitesh 