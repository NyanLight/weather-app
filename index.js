const API_KEY = "DGY8RG748CBYHNVJKCJSKWMHL";

async function getData(city = "Moscow") {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`
  );
  console.log(data.json());
}

getData();
