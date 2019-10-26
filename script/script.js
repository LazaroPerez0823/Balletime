
$(document).ready(function () {

    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    
    
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



});
