// © 2019 Yogesh Kotadiya
// https://github.com/yogeshkotadiya

"use strict";

function highlightLine(str) {
  let array = str.split(",").map(i => {
    if (typeof parseInt(i) === "number" && i.length === 1) {
      return parseInt(i);
    }
    let string = i
      .split("-")
      .map(e => parseInt(e))
      .sort((a, b) => a - b);
    let num = [string[0]];
    while (string[0] < string[1]) {
      string[0]++;
      num.push(string[0]);
    }
    return num;
  });
  return [].concat.apply([], array);
}

export default highlightLine;
