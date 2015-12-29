define(["angular"],function (angular) {
   var md = angular.module("contactsService",[])
    md.factory("contacts",["$http",function ($http) {
        var path = 'assets/contacts.json';
        var contacts = $http.get(path).then(function (resp) {
            return resp.data.contacts;
        });

        var factory = {};
        factory.all = function () {
            return contacts
        };

        factory.findOne = function (id) {
            var self = this;
            return contacts.then(function(data){
                return self.findById(data, id);
            });
        };

        factory.findById = function (a,id) {
            for (var i = 0,len = a.length; i < len; i++) {
                if (a[i].id == id) return a[i];
            }
            return null;
        }
        return factory
    }])
});