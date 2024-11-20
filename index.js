import { buttonHandler, getForecastBtn } from "./dom.js";

getForecastBtn.addEventListener("click", buttonHandler);

buttonHandler("London", "metric");
