//بسم الله الرحمن الرحيم
// let counter = 1;
// btn.addEventListener("click", () => {
//   let myRequest = new XMLHttpRequest();
//   myRequest.open(
//     "GET",
//     "https://jsonplaceholder.typicode.com/users/" + counter
//   );
//   myRequest.send();
//   counter++;
//   if (counter > 11) {
//     alert("asd");
//   }
//   myRequest.onload = () => {
//     let data = JSON.parse(myRequest.responseText);

//     let print = document.getElementById("animal-info");
//     let obj = "";
//     for (i = 0; i < data.length; i++) {
//       //   print.innerHTML += "<li>" + data[i].name + "</li>";
//       //   obj += "<br>" + i + " " + data[i].name;
//     }
//     console.log(data);
//     print.insertAdjacentHTML("beforeend", obj);
//   };
// });
$("#btn-input").click(() => {
  //   let s = $("#input").val();
  //   console.log(s);
  $.ajax({
    url: "https://samples.openweathermap.org/data/2.5/weather?q=london",
    //url: "https://thesimpsonsquoteapi.glitch.me/quotes?count=2",

    type: "GET",
    dataType: "json",
    success: data => {
      console.log(data);
    },

    error: error => {
      alert(error);
    }
  });
});
function convertHTML(data2) {
  console.log(data2[0]);
  //   let obj = "";
  //   let print = document.getElementById("animal-info");
  //   for (i = 0; i < data2.length; i++) {
  //     print.innerHTML +=
  //       "<li>" + data2[i].name + "<img src=" + data2[i].image + ">" + "</li>";
  //     // obj += "<br>" + i + " " + data2[i].quote;
  //   }
}
