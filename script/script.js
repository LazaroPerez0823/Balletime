// Working setting up cookies
var newDate;

// Previous visits
$.cookie("visits", 20);

// Name of the Cookie with an expiration date
$.cookie('Project', 'Restaurant Finder', { expires: 2 });

$.cookie("name", "Kelvin", { secure: true });

// Testing
console.debug($.cookie("visits"));
console.debug($.cookie("Project"));
console.debug($.cookie("favorite-food"));
console.debug($.cookie("name"));
alert($.cookie("visits"));
alert($.cookie("Project"));
alert($.cookie("name"));

// To remove a cookie
// $.removeCookie("example");