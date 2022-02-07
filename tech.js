// // "use strict"
// //
// // // /*
// // //   Какой-то из бэкендов присылает нам данные в JSON в snake_case, мы на своем проекте
// // //   везде используем camelCase. Нужна функция, которая на вход будет принимать данные,
// // //   полученные через JSON.parse, там не может быть функций, циклических зависимостей и т.д.,
// // //   все объекты имеют ключи в snake_case. Функция должна вернуть новый анаглогичный объект
// // //   со всей вложенной структурой, в котором ключи объектов заменены на camelCase.
// // // */
// // //
// // // const data = {
// // //   foo_bar: {
// // //     bar_baz: 2
// // //   },
// // //   a: [{ foo_bar: 4 },
// // //     {},
// // //     1,
// // //     2,
// // //     3
// // //   ]
// // // }
// // //
// // // //-> {fooBar: {barBaz: 2}, a: [{fooBar: 4}, {}, 1, 2, 3]}
// // //
// // // const splitter = key => {
// // //   const keySplit = key.split('_');
// // //   return keySplit.reduce((res, str, index) => {
// // //     if (!index) {
// // //       res = str
// // //       return res;
// // //     }
// // //     res += `${str.charAt(0).toUpperCase()}${str.slice(1)}`
// // //     return res;
// // //   }, '')
// // // }
// // // function toCamelCase(data) {
// // //   if (typeof data === 'object' && !Array.isArray(data)) {
// // //     return Object.keys(data).reduce(
// // //       (acc, key) => ({
// // //         ...acc,
// // //         [splitter(key)]: toCamelCase(data[key]),
// // //       }),
// // //       {}
// // //     );
// // //   }
// // //
// // //   return data;
// // // }
// // //
// // // console.log(toCamelCase(data));
// //
// //
// // // var name = 1;
// // //
// // // const go = {
// // //   name: 2,
// // //   fn: function () {
// // //     var name = 10;
// // //     // console.info(this);
// // //     console.log(this.name);
// // //   }
// // // }
// // //
// // // go.fn();
// // // var a = go.fn;
// // // a()
// //
// // // var value;
// // // value = 5;
// // //
// // // function checkFunc() {
// // //   console.log(value)
// // // }
// // //
// // // function checkFuncTwo() {
// // //   var value;
// // //   value = 10;
// // //
// // //   (function () {
// // //     console.info(value);
// // //   })()
// // //
// // //   checkFunc()
// // // }
// // //
// // // checkFuncTwo()
// //
// // //
// // // const obj = {
// // //   foo_bar: {
// // //     bar_baz: 2
// // //   },
// // //   a: [{ foo_bar: 4 },
// // //     {},
// // //     1,
// // //     2,
// // //     3
// // //   ]
// // // }
// // //
// // //
// // // const toUpperCase = str => {
// // //   const splitter = str.split('_');
// // //   return `${splitter[0]}${splitter.slice(1).map(item => item[0].toUpperCase() + item.slice(1)).join('')}`
// // // }
// // //
// // // const process = data => {
// // //   if (typeof data === 'object' && !Array.isArray(data)) {
// // //     return Object.keys(data).reduce((acc, key) => {
// // //       return ({...acc, [toUpperCase(key)]: process(data[key])})
// // //     }, {})
// // //   }
// // //
// // //   return data;
// // // }
// // //
// // // console.info(process(obj));
// //
// //
// // // const promise = new Promise(resolve => resolve(''));
// // //
// // // promise.then(() => {
// // //   promise.then(() => console.log('a'));
// // //   console.info('b')
// // // })
// // //
// // // promise.then(() => console.log('c'));
// //
// // // setTimeout(() => promise.then(() => console.log(1)))
// // // promise.then(() => console.log(3))
// // // setTimeout(() => console.log(2));
// // // console.info(4)
// // //
// // // const toMoney = (num, delimiter = ' ', decimal = '.') => {
// // //   const stringSplit = String(num).split('.');
// // //
// // //   const splitSubOne = stringSplit[0].split('');
// // //
// // //   const sub = splitSubOne.reduce((acc, letter, i) => {
// // //     const index = splitSubOne.length - i - 1;
// // //     acc += index % 3 === 0 && index ? `${letter}${delimiter}` : letter;
// // //     return acc;
// // //   }, '')
// // //
// // //   const subEnd = stringSplit[1] ? stringSplit[1].length === 1 ? stringSplit[1] + '0' : stringSplit[1] : '';
// // //
// // //   return `${sub}${subEnd ? decimal + subEnd : ''}`;
// // // }
// // //
// // //
// // // console.info(toMoney(33))
// // // console.info(toMoney(33.3))
// // // console.info(toMoney(-33.33))
// // // console.info(toMoney(111))
// // // console.info(toMoney(1111))
// // // console.info(toMoney(-1111.11))
// // // console.info(toMoney(-11111111.1, '_', ','))
// //
// // //
// // // const data = {
// // //   a: 1,
// // //   b: 2,
// // //   c: {
// // //     d: 3,
// // //     e: "4",
// // //     f: {
// // //       g: "5"
// // //     }
// // //   }
// // // };
// // //
// // // // TODO: вывести в консоль все значения объекта
// // // const walk = (data: any) => {
// // //   Object.keys(data).forEach((key) => {
// // //     if (typeof data[key] === "object") {
// // //       walk(data[key]);
// // //     } else {
// // //       console.log(data[key]);
// // //     }
// // //   });
// // // };
// // //
// // // walk(data);
// //
// //
// // // function compress(list) {
// // //   let block = {
// // //     start: null,
// // //     end: null,
// // //   }
// // //   // 0, 1, 2, 3, 4, 5, 8, 9, 11
// // //   const result = list.sort((a, b) => a - b).reduce((acc, element, index) => {
// // //     if (block.start === null) {
// // //       block.start = element;
// // //     }
// // //     if (element !== list[index + 1] - 1) {
// // //       if (element !== block.start) {
// // //         block.end = element;
// // //       }
// // //       acc.push(block);
// // //       block = {
// // //         start: null,
// // //         end: null
// // //       }
// // //     }
// // //     return acc;
// // //   }, []);
// // //
// // //   return result.reduce((acc, elem, index) => {
// // //     acc += elem.end ? `${elem.start}-${elem.end}${index === result.length - 1 ? '' : ','}` : `${elem.start}${index === result.length - 1 ? '' : ','}`
// // //     return acc;
// // //   }, '') //
// // // }
// //
// //
// // const compress = list => {
// //   const block = { start: null, end: null };
// //   return list.sort((a, b) => a - b).reduce((acc, elem, index) => {
// //     if (block.start === null) {
// //       block.start = elem;
// //     }
// //     if (elem !== list[index + 1] - 1) {
// //       if (elem !== block.start) {
// //         block.end = elem;
// //       }
// //       acc += block.end ? `${block.start}-${block.end}${index !== list.length - 1 ? ',' : ''}` : `${block.start}${index !== list.length - 1 ? ',' : ''}`;
// //       block.start = null;
// //       block.end = null;
// //     }
// //     return acc;
// //   }, '')
// // }
// //
// // console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])); // '0-5,8-9,11'
// // console.log(compress([1, 4, 3, 2])); // '1-4'
// // console.log(compress([1, 4])); // '1,4'
// // console.log(compress([1, 2])); // '1-2'
//
// import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
//
// export const useIntersectionObserver = (
//     callback: () => Promise<any>,
//   ): { setRefElement: Dispatch<SetStateAction<Element | null>> } => {
//   const observer = useRef<IntersectionObserver>();
//   const [refElement, setRefElement] = useState<Element | null>(null);
//
//   useEffect(() => {
//     observer.current = new IntersectionObserver(
//       entries => {
//         const firstEntry = entries[0];
//         if (firstEntry.isIntersecting) {
//           callback().then(() => {});
//         }
//       },
//       { threshold: 1 },
//     );
//   }, [callback]);
//
//   useEffect(() => {
//     if (refElement && observer.current) {
//       observer.current.observe(refElement);
//     }
//
//     return () => {
//       if (refElement && observer.current) {
//         observer.current.unobserve(refElement);
//       }
//     };
//   }, [refElement]);
//
//   return { setRefElement };
// };
