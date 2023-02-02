// 1. Stampare in console i numeri da 1 a 100

for (let i = 1; i<=100; i++){

  // 2. Calcolare i resti delle varie divisioni (Multipli 3, Multipli 5, Multipli 15)
  const restoMult3 = i % 3;
  const restoMult5 = i % 5;
  const restoMult15 = i % 15;
  // console.log(i," ---> RestoMult3 è: ", restoMult3);
  // console.log(i," ---> RestoMult5 è: ", restoMult5);
  // console.log(i," ---> RestoMult15 è: ", restoMult15);

  // 3. Stampo a console il messaggio "Fizz" per i multipli di 3
  if (restoMult3===0 && restoMult5!==0){
    // console.log(i,"Fizz");
    console.log("Fizz");
  }

  // 4. Stampo a console il messaggio "Buzz" per i multipli di 5 
  if (restoMult3!==0 && restoMult5===0){
    // console.log(i,"Buzz");
    console.log("Buzz");
  }

  // 5. Stampo a console il messaggio "FizzBuzz" per i multipli di 15
  if (restoMult3===0 && restoMult5===0 && restoMult15===0){
    // console.log(i,"FizzBuzz");
    console.log("FizzBuzz");
  }

  // 6. Stampo a console solo il numero se non è multiplo di 3,5 e 15
  if (restoMult3!==0 && restoMult5!==0 && restoMult15!==0){
    console.log(i);
  }
  
}