var today = new Date();
var currentHour = today.getHours();
var greeting;
var currentMin = today.getMinutes();
var currentTime = currentHour + ":" + currentMin;

if (currentHour >= 18) {
    greeting = 'good evening!';
} else if (currentHour > 12) {
    greeting = 'good afternoon!';
} else if (currentHour > 0) {
    greeting = 'good morning!';
} else {
    greeting = 'good day!';
}

document.write('<p class= "jstext">' + "It's currently " + currentTime + ", so I bid you " + greeting + '</p>');
