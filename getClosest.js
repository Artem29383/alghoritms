const getClosest = (points, target) => {
  // let between = Math.max(...points);
  // let closest = 0;
  // points.forEach(value => {
  //   if (Math.abs(value - target) < between) {
  //     between = Math.abs(value - target);
  //     closest = value;
  //   }
  // })
  //
  // return closest;

  return points.reduce((prev, curr) => {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
  })
}

console.info(getClosest([5, 15, 33, 50, 66], 23));