define(["../modules"],function (md) {
   md.controller("contactsDetailCtrl",["$scope","$routeParams","contacts",function ($scope,$routeParams,contacts) {
        var id = $routeParams.id;
        contacts.findOne(id).then(function (data) {
            $scope.contact = data;
       });

       $scope.edit = function (item) {
            item.edit = !item.edit;
       }
   }]);
});