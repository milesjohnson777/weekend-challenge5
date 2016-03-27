myApp.controller('AddController', ['$scope', 'PetService', function($scope, PetService){
    var petObject = {};
    var petService = PetService;
    $scope.submit = function(data){
        petService.postData(data);
    }
}]);

myApp.controller('ShowController', ['$scope', 'PetService', function($scope, PetService){
    var petService = PetService;
    petService.getData();
    $scope.listOfAnimals = petService.listOfAnimals;
}]);
