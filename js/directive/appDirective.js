define(["angular"],function (angular) {
    var md = angular.module("contactDirective",[]);

    md.directive("autoFocus",function () {
        return {
            link : function (scope,el,attr) {
                attr.autofocus = true;
            }
        }
    })
})