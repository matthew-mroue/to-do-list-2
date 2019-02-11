"use strict";
function TodoFunction() {
  const vm = this;
  vm.todoArray = [];

  vm.addTask = function(newTodo) {
    console.log(`hello`)
    newTodo.completed = false;
    vm.todoArray.push(angular.copy(newTodo));
    vm.newTodo = {};
  }
  vm.removeTask = function(index) {
    vm.todoArray.splice(index, 1);
  }
  vm.completeTask = function(index) {
    vm.todoArray(index).completed = true;
  }
}


// getter syntax to retrieve the module called todoApp
angular
  .module("todoApp", ["xeditable"])
  // Building a controller. The first argument is the name of the controller. The second argument is the function reference.
  .controller("TodoController", TodoFunction);