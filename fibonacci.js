// console.log('bright');
  

function fibonacci(n) {

  let fibo = [0, 1 ]; 
  

  if (n === 0) {
    return (fibo = [0]);
  }
  else if (n === 1) {
    return (fibo = [0, 1]);
  }
  else
  for (let i = 2; i <= n; i++) {
     fibo[i] = fibo[i - 1] + fibo[i - 2]
  }
  return fibo 

}
console.log(fibonacci(6));