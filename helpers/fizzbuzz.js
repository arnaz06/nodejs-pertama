'use strict'

module.exports = {
  fizzbuzz: function(number){
    if((number % 3 == 0)&&(number % 5 == 0)){
      return 'fizzBuzz'
    }else if(number % 5 == 0){
      return 'Buzz'
    }else if(number % 3 == 0){
      return 'Fizz'
    }else{
      return 'not fizzbuzz, fizz and buzz'
    }

  }
}
