const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('dist'));

app.get('/api/cars/:registrationPlate', (req, res) => {
    const registrationPlate = req.params.registrationPlate;
    const apiUrl = `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles/${registrationPlate}`;

    axios
    .get(apiUrl)
    .then((response) => {
        const carData = response.data;
        res.json(carData);
    })
    .catch((error) => {
        console.error('Error retrieving car information:', error);
        res.status(500).json({error: 'An error occurred while retrieving car information'});
    });
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});