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
    $('#santoral').bind('click',msgsanto);
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
                if(data.santoral!=null){
                  localStorage.setItem('santayer',data.santoral.ayer);
                  localStorage.setItem('santhoy',data.santoral.hoy);
                  localStorage.setItem('santman',data.santoral.maniana);
            if(data.santoral.hoy.toUpperCase().indexOf(user.toUpperCase())>=0){
                     localStorage.setItem('saludo','Felicidades por estar de Santo');
                }else{
                    if(data.santoral.ayer.toUpperCase().indexOf(user.toUpperCase())>=0){
                     localStorage.setItem('saludo','Felicidades por haber estado de Santo ayer');
                }else{
                    if(data.santoral.maniana.toUpperCase().indexOf(user.toUpperCase())>=0){
                     localStorage.setItem('saludo','Felicidades estarás de Santo mañana');
                }else{
                    localStorage.setItem('saludo', 'Tu nombre no coincide con los santos')
                }
                }
                }
                }else{
                    localStorage.setItem('santayer',"Santoral no registrado");
                  localStorage.setItem('santhoy',"Santoral no registrado");
                  localStorage.setItem('santman',"Santoral no registrado");
                    localStorage.setItem('saludo', "Santoral no registrado")
                }
                if(data.moneda!=null){
                 localStorage.setItem('dolar',data.moneda.dolar);
                  localStorage.setItem('euro',data.moneda.euro);
                }
                else{
		          localStorage.setItem('dolar',"Precio no registrado");
                  localStorage.setItem('euro',"Precio no registrado");
                }
                  if(data.indicador!=null){
                  localStorage.setItem('uf',data.indicador.uf);
                  localStorage.setItem('ipc',data.indicador.ipc);
                  localStorage.setItem('utm',data.indicador.utm);
                  localStorage.setItem('imacec',data.indicador.imacec);
                  }else{
                        localStorage.setItem('uf',"UF no registrado");
                        localStorage.setItem('ipc',"IPC no registrado");
                        localStorage.setItem('utm',"UTM no registrado");
                        localStorage.setItem('imacec',"IMACEC no registrado");
                  }
                if(data.restriccion!=null){
                  localStorage.setItem('normal',data.restriccion.normal);
                  localStorage.setItem('normal_man',data.restriccion.normal_maniana);
                  localStorage.setItem('catalitico',data.restriccion.catalitico);
                }else{
                     localStorage.setItem('normal',"Restriccion no registrada");
                  localStorage.setItem('normal_man',"Restriccion no registrada");
                  localStorage.setItem('catalitico',"Restriccion no registrada");
                }
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

function msgsanto(){
     if(localStorage.getItem('santhoy').toUpperCase().indexOf(localStorage.getItem('user').toUpperCase())>=0){
                        myApp.alert('Felicidades por estar de Santo', 'APP JSON');
     }
    if(localStorage.getItem('santayer').toUpperCase().indexOf(localStorage.getItem('user').toUpperCase())>=0){
                        myApp.alert('Felicidades por haber estado de Santo ayer', 'APP JSON');
     }
    if(localStorage.getItem('santman').toUpperCase().indexOf(localStorage.getItem('user').toUpperCase())>=0){
                        myApp.alert('Felicidades estarás de Santo mañana','APP JSON');
    } 
}
                
