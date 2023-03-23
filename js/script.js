// Copyright (c) 2023 Osamah Hasan All rights reserved
//
// Created by: Osamah Hasan
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of Triangle.
 */
function calculate () {
  // input
  const H = parseInt(document.getElementById('H of Triangle').value)
  const A = parseInt(document.getElementById('A of Triangle').value)
  const B = parseInt(document.getElementById('B of Triangle').value)
  const C = parseInt(document.getElementById('C of Triangle').value)

  // process
  const area = H * B / 2
  const perimeter = A + B + C

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
