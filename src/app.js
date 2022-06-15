/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let a = ["The", "A", "That", "This", "Some"];
  let b = ["Devil", "Dog", "Robber", "Kitten", "Bear", "Fish"];
  let c = ["stole", "ate", "hid", "burried", "ripped", "tore", "broke"];
  let d = ["my homework", "my car", "my money", "my keys", "phone"];

  let aa = Math.floor(Math.random() * a.length);
  let bb = Math.floor(Math.random() * b.length);
  let cc = Math.floor(Math.random() * c.length);
  let dd = Math.floor(Math.random() * d.length);

  let finished = a[aa] + " " + b[bb] + " " + c[cc] + " " + d[dd];

  document.getElementById("lies").innerHTML = finished;

  //write your code here
  console.log("Hello Rigo from the console!");
};
