(function(){
	var app = angular.module('listaTareas', [ ]);
    
  app.controller('ListaController', function(){
		this.tareas = tareas;
		this.nuevaTarea = '';
		
		this.agregaTarea = function(){
			this.tareas.push({nombre: this.nuevaTarea, realizada: false});
			this.nuevaTarea = '';
		};
		this.limpiarRealizadas = function(){
			var aux = [];
			angular.forEach(this.tareas, function(tarea){
				if (tarea.realizada == false){
					aux.push(tarea);
				}
			});
			this.tareas = aux;
		}
	});
	
	
	var tareas = [
		{
			nombre: 'comprar leche',
      realizada: false,
		},
    {
      nombre: 'salir a trotar',
      realizada: false,
		},
		{
      nombre: 'aprender bootstrap',
      realizada: true,
		},
		{
      nombre: 'subir la pagina a github',
      realizada: true,
		}
	];
})();