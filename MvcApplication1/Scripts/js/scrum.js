
function teamCtrl($scope) {

    $scope.members = [];
    
    $scope.addTeamMember = function () {
        
        $scope.members.push({
            memberName: $scope.scrum.team.memberName,
            memberEmail: $scope.scrum.team.memberCapacity
        });
        
        $scope.scrum.team.memberName = '';
        $scope.scrum.team.memberCapacity = '';
    
    };

   

}


