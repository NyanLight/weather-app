const API_KEY = "DGY8RG748CBYHNVJKCJSKWMHL";

async function getData(city = "Moscow", unit = "metric") {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}&unitGroup=${unit}`
  );
  return data.json();
}

async function getForecast(city) {
  const data = await getData(city);
  [currentTemp, currentFeels, currentIcon] = getCurrentData(data);
  [todayMin, todayMax, todayIcon] = getDailyData(0, data);
  [tomorrowMin, tomorrowMax, tomorrowIcon] = getDailyData(1, data);
  return {
    current: [currentTemp, currentFeels, currentIcon],
    today: [todayMin, todayMax, todayIcon],
    tomorrow: [tomorrowMin, tomorrowMax, tomorrowIcon],
  };
}

function getCurrentData(data) {
  const today = new Date();
  const currentHour = today.getHours();
  for (const hour of data.days[0].hours) {
    if (currentHour == hour.datetime.slice(0, 2)) {
      return [hour.temp, hour.feelslike, hour.icon];
    }
  }
}

function getDailyData(index, data) {
  return [
    data.days[index].tempmin,
    data.days[index].tempmax,
    data.days[index].icon,
  ];
}

getForecast();
