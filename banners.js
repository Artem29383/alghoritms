function getBanners(banners, count) {
  if (banners.length < count) return [...banners];
  const result = new Set();
  const maxRandom = banners.reduce((sum, item) => item.weight + sum, 0);
// const list.txt = banners
// .reduce((array, elem) => [...array, elem.weight], [])
// .sort((a, b) => a - b);
  while (result.size < count) {
    const rand = Math.ceil(Math.random() * maxRandom);
    const element = banners.find(el => el.weight >= rand);
    if (element) {
      result.add(element);
    }
  }
  return [...result];
}
