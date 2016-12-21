'use strict'

/**
 *  We're going to start off with a vanilla savor install
 *  that we will extend to work with React Native apps
 **/
var savor = require("savor");

/**
 *  We're using Chai.JS as our BDD assertion library, and specifically,
 *  we want to write our specs using the expect assert style.
 **/
var chai = require('chai');

/**
 *  Use helpers for testing React
 **/
var enzyme = require('enzyme');
var chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme())


/**
 *   Extend the root context to include enzyme tools
 **/
savor.context = Object.assign(savor.context, {
  mount: enzyme.mount,
  render: enzyme.render,
  shallow: enzyme.shallow
});

module.exports = savor;
