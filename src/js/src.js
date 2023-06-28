import {Garage as garage} from "./garage.js";

function start() {
    garage.cars.forEach((car) => {
        const registrationPlate = car.reg;
        const apiUrl = `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles/${registrationPlate}`;

        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const make = data.make;
            const model = data.model;
            const image = data.image;
            const year = data.year;

            car.make = make;
            car.model = model;
            car.image = image;
            car.year = year;

            const carInfoElement = document.createElement("div");
            carInfoElement.innerHTML = `Make: ${make}, Model: ${model}, Year: ${year}`;
            const carImageElement = document.createElement("img");
            carImageElement.src = image;
            carInfoElement.appendChild(carImageElement);
            document.getElementById("car-container").appendChild(carInfoElement);
        })
        .catch((error) => {
            console.error("Error retrieving information for car:", error);
        });
    });
}
window.addEventListener("garage-loaded", start);
