define(["../modules"],function(md){
    md.controller("contactCtrl",["$scope","$rootScope","contacts",function ($scope,$rootScope,contacts) {
        var root = $rootScope;
        root.contacts = true;
        contacts.all().then(function (data) {
            $scope.contactsList = data;
        });

    }]);
});