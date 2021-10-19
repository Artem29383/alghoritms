const person = {
  name: 'MyName'
}

function info(phone, email) {
  console.log(`Имя: ${this.name}, Тел.:${phone}, Email: ${email}`)
}

function call(func, context, ...rest) {
  context['func'] = func;
  context.func(...rest);
}

call(info, person, '1234', 'c@mail.ru')
