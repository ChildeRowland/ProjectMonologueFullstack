/**
 * Monologue model events
 */

'use strict';

import {EventEmitter} from 'events';
var Monologue = require('./monologue.model');
var MonologueEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MonologueEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Monologue.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MonologueEvents.emit(event + ':' + doc._id, doc);
    MonologueEvents.emit(event, doc);
  }
}

export default MonologueEvents;
