const ul = document.getElementById("geoIp");
const geoIpUrl = `https://freegeoip.app/json/`;

function getGeoIP(ip) {
  fetch(geoIpUrl)
    .then(res => res.json())
    .then(geoIp => {
      ip = geoIp;
      console.log(ip.country_code);
      const body = document.querySelector("body");
      const wrapper = document.querySelector(".wrapper");
      const findMeHeading = document.querySelector("#heading");
      findMeHeading.innerHTML = `Hello <span>visitor</span>!<br/>
      Click on link below to find your location on <span>Google Open Street Maps</span>:`;
      const status = document.querySelector("#status");
      const mapLink = document.querySelector("#map-link");
      mapLink.href = ``;
      mapLink.textContent = ``;
      const div = document.querySelector(".center");
      div.innerHTML = `
        The <span>name</span> of the <span>country</span> you are hailing from is <span class="data">${ip["country_name"]}</span>.<br/>
        Your <span>state code</span> is <span class="data">${ip["region_code"]}</span>.<br/>
        Your <span>state</span> is <span class="data">${ip["region_name"]}</span>.<br/>
        Your <span>city</span> is <span class="data">${ip["city"]}</span>.<br/>  
        Your <span>zip code</span> is <span class="data">${ip["zip_code"]}</span>.<br/>
        Your <span>time zone</span> is <span class="data">${ip["time_zone"]}</span>.<br/>
        Your <span>latitude</span> is <span class="data">${ip["latitude"]}</span>.<br/>
        Your <span>longitude</span> is <span class="data">${ip["longitude"]}</span>.<br/>
        Your <span>metro code</span> is <span class="data">${ip["metro_code"]}</span>.<br/>
        Your <span>ip address</span> associated with your <span>city</span> is <span class="data">${ip["ip"]}</span>.<br/>`;
      function geoSuccess(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        status.textContent = ``;
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Your Coordinates are Latitude: ${latitude} ° and Longitude: ${longitude} °`;
      }
      function error() {
        status.textContent = `Geolocation is not supported by your browser`;
        console.log(`the status ${status}`);
      }
      if (!navigator.geolocation) {
        status.textContent = `Geolocation is not supported by your browser.`;
      } else {
        status.textContent = `Locating...`;
        navigator.geolocation.getCurrentPosition(geoSuccess, error);
      }
      if (body.className !== "backgroundSkyblue") {
        body.classList.add("backgroundSkyblue");
        wrapper.classList.add("show-scrollbar");
      } else if (body.className === "backgroundSkyblue") {
        body.classList.remove("backgroundSkyblue");
        body.style.backgroundColor = "#f08850";
        wrapper.style.display = "none";
        wrapper.classList.remove(".show-scrollbar");
      } else {
        body.classList.add("backgroundSkyblue");
        wrapper.style.display = "block";
        wrapper.classList.add(".show-scrollbar");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function refresh() {
  document.location.reload();
}

const btnRefresh = document.getElementById("refresh-me");
btnRefresh.textContent = `Refresh me!`.trim();
btnRefresh.addEventListener("mousedown", refresh);

const btnSuccess = document.querySelector("#find-me");
btnSuccess.textContent = `Find me!`.trim();
btnSuccess.addEventListener("mousedown", getGeoIP);
