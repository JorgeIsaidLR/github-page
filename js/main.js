//alert("Hola mundo");
// Hacer una petición para un usuario con ID especifico


let ipCliente = document.getElementById('ipCliente');
let country_name=document.getElementById('country_name');
let continent_name=document.getElementById('continent_name');
let current_time=document.getElementById('current_time');


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
