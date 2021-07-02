const app = document.querySelector('#app');

const glubinaDOM = (appDiv, max) => {
  if (appDiv.children.length === 0) return max;

  let result = max;
  Array.from(appDiv.children).forEach((elem) => {
    result = Math.max(glubinaDOM(elem, max + 1), result);
  })
  return result;
}

console.info(glubinaDOM(app, 0))