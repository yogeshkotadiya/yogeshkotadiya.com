// © 2019 Yogesh Kotadiya
// https://github.com/yogeshkotadiya

/**
 * @function highlightLine
 * @param {string} str - Highlight lines prop
 * @returns {number[]} Array of numbers
 */

function highlightLine(str) {
  const _array = str.split(",").map((i) => {
    if (typeof parseInt(i) === "number" && i.length === 1) {
      return parseInt(i);
    }
    let string = i.split("-").map((e) => parseInt(e));
    let num = [string[0]];
    while (string[0] < string[1]) {
      string[0]++;
      num.push(string[0]);
    }
    return num;
  });
  return [].concat.apply([], _array); //Flattens the array
}

export default highlightLine;
