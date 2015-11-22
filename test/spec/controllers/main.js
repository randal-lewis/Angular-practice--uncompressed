'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should be able to add items to list', function () {
    var origLen = scope.todos.length; 
    scope.todo = 'Test 001';
    scope.addTodo();
    expect(scope.todos.length).toBe(origLen + 1);
  });

  it('should be able to remove items from list', function () {
    scope.todo = 'Test 002';
    scope.addTodo();
    var newLen = scope.todos.length; 
    scope.removeTodo(newLen - 1);
    expect(scope.todos.length).toBe(newLen - 1);
  });
});
