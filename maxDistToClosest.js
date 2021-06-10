const inp1 = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0];
const inp2 = [1, 0, 0, 0];
const inp3 = [0, 1, 0, 1];
const inp4 = [1, 0, 0, 0, 1, 0, 1];

function maxDistToCloses(seats) {
  let max = 0;
  let count = 0;
  let isOneExist = false;

  for (let i = 0; i<seats.length; i++) {
    if (i === seats.length - 1 && seats[i] === 0) {
      count++;
      return Math.max(max, count);
    }

    if (seats[i] === 1) {
      if (!isOneExist) {
        max = count;
      }
      isOneExist = true;
      count = 0;
    } else {
      count++
      max = Math.max(max, Math.ceil(count / 2));
    }
  }

  return max;
}

console.log(maxDistToCloses(inp1));
console.log(maxDistToCloses(inp2));
console.log(maxDistToCloses(inp3));
console.log(maxDistToCloses(inp4));