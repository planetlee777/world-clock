let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment();

losAngelesDateElement.innerHTML = losAngelesTime().format("MMM Do YYYY");
losAngelesTimeElement.innerHTML = "1:49:15<small>AM</small>";
