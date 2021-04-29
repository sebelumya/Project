var lines = 0;
function segitiaPascal(lines) {
  var list = [];
  list.push([1]);
  list.push([1, 1]);
  for (var i = 2; i < lines; i++) {
    var prev = list[i - 1];
    var max = prev.length + 1;
    var temp = [];
    for (var x = 0; x < max; x++) {
      if (x == 0 || x == max - 1) {
        temp[x] = 1;
      } else {
        temp[x] = prev[x - 1] + prev[x];
      }
    }
    list.push(temp);
  }
  console.log(list);
}
segitiaPascal(4);
