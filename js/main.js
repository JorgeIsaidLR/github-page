//alert("Hola mundo");
// Hacer una petición para un usuario con ID especifico

let ipCliente = document.getElementById('ipCliente');
let country_name=document.getElementById('country_name');
let continent_name=document.getElementById('continent_name');
let current_time=document.getElementById('current_time');

let codigoPais = document.getElementById('codigoPais');
let nombrePais = document.getElementById('nombrePais');
let continentePais = document.getElementById('continentePais');
let areaSuperficialPais = document.getElementById('areaSuperficialPais');
let poblacionPais = document.getElementById('poblacionPais');

let total_users = document.getElementById('total_users');
let active_sessions = document.getElementById('active_sessions');
let total_requests = document.getElementById('total_requests');

const solicitudAPI = () => {
  // Coloca aquí el código que deseas ejecutar cuando la página se actualice
  console.log("La página se ha actualizado. Tu código aquí.");
axios.get('https://itp-bdd-jilr-01.000webhostapp.com/php-geoip-api/index.php')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data);
    ipCliente.innerHTML = response.data.ipCliente;
    country_name.innerHTML = response.data.country_name;
    continent_name.innerHTML = response.data.continent_name;
    current_time.innerHTML = response.data.current_time;

    const currentCountry = response.data.country_name;

  switch (currentCountry) {
        case 'Mexico':
            apiUrl = 'https://itp-bdd-jilr-01.000webhostapp.com/API-BIDIRECTIONAL-SERVIDOR_PAIS.php';
            break;
        case 'Argentina':
            apiUrl = 'https://itp-bdd-jilr-01.000webhostapp.com/API-BIDIRECTIONAL-SERVIDOR_PAIS.php';
            break;
        case 'Angola':
            apiUrl = 'https://itp.php';
            break;
        case 'Francia':
            apiUrl = 'https://itp.php';
            break;
        default:
            console.error('País no reconocido');
            return;
    }
    //para enviar los datos
    const serverPaisData = {
      country_name: currentCountry,
      //IRIAN LOS DATOS A ENVIAR PARA POST
    };

    //axios listo 
    axios.get(apiUrl, serverPaisData)
    .then(function (serverPaisResponse) {
        // Manejar respuesta exitosa de la API del servidor país
        codigoPais.innerHTML = serverPaisResponse.data.Code;
        
        nombrePais.innerHTML = serverPaisResponse.data.Name;
        continentePais.innerHTML = serverPaisResponse.data.Continent;
        areaSuperficialPais.innerHTML = serverPaisResponse.data.SurfaceArea;
        poblacionPais.innerHTML = serverPaisResponse.data.Population;

        //IRIA EL AXIOS.GET?

        console.log(serverPaisResponse.data);
    })
    .catch(function (serverPaisError) {
        // Manejar error de la API del servidor país
        console.error(serverPaisError);
    });
    
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
};
// llama al evento load cada vez que se actulaiza la pagina
// llama a la funcion solicitud que tiene la rutina de llamas a la api desde axios
window.addEventListener('load', solicitudAPI);
