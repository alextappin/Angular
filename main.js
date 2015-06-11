var app = angular.module("todoApp", []);

app.directive('item', function(){
    return {
        restrict: 'E',
        template: '<div ng-repeat="item in items">' +
            '<div ng-if="!item.done">' +
            '<h3><ul><li>' +
            '<div class="text-center" style="padding-right: 15px">'+
            '<input type=checkbox style="margin-top: 10px;float: left" class="glyphicon glyphicon-unchecked" ng-click="item.done = true">' +
            '<span style="padding-left: 13px">' +
            '{{item.text}}' +
            '</span>' +
            '<input type=checkbox style="margin-top: 10px;float: right" class="glyphicon glyphicon-remove-sign" ng-click="items.splice($index,1)">' +
            '</div>' +
            '</li></ul></h3>' +
            '</div>' +
            '</div>'
    }
});

app.directive("doneitem", function(){
    return {
        restrict: 'E',
        template: '<div ng-repeat="item in items">' +
        '<div ng-if="item.done">' +
        '<h3><ul><li>' +
        '<div class="text-center" style="padding-right: 15px; text-decoration: line-through";>'+
        '<input type=checkbox style="margin-top: 10px;float: left" class="glyphicon glyphicon-check" ng-click="item.done = false" ng-checked="true">' +
        '<span style="color: rgb(10,50,50); opacity: .5; padding-left: 13px">' +
        '{{item.text}}' +
        '</span>' +
        '<input type=checkbox style="margin-top: 10px;float: right" class="glyphicon glyphicon-remove-sign" ng-click="items.splice($index,1)">' +
        '</div>' +
        '</li></ul></h3>' +
        '</div>' +
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
        template: '<br><div>' +
            '<input type="text" class="form-control text-center" placeholder="Enter In an Item" ng-model="inputText">' +
            '</div>' +
            '<br>'
    }
});

app.directive('enterbox', function(){
    return {
        restrict: 'E',
        template: '<div class="text-center">' +
            '<button class="btn btn-info btn-block" style="text-align:center" ng-click="items.push({text:inputText, done:false}); inputText=\'\';"> ' +
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
            '<doneitem></doneitem>' +
            '<form>' +
            '<inputbox></inputbox>' +
            '<enterbox></enterbox>' +
            '</form>' +
            '</div>' +
            '</body>'
    }
});

app.controller('itemCtrl', function($scope){
    $scope.items=[{text:"Example Item", done:false}];
    $scope.inputText = "";
});