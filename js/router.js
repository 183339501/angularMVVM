var depency = ["angular","controller/indexCtrl","directive/appDirective","controller/contactCtrl","factory/contacts.service","controller/contactsDetailCtrl"];
define(depency,function (angular) {

    var md = angular.module("contactsApp",["ngRoute","appController","contactsService","contactDirective"]);
    /****************路由配置*******************/
    md.config(function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
    })
    md.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when('/', {//首页数据集列表
            controller  : 'indexCtrl',
            templateUrl : 'template/indexTpl.html'
        }).when("/contact",{//结果展示配置
            controller  : "contactCtrl",
            templateUrl : "template/contactTpl.html"
        }).when("/contactDetail/:id",{
            controller : "contactsDetailCtrl",
            templateUrl : "template/contactsDetailTpl.html"
        }).otherwise({
            redirectTo  : '/'
        });
    }]);
});