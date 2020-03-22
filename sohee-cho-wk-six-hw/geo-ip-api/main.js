const ul = document.getElementById("geoCho");
const geoIpUrl = `https://freegeoip.app/json/`;

function getGeoIp(ip) {
	fetch(geoIpUrl)
		.then(res => res.json())
		.then(geoCho => {
			ip = geoCho;

	const infoHeading = document.querySelector("#heading");
		infoHeading.innerHTML = `Hi there!<br/>
			Click on the link below to find your location on <span>Google Open Maps</span>:`;
	const status = document.querySelector("#status");
	const mapSource = document.querySelector("#map");
		mapSource.href = ``;
		mapSource.textContent = ``;
	const divCenter = document.querySelector(".center");
		divCenter.innerHTML = `
                        The name of the <span>Country</span> you are in is <span class="data">${ip["country_name"]}</span>.<br/>
                        Your <span>State</span>: <span class="data">${ip["region_name"]}</span>.<br/>
                        Your <span>City</span>: <span class="data">${ip["city"]}</span>.<br/>  
						Your <span>IP Address</span> is: <span class="data">${ip["ip"]}</span>.<br/>
						Your <span>Time Zone</span> is: <span class="data">${ip["time_zone"]}</span>.<br/>
						`;
function geoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
			status.textContent = ``;
			mapSource.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
			mapSource.textContent = `Your Coordinates are Latitude: ${latitude} ° and Longitude: ${longitude} °`;
		}
function error() {
			status.textContent = `Geolocation is not supported by your browser.`;
		}
	if(!navigator.geolocation){
			status.textContent = `Geolocation is not supported by your browser.`;
		}
	else{
			status.textContent = `Now locating...`
			navigator.geolocation.getCurrentPosition(geoSuccess, error);
		}
		});
}
function refresh() {
	document.location.reload();
}

const pinPointLocation = document.querySelector("#find_location");
pinPointLocation.addEventListener("mousedown", getGeoIp);

const refreshBtn = document.querySelector("#refresh_page");
refreshBtn.textContent = `Refresh me`.trim();
refreshBtn.addEventListener("mousedown", refresh);
