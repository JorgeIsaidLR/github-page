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
  const ip_address = response.data.ipCliente;
    
  const name = document.getElementById('name').value;
  const nickname = document.getElementById('nickname').value;
  const correoelectronico = document.getElementById('correoelectronico').value;
  const FechaNacimiento = document.getElementById('FechaNacimiento').value;
  const age = document.getElementById('age').value;
    
  const formData = {
    country_name: currentCountry,
    ip_address: ip_address,
    name: name,
    nickname: nickname,
    correoelectronico: correoelectronico,
    FechaNacimiento: FechaNacimiento,
    Age: age
  };

   console.log(formData);
   let apiUrl;
  switch (currentCountry) {
        case 'Argentina':
            apiUrl = 'https://api-web-service-argentina.alwaysdata.net/';
            break;
        case 'South Africa':
            apiUrl = 'https://api-web-service-angola.alwaysdata.net/';
            break;
        case 'Italy':
            apiUrl = 'https://api-web-service-francia.alwaysdata.net/';
            break;
        default:
            console.error('País no reconocido');
            return;
    }
    
axios.post(apiUrl, formData, {
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(function (serverPaisResponse) {
        codigoPais.innerHTML = serverPaisResponse.data.Code;
        nombrePais.innerHTML = serverPaisResponse.data.Name;
        continentePais.innerHTML = serverPaisResponse.data.Continent;
        areaSuperficialPais.innerHTML = serverPaisResponse.data.SurfaceArea;
        poblacionPais.innerHTML = serverPaisResponse.data.Population;
        total_users.innerHTML = serverPaisResponse.data.total_users;
        active_sessions.innerHTML = serverPaisResponse.data.active_sessions;
        total_requests.innerHTML = serverPaisResponse.data.total_requests;
        console.log(serverPaisResponse.data);
    })
    .catch(function (serverPaisError) {
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
document.getElementById('enviarBtn').addEventListener('click', solicitudAPI);
window.addEventListener('load', solicitudAPI);
