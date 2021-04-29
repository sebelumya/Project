var aray = [];
function sort_array(aray) {
  for (i = 0; i < aray.length; i++) {
    aray[i] = aray[i].sort();
  }
  result = aray.sort((a, b) => a.length - b.length);
  return result;
}

console.log(
  sort_array([
    ["b", "a", "d"],
    ["f", "g", "i", "h"],
    ["c", "z", "g", "l", "m"],
  ])
);
