// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  return games
    .map(game => (+game[0] < +game[2]) ? 0 : (+game[0] > +game[2]) ? 3 : 1)
    .reduce((acc, val) => acc + val);
}


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));