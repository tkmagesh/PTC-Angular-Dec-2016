var utils = angular.module("utils", []);
utils.filter("trimText", function(bugDefaults){
	return function(data, trimLength){
		trimLength = trimLength || bugDefaults.trimLength;
		return data.length < trimLength ? data : data.substr(0,trimLength) + '...';
	};
});

utils.filter('elapsed', function(){
	return function(data){
		return moment(data).fromNow();
	};
});