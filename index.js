function receivesAFunction(callback) {
    callback();
    return 0;    
}



function returnsANamedFunction() {
    return function named() {
        return console.log(`Wee`);
    }
  }
const returnsAnAnonymousFunction = () => ()=> console.log(`yes`);