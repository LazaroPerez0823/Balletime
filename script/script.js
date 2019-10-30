$(document).ready(function() {
    $("#sideContainer").hide();
    //dropdown for states
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
        "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];
    var radius = [0.5, 1, 2, 5, 8, 10, 15, 20, 30, 50];
    var previousPlaces = [];

    //close modal on click
    $("#closeBtn, .button").on("click", function(event) {
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
    $("#prevSearches").on("click", function() {
        $("#sideContainer").show();
    });
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
    //     //this function happens when you hit find my location, using google geolocation
    // }
    // directions function() {
    //     //this function happens in order to get directions
    // }

    // ==========================================================================================================
    // Zamato API AJAX Call
    var baseURL = "https://developers.zomato.com/api/v2.1/search?"

    // This is our API key. Add your own API key between the ""
    var APIKey = "apikey=2acf625e70fd25f7205fda31a0f6cb15&";
    var lat = 40.730511299999996;
    var lng = -74.065955;
    var meters = 1600;

    // var searchCategory = s;

    // Here we are building the URL we need to query the database
    var queryURL = "https://developers.zomato.com/api/v2.1/search?" + APIKey + "&lat=" + lat + "&lon=" + lng + "&" + "radius=" + meters + "&sort=real_distance";

    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // Loop through 20 results of i
        // grab their location, images, phone number, timings(lucnh, dinner, (sun, sat), breakfast, etc... )
        // Pull the restaurant images

        var results = response.restaurants;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            // create a new variable div to store new data
            var restaurants = $('<div>');

            // Give restaurants a class of 'listings'
            restaurants.addClass('listings');

            var restaurantName = $('<h3>').text("Restaurant: " + results[i].restaurant.name);
            // for now include the photo URL since there is no specific photo listing

            // Going to include highlights for now
            var highlights = $('<p>').text("Highlights: " + results[i].restaurant.highlights);

            // To view photo, user will have to click on the URL
            var photoURL = $('<p>').text("Photos: " + results[i].restaurant.photos_url);
            var timings = $('<p>').text("Timings: " + results[i].restaurant.timings);
            var phoneNumber = $('<p>').text("Phone Number: " + results[i].restaurant.phone_numbers);
            var websiteURL = $('<p>').text("Website: " + results[i].restaurant.url);
            var address = $('<p>').text("Address: " + results[i].restaurant.location.address);
            var latitude = $('<p>').text("Latitude: " + results[i].restaurant.location.latitude)
            var longitude = $('<p>').text("longitude: " + results[i].restaurant.location.longitude);
            var rating = $('<p>').text('Rating: ' + results[i].restaurant.user_rating.aggregate_rating);

            // Appending the new items to the new div restaurants
            restaurants.append(restaurantName, highlights, photoURL, timings, phoneNumber, websiteURL, address, latitude, longitude, rating);

            // Appending the new div to our main divs in the html.
            $('.restaurantName').append(restaurants);
            $('.highlights').append(restaurants);
            $('.photos').append(restaurants);
            $(".timings").append(restaurants);
            $('.phoneNumbers').append(restaurants);
            $('.url').append(restaurants);
            $('.address').append(restaurants);
            $('.latitude').append(restaurants);
            $('.longitude').append(restaurants);
            $('.rating').append(restaurants);
        }
    });


});