'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var MonologueSchema = new mongoose.Schema({
  playwright: String,
  title: String,
  character: String,
  gender: String,
  age: String,
  body: String,
  chapter: { act: String, scene: String },
  setting: Array,
  tags: Array,
  meta: {
  	curated: { type: Boolean, default: false },
  	date: { type: Date, default: Date.now }
  }
});

export default mongoose.model('Monologue', MonologueSchema);
