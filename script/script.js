// // Working setting up cookies
// var newDate;

// // Previous visits
// $.cookie("visits", 20);

// // Name of the Cookie with an expiration date
// $.cookie('Project', 'Restaurant Finder', { expires: 2 });

// $.cookie("name", "Kelvin", { secure: true });

// // Testing
// console.debug($.cookie("visits"));
// console.debug($.cookie("Project"));
// console.debug($.cookie("favorite-food"));
// console.debug($.cookie("name"));
// // alert($.cookie("visits"));
// // alert($.cookie("Project"));
// // alert($.cookie("name"));

// // To remove a cookie
// // $.removeCookie("example");

var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado"];


// When users click "search"
$("#modalBtn").on('click', function(event) {
    // Prevent the page from resetting
    event.preventDefault();

    // My location variables:
    // Address, City, State, Zip,
    var address = $('#inputAddress').val().trim();
    var city = $('#inputCity').val().trim();
    var zip = $('#inputZip').val().trim();

    // Clear absolutely everything stored in local storage
    localStorage.clear();

    // Store the user's location into local storage
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("zip", zip);

    // Store the listings in the Nav bar once it's created

})

$("#closeBtn, .button").on("click", function(event) {
    event.preventDefault();

    $("#addressModal").hide();
})

for (var i = 0; i < states.length; i++) {
    var dropDown = $('<options>');
    dropDown.addClass('stateOption');
    dropDown.attr('data-state', states[i]);
    dropDown.text(states[i]);
    $('#inputState').append(dropDown);

    console.log($('#inputState').append(dropDown));
}