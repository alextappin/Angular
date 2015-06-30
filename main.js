var app = angular.module("todoApp", ['ui.sortable']);

app.directive('item', function(){
    return {
        restrict: 'E',
        template:
            '<ul as-sortable="sortableOptions" ng-model="items">' +
            '<div ng-repeat="item in items | filter:search | filter:filterOptions" as-sortable-item>' +
            '<div ng-if="!item.done && item.text.length !=0">' +
            '<ul as-sortable-item-handle class="itemShow"><li>' +
            '<div class="text-center" style="padding-right: 15px">'+
            '<input type=checkbox style="float: left" class="glyphicon glyphicon-unchecked" ng-click="item.done = true; doneCountUp()">' +
            '<span ng-style="item.colorText" style="padding-left: 47px; word-break: break-all; word-wrap: break-word;">' +
            '{{item.text}}' +
            '</span>' +
            '<colorbar></colorbar>' +
            '<input type=checkbox style="float: right" class="hoverDelete glyphicon glyphicon-remove-circle" ng-click="items.splice($index,1);">' +
            '<input type=checkbox style="float: right; margin-right: 20px" class="hoverDelete glyphicon glyphicon-cog" ng-click="clickEdit(item)">' +
            '</div>' +
            '</li></ul>' +
            '</div>' +
            '</div>' +
            '</ul>'
    }
});

app.directive("doneitem", function(){
    return {
        restrict: 'E',
        template:
            '<ul as-sortable="sortableOptions" ng-model="items">' +
            '<div ng-repeat="item in items | filter:search | orderBy:filterOptions" as-sortable-item ng-if="collapse==false">' +
            '<div ng-if="item.done && item.text.length !=0">' +
            '<ul as-sortable-item-handle class="itemShow"><li>' +
            '<div class="text-center" style="padding-right: 15px; text-decoration: line-through";>'+
            '<input type=checkbox style="float: left" class="glyphicon glyphicon-check" ng-click="item.done = false; doneCountDown()" ng-checked="true">' +
            '<span ng-style="item.colorText" style="color: rgb(10,50,50); opacity: .5; padding-left: 47px; word-break: break-all; word-wrap: break-word;">' +
            '{{item.text}}' +
            '</span>' +
            '<colorbar></colorbar>' +
            '<input type=checkbox style="float: right" class="hoverDelete glyphicon glyphicon-remove-circle" ng-click="items.splice($index,1); doneCountDown()">' +
            '<input type=checkbox style="float: right; margin-right: 20px" class="hoverDelete glyphicon glyphicon-cog" ng-click="clickEdit(item)"> ' +
            '</div>' +
            '</li></ul>' +
            '</div>' +
            '</div>' +
            '<ul>'
    }
});

app.directive('header', function(){
    return {
        restrict: 'E',
        template:
            '<br></bbr><div class="jumbotron text-center" style="opacity:.9">' +
            '<h1>To Do</h1>' +
            '</div>' +
            '<br>'
    }
});

app.directive('inputbox', function(){
    return {
        restrict: 'E',
        template:
            '<br><div>' +
            '<input type="text" class="form-control text-center" placeholder="Enter In an Item" ng-model="inputText">' +

            '</div>' +
            '<br>'
    }
});

app.directive('enterbox', function(){
    return {
        restrict: 'E',
        template:
            '<div class="text-center">' +
            '<button class="btn btn-info btn-block" style="text-align:center" ng-click="items.push({text:inputText, done:false, colorText:{color:\'black\'}}); inputText=\'\';"> ' +
            '<h3>Add Item</h3>' +
            '</button>' +
            '</div>'
    }
});

app.directive('welcomemessage', function(){
    return {
        restrict: 'E',
        template:
            '<div ng-if="inputText.length == 0 && items.length == 0">' +
            '<h2 style="text-align: center; color: rgba(200,0,5,.5)">Please Do Something</h2>' +
            '</div>'
    }
});

