class MyPromise {
  state = 'PENDING';
  value = undefined;
  callbacks = [];
  errorCallbacks = [];

  constructor(action) {
    action(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    this.state = 'FULFILLED';
    this.value = value;
    this.callbacks.forEach(callback => {
      callback(this.value);
    })
  }

  reject(value) {
    this.state = 'REJECT';
    this.value = value;
    this.errorCallbacks.forEach(callback => {
      callback(this.value);
    })
  }

  then(callback) {
    this.callbacks.push(callback);
    return this;
  }

  catch(callback) {
    this.errorCallbacks.push(callback);
    return this;
  }
}

let promise = new MyPromise((resolver, reject) => {
  setTimeout(() => {
    const rand = Math.ceil(Math.random(1 * 1 + 6) * 6)
    if (rand > 2) {
      resolver("Success")
    } else {
      reject("Error")
    }
  }, 1000)
})

promise
  .then(function(response){
    console.log(response)
  })
  .catch(function(error){
    console.log(error)
  })