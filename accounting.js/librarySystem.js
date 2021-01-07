(function() {

    var libraryStorage = {};

    function librarySystem(libraryName, callback) {
        if(arguments.length > 1) { //create a library
            libraryStorage[libraryName] = callback()
        } else { //return a library
            return libraryStorage[libraryName];
        }
    }

    window.librarySystem = librarySystem;

}());