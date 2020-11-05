// Get saved data from sessionStorage
let route_data = sessionStorage.getItem("route_item");
let route_json = JSON.parse(route_data);

let title   = route_json.title; // Your code here
let lat_max = route_json.lat_max;
let lat_min = route_json.lat_min;
let lon_max = route_json.lon_max;
let lon_min = route_json.lon_min;


// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
document.getElementById("title").innerHTML   = title;
document.getElementById("lat_max").innerHTML = lat_max;
document.getElementById("lat_min").innerHTML = lat_min;
document.getElementById("lon_max").innerHTML = lon_max;
document.getElementById("lon_min").innerHTML = lon_min;
