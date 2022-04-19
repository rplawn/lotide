# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rplawn/lotide`

**Require it:**

`const _ = require('@rplawn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual function`: check if two arrays are equal
* `assertEqual function`: check if two values are equal
* `countLetters function`: count number of characters in a string
* `countOnly function`: count given items only
* `eqArrays function`: check if arrays are equal
* `eqObjects function`: check if objects are equal
* `findKey function`: return a particular key through callback
* `findKeyByValue function`: returns the key with the given value
* `flatten function`: remove nested arrays and print single array
* `head function`: pull first item in an array
* `map function`: return new array based on callback function
* `middle function`: print middle values of array
* `tail function`: print everything except first item in array
* `takeUntil function`: print array until callback is executed
* `without function`: return subset of array without unwanted items