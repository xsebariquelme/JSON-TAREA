// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', function(){
    $('#user').html('<b> Bienvenido ' + localStorage.getItem('user') + ', seleccione una opcion</b>');
    $('#santayer').html('<b> Santoral de ayer: ' + localStorage.getItem('santayer') + '</b>');
    $('#santhoy').html('<b>Santoral de hoy: ' + localStorage.getItem('santhoy') + '</b>');
    $('#santman').html('<b>Santoral de mañana: ' + localStorage.getItem('santman') + '</b>');
    $('#saludo').html('<b>' + localStorage.getItem('saludo') + '</b>');
    $('#dolar').html('<b>Precio del dolar: ' + localStorage.getItem('dolar') + '</b>');
    $('#euro').html('<b>Precio del euro: ' + localStorage.getItem('euro') + '</b>');
    $('#uf').html('<b>Valor de la UF: ' + localStorage.getItem('uf') + '</b>');
    $('#ipc').html('<b>Valor del IPC: ' + localStorage.getItem('ipc') + '</b>');
    $('#utm').html('<b>Valor de la UTM: ' + localStorage.getItem('utm') + '</b>');
    $('#imacec').html('<b>Valor del IMACEC: ' + localStorage.getItem('imacec') + '</b>');
    $('#normal').html('<b>Restricción normales hoy: ' + localStorage.getItem('normal') + '</b>');
    $('#normal_man').html('<b>Restricción normales mañana: ' + localStorage.getItem('normal_man') + '</b>');
    $('#catalitico').html('<b>Restricción cataliticos: ' + localStorage.getItem('catalitico') + '</b>');


}, false);

