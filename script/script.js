$(document).ready(function () {

    $("#sideContainer").hide();

    //dropdown for states
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
        "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

    var radius = [0.5, 1, 2, 5, 8, 10, 15, 20, 30, 50];

    //previous objects array
    var previousPlaces = [
        {
            restaurantName: "java juice",
            hightlights: "breakfast",
            photo: "imgurl",
            latitude: "here",
            longitude: "there",
            rating: 5,
            url: "link to page",
        },
        {
            restaurantName: "somewhere else",
            hightlights: "breakfast elsewhere",
            photo: "imgurl2",
            latitude: "not here",
            longitude: "not there",
            rating: 4,
            url: "link to another page",
        }];

    //close modal on click
    $("#closeBtn, .button").on("click", function (event) {
        event.preventDefault();
        // call outside functions for actions on click
        $("#addressModal").hide();
    });


    //dropdown for states menu
    for (var i = 0; i < states.length; i++) {
        var dropDown = $("<option>");
        dropDown.addClass("stateOption");
        dropDown.attr("data-state", states[i]);
        dropDown.text(states[i]);
        $("#inputState").append(dropDown);
    }

    //dropdown for radius menu
    for (var j = 0; j < radius.length; j++) {
        var radDropdown = $("<option>");
        radDropdown.addClass("radius");
        radDropdown.attr("data-radius", radius[j]);
        radDropdown.text(radius[j]);
        $("#inputRadius").append(radDropdown);
    }


    var baseURL = "https://developers.zomato.com/api/v2.1/search?"
    var APIKey = "apikey=2acf625e70fd25f7205fda31a0f6cb15&";
    var lat = 40.730511299999996;
    var lng = -74.065955;
    var meters = 1600;
    var queryURL = "https://developers.zomato.com/api/v2.1/search?" + APIKey + "&lat=" + lat + "&lon=" + lng + "&" + "radius=" + meters + "&sort=real_distance";


    //on search again click, pull single random ajax call
    $("#searchAgain").on("click", function () {

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.restaurants;



        });
    })



        for (var k = 0; k < previousPlaces.length; k++) {
            var placeHolder = $("<li>");
            var a = $("<a>");
            var img = $("<img>");
            var p = $("<p>");
            var p2 = $("<p>");
            var name = $("<h4>")
            placeHolder.addClass("placeCard");
            name.addClass("restName");
            name.attr("data-name", previousPlaces[k].restaurantName);
            name.text(previousPlaces[k].restaurantName);
            a.addClass("link");
            a.attr("data-link", previousPlaces[k].url);
            img.addClass("placePhoto");
            img.attr("data-photo", previousPlaces[k].photo);

            p.addClass("info");
            p.attr("data-info", previousPlaces[k].hightlights);
            p.text(previousPlaces[k].hightlights)
            p2.addClass("rating");
            p2.attr("data-rating", previousPlaces[k].rating);
            p2.text(previousPlaces[k].rating);

            a.append(p, p2, name, img);
            placeHolder.append(a);

            $("#sideNav").append(placeHolder);
        }
    

    //show side nav
    $("#prevSearches").on("click", function () {
        $("#sideContainer").show();
    });

    //hide side nav when clicked outside
    $(document).mouseup(function (i) {
        var sideList = $("#sideNav");
        if (!sideList.is(i.target) && sideList.has(i.target).length === 0) {
            $("#sideContainer").hide();

        }
    });

    // when search again button gets clicked


    // search function() {
    //     //this function happens when you hit search, using the search option parameters
    // };

    // findMe function() {
    //     //this function happens when you hit find my location, using google geolocation
    // }

    // directions function() {
    //     //this function happens in order to get directions
    // }

});
