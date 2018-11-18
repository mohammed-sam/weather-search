$("#form").on("submit", e => {
  e.preventDefault();
  let s = $("#input").val();
  //   console.log(s);
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      s +
      "&units=metric&appid=9bf53e893261d3643f1fed66bfe9b5bd",
    type: "GET",
    dataType: "json",
    success: data => {
      console.log(data);
      convertHTML(data);
    },
    error: () => {
      alert("Sorry: not found");
    }
  });
});
function convertHTML(data2) {
  // let obj = JSON.stringify(data2);

  let print1 = document.getElementById("deg");
  let print2 = document.getElementById("humi");
  let print3 = document.getElementById("speed");
  let print4 = document.getElementById("disco");
  let print5 = document.getElementById("locate");
  console.log(data2.wind.speed);

  // print.insertAdjacentHTML("beforeend", data2);
  let celsius = data2.main.temp;
  print1.innerHTML = celsius + "<sup>°C </sup>";
  print2.innerHTML = data2.main.humidity + " %";
  print3.innerHTML = data2.wind.speed + " km";
  print4.innerHTML = data2.weather[0].description;
  print5.innerHTML = data2.name + " ," + data2.sys.country;

  // let fog = "url(./css/img/fog.jpg)";
  // let scatteredClouds = "url(./css/img/scattered.jpeg)";
  // let rain = "url(./css/img/rainy.png)";
  // let lightRain = "url(./css/img/light_rain.jpg)";
  // let fewClouds = "url(./css/img/few_clouds.jpg)";
  // let clear = "url(./css/img/clear.jpg)";
  // let snow = "url(./css/img/snow.jpg)";
  // let cloudy = "url(./css/img/cloudy.jpg)";
  let mainDiv = $(".main-div");
  if (
    data2.weather[0].description === "fog" ||
    data2.weather[0].description === "mist" ||
    data2.weather[0].description === "haze"
  ) {
    $(".main-div").removeClass(
      "scatteredClouds cloudy rain lightRain fewClouds clear snow"
    );
    $(".main-div").addClass("fog");
  }
  if (
    data2.weather[0].description === "scattered clouds" ||
    data2.weather[0].description === "broken clouds"
  ) {
    $(".main-div").removeClass(
      "fog rain cloudy lightRain fewClouds clear snow"
    );
    $(".main-div").addClass("scatteredClouds");
  }
  if (data2.weather[0].description === "rain") {
    $(".main-div").removeClass(
      "fog scatteredClouds cloudy lightRain fewClouds clear snow"
    );
    $(".main-div").addClass("rain");
  }
  if (data2.weather[0].description === "light rain") {
    $(".main-div").removeClass(
      "fog scatteredClouds cloudy rain fewClouds clear snow"
    );
    $(".main-div").addClass("lightRain");
  }
  if (data2.weather[0].description === "few clouds") {
    $(".main-div").removeClass(
      "fog cloudy scatteredClouds rain lightRain clear snow"
    );
    $(".main-div").addClass("fewClouds");
  }
  if (
    data2.weather[0].description === "clear" ||
    data2.weather[0].description === "clear sky"
  ) {
    $(".main-div").removeClass(
      "fog cloudy scatteredClouds rain lightRain fewClouds snow"
    );
    $(".main-div").addClass("clear");
  }
  if (data2.weather[0].description === "snow") {
    $(".main-div").removeClass(
      "fog cloudy scatteredClouds rain lightRain fewClouds clear"
    );
    $(".main-div").addClass("snow");
  }
  if (data2.weather[0].description === "cloudy") {
    $(".main-div").removeClass(
      "fog scatteredClouds rain snow lightRain fewClouds clear"
    );
    $(".main-div").addClass("cloudy");
  }
  if (data2.weather[0].description === "overcast clouds") {
    $(".main-div").removeClass(
      "cloudy fog scatteredClouds rain snow lightRain fewClouds clear"
    );
    $(".main-div").addClass("overcast-clouds");
  }
}
