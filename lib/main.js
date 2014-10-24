angular.module('myApp', []).controller('MyCtrl', function($scope) {
  $scope.tasks = $scope.tasks || {};
  $scope.tasks.pageCount = 12;
  $scope.tasks.currentPage = 2;

  $scope.selectPage = function(page) {
    console.log("Currently selected page is", page);
  };
});

angular.module('myApp').directive('btnDirective', function() {
	return {
    restrict: 'E',
    compile: function(tElem, tAttr) {
      tElem.addClass('btn');
      if(tAttr.type === 'submit') {
        tElem.addClass('btn-primary');
      }
      if(tAttr.size) {
        if(tAttr.size === 'large') {
          tElem.addClass('btn-lg');          
        } else if(tAttr.size === 'extra-small') {
          tElem.addClass('btn-xs');
        } else {
          tElem.addClass('btn-sm');
        }
      }
    }
  };
});

angular.module('myApp').directive('pgDirective', function() {
  return {
    restrict: 'E',
    scope: {
      numPages: '=',
      currentPage: '=',
      onSelectPage: '&'
    },
    templateUrl: 'pg-directive.html',
    replace: true,
    link: function(scope) {
      scope.$watch('numPages', function(value) {
        scope.pages =[];
        for(var i = 1; i <= value; i++) {
          scope.pages.push(i);
        }
        if(scope.currentPage > value) {
          scope.selectPage(value);
        }
      });

      scope.noPrevious = function() {
        return scope.currentPage === 1;
      };

      scope.noNext = function() {
        return scope.currentPage === scope.numPages;
      };

      scope.isActive = function(page) {
        return scope.currentPage === page;
      };

      scope.selectPage = function(page) {
        if(!scope.isActive(page)) {
          scope.currentPage = page;
        }
        scope.onSelectPage({page: page});
      };

      scope.selectPrevious = function() {
        if(!scope.noPrevious()) {
          scope.selectPage(scope.currentPage-1);
        }
          console.log(scope.currentPage);
      };

      scope.selectNext = function() {
        if(!scope.noNext()) {
          scope.selectPage(scope.currentPage+1);
        }
          console.log(scope.currentPage);
      };
    }
  };
});