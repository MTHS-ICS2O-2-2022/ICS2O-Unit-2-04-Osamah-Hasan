// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const H = parseInt(document.getElementById('H of Tringle').value)
  const A = parseInt(document.getElementById('A of Tringle').value)
  const B = parseInt(document.getElementById('B of Tringle').value)
  const C = parseInt(document.getElementById('C of Tringle').value)

  // process
  const area = H * B / 2
  const perimeter = A + B + C

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
