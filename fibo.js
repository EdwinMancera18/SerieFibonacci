function fibonacci(numero){
    let a=0, b=1, c;
    console.log(a);
    console.log(b);
    for(var i = 0; i <= numero; i++){
      c = a + b; // suma las dos varibles
      console.log(c); // escribe el nuevo valor de c
      a = b; // reasigna el valor de a 
      b = c;  // reasigna el valor de b
    }
  }
  fibonacci(prompt('Escriba el limite de la serie Fibonacci a Mostrar'));