$(document).ready(function () {

    $("#sideContainer").hide();

    //dropdown for states
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

    var radius = [0.5, 1, 2, 5, 8, 10, 15, 20, 30, 50];
    var previousPlaces = [];

    //close modal on click
    $("#closeBtn, .button").on("click", function (event) {
        event.preventDefault();
        // call outside functions for actions on click
        $("#addressModal").hide();
    });


    //dropdown for states menu
    for (var i = 0; i < states.length; i++) {
        var dropDown = $("<option>");
        dropDown.addClass("stateOption");
        dropDown.attr("data-state", states[i]);
        dropDown.text(states[i]);
        $("#inputState").append(dropDown);
    }
    
    for (var j = 0; j < radius.length; j++) {
        var radDropdown = $("<option>");
        radDropdown.addClass("radius");
        radDropdown.attr("data-radius", radius[j]);
        radDropdown.text(radius[j]);
        $("#inputRadius").append(radDropdown);
    }

    // for (var q = 0; q < previousPlaces.length; q++) {
    //     var prevPlace = $("<li>");
    //     var 
        
    // }


    $("#prevSearches").on("click", function () {
        $("#sideContainer").show();
    });

    $(document).mouseup(function (i) {
        var sideList = $("#sideNav");
        if (!sideList.is(i.target) && sideList.has(i.target).length === 0) {
            $("#sideContainer").hide();
            
        }        
    });

    // when search again button gets clicked


    // search function() {
    //     //this function happens when you hit search, using the search option parameters
    // };

    // findMe function() {
    //     //this function happens when you hit find my location, using google geolocation
    // }

    // directions function() {
    //     //this function happens in order to get directions
    // }

});