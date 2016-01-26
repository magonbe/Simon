'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function () {
   /*Desde aqui...*/
  $(document).ready(function(){
    
    $("#parrafo").click(function(){
      $("#titulo").text("rojo");
      $("p").hide();
    })
    
    $("#Verde").click(function(){
      $("#Verde").text("Verde");
      $("#Azul").text("");
      $("#Amarillo").text("");
      $("#Rojo").text("");
    })
    
    $("#Rojo").click(function(){
      $("#Rojo").text("Rojo");
      $("#Azul").text("");
      $("#Amarillo").text("");
      $("#Verde").text("");
      
    })
    
      $("#Azul").click(function(){
      $("#Azul").text("Azul");
      $("#Verde").text("");
      $("#Amarillo").text("");
      $("#Rojo").text("");
    })
    
      $("#Amarillo").click(function(){
      $("#Amarillo").text("Amarillo");
      $("#Verde").text("");
      $("#Azul").text("");
      $("#Rojo").text("");
    })
    
    })/*Hasta aqui,sería con la función jquery*/
  
    function envia(valor){
      document.getElementById('titulo').innerHTML= valor;
    }
  });
