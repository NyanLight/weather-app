import { getForecast } from "./api.js";

export const getForecastBtn = document.getElementById("getForecastBtn");
const cityInput = document.getElementById("cityInput");
const currentIcon = document.getElementById("currentIcon");
const currentTemp = document.getElementById("currentTemp");
const currentFeels = document.getElementById("currentFeels");
const todayMin = document.getElementById("todayMinTemp");
const todayMax = document.getElementById("todayMaxTemp");
const todayIcon = document.getElementById("todayIcon");
const tomorrowMin = document.getElementById("tomorrowMinTemp");
const tomorrowMax = document.getElementById("tomorrowMaxTemp");
const tomorrowIcon = document.getElementById("tomorrowIcon");

export async function buttonHandler() {
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const city = cityInput.value;
  const forecast = await getForecast(city, unit);
  console.log(currentTemp);
  currentTemp.textContent = forecast.current[0];
  currentFeels.textContent = forecast.current[1];
  currentIcon.src = `assets/${forecast.current[2]}.svg`;
  todayMin.textContent = forecast.today[0];
  todayMax.textContent = forecast.today[1];
  todayIcon.src = `assets/${forecast.today[2]}.svg`;
  tomorrowMin.textContent = forecast.tomorrow[0];
  tomorrowMax.textContent = forecast.tomorrow[1];
  tomorrowIcon.src = `assets/${forecast.tomorrow[2]}.svg`;
}
