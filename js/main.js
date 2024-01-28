let country_name = document.getElementById('country_name');


const solicitudAPI = () => {
    // Realizar solicitud al servidor para obtener el país
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
};

// llama al evento load cada vez que se actulaiza la pagina
// llama a la funcion solicitud que tiene la rutina de llamas a la api desde axios
window.addEventListener('load', solicitudAPI);

