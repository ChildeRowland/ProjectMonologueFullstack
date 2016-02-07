'use strict';

angular.module('projectMonologueFullstackApp')

  .controller('MainController', function() {
    var self = this;

    self.toDoList = [
      { todo: "UI_STATES for navigation" },
      { todo: "monologueEngineDTO" },
      { todo: "dynamic lists for age and gender" },
      { todo: "add auto fill to new monologue form" },
      { todo: "Replace css modal with uiBootrap" },
      { todo: "phantomjs error preventing tests" },
      { 
        todo: "infinty scrolling for search results",
        resource: "https://sroze.github.io/ngInfiniteScroll/" 
      }
    ];

  });
