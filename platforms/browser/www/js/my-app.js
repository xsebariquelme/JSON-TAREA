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

    if(user.length > 0 ){
        location.pathname="main.html";
              $.ajax({
          dataType: 'json',
          type: 'POST',
            data: {
              ayer: santayer,
              hoy: santhoy,
                maniana: santman,
                dolar: dolar,
                euro: euro,
                uf: uf,
                ipc: ipc,
                utm: utm,
                imacec: imacec,
                normal: normal,
                normal_maniana:normal_man,
                catalitico: catalitico
              
          },
          url: 'http://indicadoresdeldia.cl/webservice/indicadores.json',
          success: function (data, status, xhr) {
              if(data.resp === true){
                  localStorage.setItem('santayer',data.data.ayer);
                  localStorage.setItem('santhoy',data.data.hoy);
                  localStorage.setItem('santman',data.data.maniana);
                  localStorage.setItem('dolar',data.data.dolar);
                  localStorage.setItem('euro',data.data.euro);
                  localStorage.setItem('uf',data.data.uf);
                  localStorage.setItem('ipc',data.data.ipc);
                  localStorage.setItem('utm',data.data.utm);
                  localStorage.setItem('imacec',data.data.imacec);
                  localStorage.setItem('normal',data.data.normal);
                  localStorage.setItem('normal_man',data.data.normal_man);
                  localStorage.setItem('catalitico',data.data.catalitico);
                  myApp.hidePreloader();
                  window.location = "main.html";
              }else{
                  myApp.hidePreloader();var msg = data.info;
                  myApp.alert(msg,'Error');;
              }
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