app.directive('app', function(){
    return {
        restrict: 'E',
        template:
            '<body>' +
            '<div class="container">' +
            '<header></header>' +
            '<item></item>' +
            '<collapse></collapse>' +
            '<doneitem></doneitem>' +
            '<form>' +
            '<inputbox></inputbox>' +
            '<enterbox></enterbox>' +
            '<searchbar></searchbar>' +
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

app.directive('searchbar', function(){
   return {
       restrict: 'E',
       template:
           '<div ng-if="getSearch()"> <br>' +
           '<input type=checkbox ng-hide="!getSearch()" style="margin-left: -20px; margin-top: 20px; text-align: left" class="glyphicon glyphicon-minus" ng-click="clickHide()" ng-checked="false"> ' +
           '<span style="padding-left: 5px; font-size: 1.1em; color: rgb(10,50,50); opacity: .8">Hide</span><filtermenu></filtermenu><br><br>' +
           '<input type="text" class="form-control text-center input-lg" style="width: 30%;" placeholder="Search" ng-model="$parent.search">' +
           '</div>' +
           '<div ng-if="!getSearch()"> <br>' +
           '<input type=checkbox ng-hide="getSearch()" style="margin-left: -20px; margin-top: 20px; text-align: left" class="glyphicon glyphicon-search" ng-click="clickShow()" ng-checked="true">' +
           '<span style="padding-left: 5px; font-size: 1.1em; color: rgb(10,50,50); opacity: .8">Search</span><filtermenu></filtermenu>' +
           '</div>'
   }
});

app.directive('colorbar', function(){
    return {
        restrict: 'E',
        template:
            '<span style="font-size: .9em" ng-if="item.edit">' +
            '<input type=checkbox style="float: right; margin-right: -30px; margin-top: 3px; color: red" class="glyphicon glyphicon-tint" ng-click="changeColor($index, \'red\')">' +
            '<input type=checkbox style="float: right; margin-right: -50px; margin-top: 3px; color: blue" class="glyphicon glyphicon-tint" ng-click="changeColor($index, \'blue\')">' +
            '<input type=checkbox style="float: right; margin-right: -70px; margin-top: 3px; color: green" class="glyphicon glyphicon-tint" ng-click="changeColor($index, \'green\')">' +
            '<input type=checkbox style="float: right; margin-right: -90px; margin-top: 3px; color: yellow" class="glyphicon glyphicon-tint" ng-click="changeColor($index, \'yellow\')">' +
            '<input type=checkbox style="float: right; margin-right: -110px; margin-top: 3px; color: black" class="glyphicon glyphicon-tint" ng-click="changeColor($index, \'black\')">' +
            '</span>'
    }
});

app.directive('filtermenu', function(){
    return {
        restrict: 'E',
        template:
            '<span ng-if="!getFilter()">' +
            '<input type=checkbox style="margin-left: 33%;" class="glyphicon glyphicon-filter" ng-click="clickFilter()">' +
            '<span style="padding-left: 5px; font-size: 1.1em; color: rgb(10,50,50); opacity: .8">Filter</span>' +
            '</span>' +
            '<span ng-if="getFilter()">' +
            '<input type=checkbox style="margin-left: 33%;" class="glyphicon glyphicon-minus" ng-click="clickFilter()">' +
            '<span style="padding-left: 5px; font-size: 1.1em; color: rgb(10,50,50); opacity: .8">Hide</span>' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 2%;" class="glyphicon glyphicon-sort-by-alphabet" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 2%;" class="glyphicon glyphicon-sort-by-alphabet-alt" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 2%;" class="glyphicon glyphicon glyphicon-time" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 2%;" class="glyphicon glyphicon-sort-by-attributes" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 2%;" class= "glyphicon glyphicon-sort-by-attributes-alt" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 1.5%; color: red" class="glyphicon glyphicon-tint" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 1.5%; color: blue" class="glyphicon glyphicon-tint" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 1.5%; color: green" class="glyphicon glyphicon-tint" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 1.5%; color: yellow" class="glyphicon glyphicon-tint" ng-click="">' +
            '<input type=checkbox style="top: 25px; font-size: 1.5em; margin-left: 1.5%; color: black" class="glyphicon glyphicon-tint" ng-click="">' +
            '</span>'
    }
});

app.controller('itemCtrl', function($scope){
    $scope.items=[{text:"Example Item", done:false, colorText: {'color':'red'}, timeStamp: "", edit:false}];
    $scope.inputText = "";
    $scope.search;
    $scope.showSearch = true;
    $scope.collapse = true;
    $scope.counter = 0;
    $scope.color = {'color': 'blue'};
    $scope.edit = false;
    $scope.filter = false;

    console.log($scope.counter);

    $scope.clickPlus = function(){
        $scope.collapse = false;
    };
    $scope.clickMinus = function(){
        $scope.collapse = true;
    };
    $scope.getCollapse = function(){
        return $scope.collapse;
    };
    $scope.doneCountUp = function(){
        $scope.counter += 1;
        console.log($scope.counter);
    };
    $scope.doneCountDown = function(){
        if($scope.counter > 0)
            $scope.counter -= 1;
        console.log($scope.counter);
    };
    $scope.getSearch = function(){
        return $scope.showSearch;
    };
    $scope.clickShow = function(){
        $scope.showSearch = true
    };
    $scope.clickHide = function() {
        $scope.showSearch = false;
    };
    $scope.getSearchModel = function() {
        return $scope.search;
    };
    $scope.clickEdit = function(itemText){
        itemText.edit = !itemText.edit;
    };
    $scope.changeColor = function(index, textColor){
        $scope.items[index].colorText.color = textColor.toString();
    };
    $scope.getFilter = function(){
        return $scope.filter;
    };
    $scope.clickFilter = function(){
        $scope.filter = !$scope.filter;
    };
});