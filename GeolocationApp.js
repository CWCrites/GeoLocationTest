var apiUrl = 'https://freegeoip.app/json/';
fetch(apiUrl).then(response => {
  return response.json();
}).then(data => {
  var returnedData = data
  var latitude = returnedData.latitude
  var longitude = returnedData.longitude
  document.getElementById("ipAddress").innerHTML = returnedData.ip;
  document.getElementById("country").innerHTML = returnedData.country_name;
  document.getElementById("cityState").innerHTML = returnedData.city + ", " + returnedData.region_name;
  document.getElementById("latitude").innerHTML = returnedData.latitude;
  document.getElementById("longitude").innerHTML = returnedData.longitude;
  document.getElementById("mapLink").href = "https://www.latlong.net/c/?lat=" + returnedData.latitude + "&long=" + returnedData.longitude;
}).catch(err => {
  console.log('Something went wrong!')
});
