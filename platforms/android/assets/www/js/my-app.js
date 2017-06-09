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
    $('#sub').bind('click', enviar);
    $("#back").bind('click',back);
}, false);

function open_login(){
    myApp.loginScreen();
}
function back(){
  window.location = "index.html";  
}

function enviar(){
    var user = $('#user').val();
      localStorage.setItem('user',user);
        
        if(user.length>0){
        myApp.showPreloader('Iniciando...');
              $.ajax({
          dataType: 'json',
          type: 'POST',
            data: {
          },
                  
          url: 'http://indicadoresdeldia.cl/webservice/indicadores.json',
          success: function (data, status, xhr) {
              
                  localStorage.setItem('santayer',data.santoral.ayer);
                  localStorage.setItem('santhoy',data.santoral.hoy);
                  localStorage.setItem('santman',data.santoral.maniana);
                if(user.toUpperCase()==data.santoral.hoy.toUpperCase()){
                     localStorage.setItem('saludo','Felicidades por estar de Santo');
                }else{
                    if(user.toUpperCase()==data.santoral.ayer.toUpperCase()){
                     localStorage.setItem('saludo','Felicidades por haber estado de Santo ayer');
                }else{
                    if(user.toUpperCase()==data.santoral.maniana.toUpperCase()){
                     localStorage.setItem('saludo','Felicidades estarás de Santo mañana');
                }else{
                    localStorage.setItem('saludo', 'Tu nombre no coincide con los santos')
                }
                }
                }
              
              
                  localStorage.setItem('dolar',data.moneda.dolar);
                  localStorage.setItem('euro',data.moneda.euro);
                  localStorage.setItem('uf',data.indicador.uf);
                  localStorage.setItem('ipc',data.indicador.ipc);
                  localStorage.setItem('utm',data.indicador.utm);
                  localStorage.setItem('imacec',data.indicador.imacec);
                  localStorage.setItem('normal',data.restriccion.normal);
                  localStorage.setItem('normal_man',data.restriccion.normal_maniana);
                  localStorage.setItem('catalitico',data.restriccion.catalitico);
                  myApp.hidePreloader();
                  window.location = "main.html";
              
              
          },
          error: function (xhr, status) {
              myApp.hidePreloader();
              myApp.alert('Datos Incorrectos2','Error');
          }
      });
        }else{
             myApp.alert('Debe Ingresar los datos solicitados','App JSON');
        }
   
}

