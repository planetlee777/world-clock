let selectedCityInterval; // To store the interval for the selected city

function updateTime() {
	// Los Angeles
	let losAngelesElement = document.querySelector("#los-angeles");
	if (losAngelesElement) {
		let losAngelesDateElement = losAngelesElement.querySelector(".date");
		let losAngelesTimeElement = losAngelesElement.querySelector(".time");
		let losAngelesTime = moment().tz("America/Los_Angeles");

		losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
		losAngelesTimeElement.innerHTML = losAngelesTime.format(
			"h:mm:ss [<small>]A[</small>]"
		);
	}

	// Paris
	let parisElement = document.querySelector("#paris");
	if (parisElement) {
		let parisDateElement = parisElement.querySelector(".date");
		let parisTimeElement = parisElement.querySelector(".time");
		let parisTime = moment().tz("Europe/Paris");

		parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
		parisTimeElement.innerHTML = parisTime.format(
			"h:mm:ss [<small>]A[</small>]"
		);
	}
}

function updateCity(event) {
	let cityTimeZone = event.target.value;

	// If the "current" option is selected, guess the local timezone
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}

	// Clear the previous interval to avoid multiple intervals running
	if (selectedCityInterval) clearInterval(selectedCityInterval);

	// Get the city name and time
	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let citiesElement = document.querySelector("#cities");

	// Function to update the selected city's time
	function updateSelectedCityTime() {
		let cityTime = moment().tz(cityTimeZone);
		citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
					"h:mm:ss"
				)} <small>${cityTime.format("A")}</small></div>
      </div>
      <a href="index.html">All Cities</a>
      `;
	}

	// Call it once to update immediately
	updateSelectedCityTime();

	// Then set an interval to update every second
	selectedCityInterval = setInterval(updateSelectedCityTime, 1000);
}

// Update Los Angeles and Paris initially
updateTime();
setInterval(updateTime, 1000); // Update every second

// Handle city selection change
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
