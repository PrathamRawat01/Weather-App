const apikey = "da253d5c6d1a6d8c9e8c04e7c11f350d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi";

async function checkweather(){
  const response = await fetch(apiurl + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);
}

checkweather() =>
;