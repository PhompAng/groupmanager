function NameCtrl ($scope) {

	$scope.names = [
	{name:'Manee MeiPad'},
	{name:'Manee MeChair'},
	{name:'Manee MeMacBook'},
	{name:'Manee MeiPhone5S'}];

	$scope.addName = function() {
    	$scope.names.push({name:$scope.NameText});
    	$scope.NameText = '';
	};

	$scope.removeName = function($index) {
		$scope.names.splice($index,1);
	}
}