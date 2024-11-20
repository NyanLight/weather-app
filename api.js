const API_KEY = "DGY8RG748CBYHNVJKCJSKWMHL";

async function getData(city = "Moscow", unit = "metric") {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}&unitGroup=${unit}`
  );
  return data.json();
}

export async function getForecast(city, unit) {
  const data = await getData(city, unit);
  const current = getCurrentData(data);
  const today = getDailyData(0, data);
  const tomorrow = getDailyData(1, data);
  return {
    current: [...current],
    today: [...today],
    tomorrow: [...tomorrow],
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
