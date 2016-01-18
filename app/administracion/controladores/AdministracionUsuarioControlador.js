(function(app){
  'use strict'
  var AdministracionUsuarioControlador, ParametrosControlador;

  //Controlador
  AdministracionUsuarioControlador=function($scope){
    $scope.prueba="Que paso muchacho";
  };

  //Parametros del Controlador
  ParametrosControlador=[
  '$scope'
  , AdministracionUsuarioControlador
  ];

  //Declaracion Controlador
  app.controller('AdministracionUsuarioControlador',ParametrosControlador);


})(window.MyWalletApp);