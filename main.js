var app = angular.module("todoApp", []);

app.directive('item', function(){
    return {
        restrict: 'E',
        template: '<div class="text-center">' +
        '<h3><ul><li ng-repeat="item in items">{{item.text}}</li></ul></h3>' +
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

app.directive('enterbox', function(){
    return {
        restrict: 'E',
        template: '<div class="text-center">' +
        '<button class="btn btn-info btn-block" style="text-align:center" ng-click="items.push({text:inputText}); inputText=\'\'"> ' +
        '<h3>Add Item</h3>' +
        '</button>' +
        '</div>'
    }
});

app.directive('app', function(){
    return {
        restrict: 'E',
        template: '<body>' +
            '<div class="container">' +
            '<header></header>' +
            '<item></item>' +
            '<form>' +
            '<inputbox></inputbox>' +
            '<enterbox></enterbox>' +
            '</form>' +
            '</div>' +
            '</body>'
    }
});

app.controller('itemCtrl', function($scope){
    $scope.items=[{text:"", done:false}];
    $scope.inputText = "";
});