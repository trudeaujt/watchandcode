window.sandwichLibrary = 'A book about sandwiches';

(function() {
    var breads = {
        wheat: 'The healthy option',
        white: 'The unhealthy option'
    };
    var fillings = {
        turkey: 'For boring sandwiches',
        cheese: 'For the vegetarians'
    };
    var sandwichLibrary = {
        breads: breads,
        fillings: fillings
    };

    if(typeof librarySystem !== 'undefined') {
        //Handle librarySystem case
        librarySystem('sandwichLibrary', function() {
            return sandwichLibrary;
        });
    } else {
        //Handle the window case
        var oldSandwichLibrary = window.sandwichLibrary;
        sandwichLibrary.noConflict = function() {
            window.sandwichLibrary = oldSandwichLibrary;
            return sandwichLibrary;
        }
        window.sandwichLibrary = sandwichLibrary;
    }

}());

//this will reset window.sandwichLibrary to the original value.
//.noConflict will also return the sandwichLibrary object.
var sandwichJS = sandwichLibrary.noConflict();
console.log(sandwichLibrary)
console.log(sandwichJS.breads.white);