requirejs.config({
    baseUrl: 'js/',
    paths: {
        angular : 'lib/angular',
        router  : "router"
    },
    shim : {
        angular: {
            exports: 'angular'
        }
    }
    //urlArgs: "bust=" +  (new Date()).getTime() //开发环境使用，防止缓存
});

require(['utils/utils',"angular","router"],function (util,angular,router){
    angular.bootstrap(document, ['contactsApp']);
});