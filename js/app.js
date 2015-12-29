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
    //urlArgs: "bust=" +  (new Date()).getTime() //��������ʹ�ã���ֹ����
});

require(['utils/utils',"angular","router"],function (util,angular,router){
    angular.bootstrap(document, ['contactsApp']);
});