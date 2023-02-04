// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
  const way = [];
  for (let dir of arr) {
    if (!way.length) {
      way.push(dir);
      continue;
    }
    switch (dir) {
      case "NORTH":
        if (way[way.length-1] === "SOUTH") {
          way.pop();
        } else {
          way.push("NORTH");
        };
        break;
      case "SOUTH":
        if (way[way.length-1] === "NORTH") {
          way.pop();
        } else {
          way.push("SOUTH");
        };
        break;
      case "EAST":
        if (way[way.length-1] === "WEST") {
          way.pop();
        } else {
          way.push("EAST");
        };
        break;
      case "WEST":
        if (way[way.length-1] === "EAST") {
          way.pop();
        } else {
          way.push("WEST");
        };
        break;
    }
  }
  return way;
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));