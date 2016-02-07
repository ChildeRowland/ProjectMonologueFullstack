'use strict';

angular.module('projectMonologueFullstackApp')

  .controller('MainController', function() {
    var self = this;

    self.toDoList = [
      { todo: "monologueEngineDTO" },
      { todo: "dynamic lists for age" },
      { todo: "Show matching monologues for duplicate before add" },
      { todo: "Replace css modal with uiBootrap" },
      { todo: "Clean view for one monologue" },
      { todo: "phantomjs error preventing tests" },
      { 
        todo: "infinty scrolling for search results",
        resource: "https://sroze.github.io/ngInfiniteScroll/" 
      }
    ];

  });
