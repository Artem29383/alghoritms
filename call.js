const person = {
  name: 'artem'
}

function info(phone, email) {
  console.log(`Имя: ${this.name}, Тел.:${phone}, Email: ${email}`)
}

// function call(func, context, ...rest) {
//   context['func'] = func;
//   context.func(...rest);
// }
//
// call(info, person, '1234', 'c@mail.ru')

// function bind(func, context, ...rest) {
//   return function(...args) {
//     context['func'] = func;
//     context.func(...rest, ...args);
//   }
// }
//
// bind(info, person)('12345', 'v@mail.ru')
// bind(info, person, '12345')('v@mail.ru')
// bind(info, person, '12345', 'v@mail.ru')()

// info.bind(person, '12345')('v@mail.ru');

function apply(func, context, args) {
  context['func'] = func;
  context.func(...args);
}

apply(info, person, ['1234', 'c@mail.ru'])