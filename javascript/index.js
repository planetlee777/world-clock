function updateTime() {
	// Los Angeles
	let losAngelesElement = document.querySelector("#los-angeles");
	if (losAngelesElement) {
		let losAngelesDateElement = losAngelesElement.querySelector(".date");
		let losAngelesTimeElement = losAngelesElement.querySelector(".time");
		let losAngelesTime = moment().tz("America/Los_Angeles");

		losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
		losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss - A");
	}

	// Paris
	let parisElement = document.querySelector("#paris");
	if (parisElement) {
		let parisDateElement = parisElement.querySelector(".date");
		let parisTimeElement = parisElement.querySelector(".time");
		let parisTime = moment().tz("Europe/Paris");

		parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
		parisTimeElement.innerHTML = parisTime.format("h:mm:ss - A");
	}

	// Tokyo
	let tokyoElement = document.querySelector("#tokyo");
	if (tokyoElement) {
		let tokyoDateElement = tokyoElement.querySelector(".date");
		let tokyoTimeElement = tokyoElement.querySelector(".time");
		let tokyoTime = moment().tz("Asia/Tokyo");

		tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
		tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss - A");
	}
}

function updateCity(event) {
	let cityTimeZone = event.target.value;

	// Handle current location
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}

	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesElement = document.querySelector("#cities");

	// Display selected city time
	citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format(
				"h:mm:ss"
			)} - <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">All Cities</a>
  `;

	// Keep updating the time for the selected city
	setInterval(function () {
		let updatedCityTime = moment().tz(cityTimeZone);
		citiesElement.querySelector(".date").innerHTML =
			updatedCityTime.format("MMMM Do YYYY");
		citiesElement.querySelector(".time").innerHTML = `${updatedCityTime.format(
			"h:mm:ss"
		)} - <small>${updatedCityTime.format("A")}</small>`;
	}, 1000);
}

// Initial time update for fixed cities
updateTime();
setInterval(updateTime, 1000); // Update time every second

// Add event listener for city selection
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
