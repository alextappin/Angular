var app = angular.module("todoApp", []);

app.directive('item', function(){
    return {
        restrict: 'E',
        template: '<div ng-repeat="item in items">' +
            '<div ng-if="!item.done && item.text.length !=0">' +
            '<h3><ul><li>' +
            '<div class="text-center" style="padding-right: 15px">'+
            '<input type=checkbox style="float: left" class="glyphicon glyphicon-unchecked" ng-click="item.done = true; doneCountUp()">' +
            '<span style="padding-left: 13px; word-break: break-all; word-wrap: break-word;">' +
            '{{item.text}}' +
            '</span>' +
            '<input type=checkbox style="float: right" class="hoverDelete glyphicon glyphicon-remove-sign" ng-click="items.splice($index,1); doneCountDown()">' +
            '</div>' +
            '</li></ul></h3>' +
            '</div>' +
            '</div>'
    }
});

app.directive("doneitem", function(){
    return {
        restrict: 'E',
        template: '<div ng-repeat="item in items" ng-if="collapse==false">' +
            '<div ng-if="item.done && item.text.length !=0">' +
            '<h3><ul><li>' +
            '<div class="text-center" style="padding-right: 15px; text-decoration: line-through";>'+
            '<input type=checkbox style="float: left" class="glyphicon glyphicon-check" ng-click="item.done = false; doneCountDown()" ng-checked="true">' +
            '<span style="color: rgb(10,50,50); opacity: .5; padding-left: 13px; word-break: break-all; word-wrap: break-word;">' +
            '{{item.text}}' +
            '</span>' +
            '<input type=checkbox style="float: right" class="hoverDelete glyphicon glyphicon-remove-sign" ng-click="items.splice($index,1); doneCountDown()">' +
            '</div>' +
            '</li></ul></h3>' +
            '</div>' +
            '</div>'
    }
});

app.directive('header', function(){
    return {
        restrict: 'E',
        template: '<br></bbr><div class="jumbotron text-center" style="opacity:.9">' +
            '<h1>To Do</h1>' +
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

app.directive('welcomemessage', function(){
    return {
        restrict: 'E',
        template: '<div ng-if="inputText.length == 0 && items.length == 0">' +
        '<h2 style="text-align: center; color: rgba(200,0,5,.5)">Please Do Something</h2>' +
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
            '<collapse></collapse>' +
            '<doneitem></doneitem>' +
            '<form>' +
            '<inputbox></inputbox>' +
            '<enterbox></enterbox>' +
            '<welcomemessage></welcomemessage>' +
            '</form>' +
            '</div>' +
            '</body>'
    }
});

app.directive('collapse', function(){
   return {
       restrict: 'E',
       template:
           '<div ng-if="counter > 0">' +
           '<input type=checkbox ng-hide="!getCollapse()" style="margin-left: -20px; margin-top: 20px; text-align: left" class="glyphicon glyphicon-plus" ng-click="clickPlus()" ng-checked="false">' +
           '<input type=checkbox ng-hide="getCollapse()" style="margin-left: -20px; margin-top: 20px; text-align: left" class="glyphicon glyphicon-minus" ng-click="clickMinus()" ng-checked="true">' +
           '<span style="padding-left: 5px; font-size: 1.1em; color: rgb(10,50,50); opacity: .8" ng-if="!getCollapse()">Hide</span>' +
           '<span style="padding-left: 5px; font-size: 1.1em; color: rgb(10,50,50); opacity: .8" ng-if="getCollapse()">Show</span>' +
           '</div>'
   }
});

app.controller('itemCtrl', function($scope){
    $scope.items=[{text:"Example Item", done:false}];
    $scope.inputText = "";
    $scope.collapse = true;
    $scope.clickPlus = function(){
      $scope.collapse = false;
    };
    $scope.clickMinus = function(){
        $scope.collapse = true;
    };
    $scope.getCollapse = function(){
        return $scope.collapse;
    };
    $scope.counter = 0;
    $scope.doneCountUp = function(){
        $scope.counter += 1;
    };
    $scope.doneCountDown = function(){
        if($scope.counter > 0)
            $scope.counter -= 1;
    };

});