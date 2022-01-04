const input1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; //[[1, 6], [8,10], [15, 18]]
const input2 = [[1, 4], [4, 5]]; //[[1, 5]]
const input3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]

const inInterval = (int1, int2) => {
  return int1[0] <= int2[0] && int1[1] >= int2[0];
}

const mergeIntervals = intervals => intervals.sort(a => a[0] > a[1]).reduce((acc, cell, index) => {
  if (index % 2 === 1 &&
    inInterval(intervals[index - 1], intervals[index])
    && intervals[index - 1][0] <= intervals[index][0]
    && intervals[index - 1][1] <= intervals[index][1]
  ) {
    acc[index-1] = ([intervals[index - 1][0], intervals[index][1]]);
  } else {
    acc.push(intervals[index]);
  }
  return acc;
}, [])

const merge = intervals => {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let interval of intervals) {
    let recent = result[result.length - 1];

    if (recent[1] >= interval[0]) {
      recent[1] = Math.max(recent[1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
}

console.log(merge(input1));
console.log(merge(input2));
console.log(merge(input3));
