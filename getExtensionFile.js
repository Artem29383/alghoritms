const s1 = 'dsadsa.dwqeqwe.reqrewt.fdsfd.exe'

const getExtensionFile = string => {
  return s1.split('').reduce((acc, char) => {
    if (char === '.') {
      acc = '';
    } else {
      acc += char;
    }
    return acc;
  }, '')
}

console.info(getExtensionFile(s1));