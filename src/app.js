/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { name } from "file-loader";

window.onload = function() {
  let pronoun = ["your", "the", "my"];
  let adj = ["cool", "best", "cute", "strong"];
  let noun = ["house", "dog", "box"];

  let nameArr = [];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let g in noun) {
        nameArr.push(pronoun[i] + adj[j] + noun[g] + ".com <br>");
      }
    }
  }

  console.log(nameArr);

  const root = document.querySelector("#root");
  root.innerHTML = nameArr;
};
