"use strict";

var $btn = document.querySelector('#change');
var $pet = document.querySelector('#my-pet');
$btn.addEventListener('click', function (e) {
  $pet.textContent = '못난이 거북이!!';
});