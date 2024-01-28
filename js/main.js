let country_name = document.getElementById('country_name');

const solicitudAPI = () => {
    // Realizar solicitud al servidor para obtener solo el país
    axios.get('https://itp-bdd-jilr-01.000webhostapp.com/php-geoip-api/get-country.php')
        .then(function (response) {
            // Manejar respuesta exitosa
            console.log(response.data);
            country_name.innerHTML = response.data.country_name;
        })
        .catch(function (error) {
            // Manejar error
            console.log(error);
        });
};

// Llamar a la función al cargar la página
window.addEventListener('load', solicitudAPI);
