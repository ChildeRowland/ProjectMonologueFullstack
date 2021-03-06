'use strict';

angular.module('projectMonologueFullstackApp')

  .controller('MainController', function() {
    var self = this;

    self.toDoList = [
      { todo: "monologueEngineDTO" },
      { todo: "phantom error preventing tests"},
      { todo: "Show matching monologues for duplicate before add" },
      { todo: "uib radio replacements"},
      { todo: "uib alert boxes for validations"},
      { 
        todo: "infinty scrolling for search results",
        resource: "https://sroze.github.io/ngInfiniteScroll/" 
      },
      { todo: "return no results for search matching 0"}
    ];

  });
