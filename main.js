var app = angular.module("todoApp", []);

app.directive('item', function(){
    return {
        restrict: 'E',
        template: '<div class="text-center">' +
        '<h3><li>{{items.toString()}}</li></h3>' +
        '</div>'
    }
});

app.directive('header', function(){
    return {
        restrict: 'E',
        template: '<div class="jumbotron text-center">' +
        '<h1>To-Do List</h1>' +
        '</div>' +
        '<br>'
    }
});

app.directive('inputbox', function(){
    return {
        restrict: 'E',
        template: '<div>' +
        '<input type="text" class="form-control text-center" placeholder="Enter In an Item" ng-model="inputText">' +
        '</div>' +
        '<br>'
    }
});

app.directive('enterbutton', function(){
    return {
        restrict: 'E',
        template: '<div class="text-center">' +
        '<button class="btn btn-info btn-block" style="text-align:center" ng-click="items.push({text:inputText}); inputText=\'\'"> ' +
        '<h3>Add Item</h3>' +
        '</button>' +
        '</div>'
    }
});

app.controller('itemCtrl', function($scope){
    $scope.items=[{text:""}];
    $scope.inputText = "";
});