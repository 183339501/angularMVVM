define(["../modules"],function (md) {
   md.controller("contactsDetailCtrl",["$scope","$routeParams","contacts",function ($scope,$routeParams,contacts) {
        var id = $routeParams.id;
        contacts.findOne(id).then(function (data) {
            $scope.contact = data;
       });

       $scope.edit = function (item) {
            item.edit = !item.edit;
       }
	   $scope.typeData = [
	        {name:"朋友",value:"1"},
	        {name:"同事",value:"2"},
	        {name:"同学",value:"3"},
	        {name:"陌生人",value:"4"}
	   ];
	    $scope.typeChecked = function (item,val){
            var idx = item.relation.indexOf(val);
            if (idx > -1) {
                item.relation.splice(idx, 1);
            } else {
                item.relation.push(val);
            }
        }
   }]);
});