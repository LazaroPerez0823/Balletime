$(document).ready(function() {

    $("#sideContainer").hide();

    //dropdown for states
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
        "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    var radius = [0.5, 1, 2, 5, 8, 10, 15, 20, 30, 50];

    //previous objects array
    var previousPlaces = [{
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
        }
    ];

    //close modal on click
    $("#closeBtn, .button").on("click", function(event) {
        event.preventDefault();
        // call outside functions for actions on click
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

    //dropdown for radius menu

    for (var j = 0; j < radius.length; j++) {
        var radDropdown = $("<option>");
        radDropdown.addClass("radius");
        radDropdown.attr("data-radius", radius[j]);
        radDropdown.text(radius[j]);
        $("#inputRadius").append(radDropdown);
    }

    // ======================================================================================================================================

    var baseURL = "https://developers.zomato.com/api/v2.1/search?"
    var APIKey = "apikey=2acf625e70fd25f7205fda31a0f6cb15&";
    var lat = 40.730511299999996;
    var lng = -74.065955;
    var meters = 1600;
    var queryURL = "https://developers.zomato.com/api/v2.1/search?" + APIKey + "&lat=" + lat + "&lon=" + lng + "&" + "radius=" + meters + "&sort=real_distance";


    //on search again click, pull single random ajax call
    $("#searchAgain").on("click", function() {

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var results = response.restaurants;

            // random number generator
            var randomNumber = results[Math.floor(Math.random() * 20)];
            console.log(randomNumber);

            for (var i = 0; i < results.length; i++) {
                // create a new variable div to store new data
                // var restaurants = $('<div>');
                var placeHolder = $('<li>');
                var a = $('<a>');
                var img = $('<img>');
                var p = $('<p>');
                var p2 = $('<p>');
                var name = $('<h4>');

                placeHolder.addClass("placeCard");
                name.addClass("restName");
                name.attr('data-name', results[i].restaurant.name) // missing
                name.text(results[i].restaurant.name);

                a.addClass("link");
                a.attr("data-link", results[i].restaurant.url);
                img.addClass("placePhoto");
                img.attr("data-photo", results[i].restaurant.photo);

                p.addClass("info");
                p.attr("data-info", results[i].restaurant.hightlights);
                p.text(results[i].restaurant.hightlights);

                p2.addClass("rating");
                p2.attr("data-rating", results[i].restaurant.user_rating.aggregate_rating);
                p2.text(results[i].restaurant.user_rating.aggregate_rating);

                a.append(p, p2, name, img);
                placeHolder.append(a);

                $("#sideNav").append(placeHolder);
            }
        });
    });

    // ======================================================================================================================================

    //show side nav
    $("#prevSearches").on("click", function() {
        $("#sideContainer").show();
    });

    //hide side nav when clicked outside
    $(document).mouseup(function(i) {
        var sideList = $("#sideNav");
        if (!sideList.is(i.target) && sideList.has(i.target).length === 0) {
            $("#sideContainer").hide();

        }
    });

    // search function() {
    //     //this function happens when you hit search, using the search option parameters
    // };
    // findMe function() {
    //    runMap();
    // }
    // directions function() {
    //     //this function happens in order to get directions
    // }

    // $("#modalFindMeBtn").on("click", function(event) {
    //     event.preventDefault()
    //         // call outside functions for actions on click
    //     runMap();
    //     close();
    // });

    $("#modalFindMeBtn").click(function() {
        event.preventDefault();
        findLocation();
    });


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

    });

    $("#closeBtn, .button").on("click", function(event) {
        event.preventDefault();

        $("#addressModal").hide();
    });

    // =====================================================================================================================================

    // MAP FUNCTIONS
    //Displays map on screen
    var map, infoWindow;
    infoWindow = new google.maps.InfoWindow;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.7555258,
            lng: -80.04494120000001
        },
        zoom: 15
    });

    //Calls function to location you on the map
    function findLocation() {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log("Lat " + pos.lat);
                console.log("Lng " + pos.lng);
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    //Googles error message handling if browser or computer doesn't support GPS
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }




});