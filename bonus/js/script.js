// BONUS 1. Seleziono elemento "body" in file HTML
const body = document.getElementById("body");
const container = '<div id="container"></div>';
body.innerHTML = container;

// BONUS 1 - Forma Compatta
// document.getElementById("body"),innerHTML = '<div id="container"></div>';

// BONUS 2. Seleziono elemento "container" da file Html
const containerEl = document.getElementById("container");
// console.log(containerEl);

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
  let message;

  if (restoMult3===0 && restoMult5!==0){
    // console.log(i,"Fizz");
    console.log("Fizz");

    // BONUS 3. Inserisco all'interno dell'elemento "container" il messaggio
    // containerEl.innerHTML += 'Fizz <br>';
    message = "Fizz";
    // --- Creo un div con all'interno il messaggio da stampare su HTML ---
    containerEl.innerHTML += '<div>' + message + '</div>'
  }

  // 4. Stampo a console il messaggio "Buzz" per i multipli di 5
  if (restoMult3!==0 && restoMult5===0){
    // console.log(i,"Buzz");
    console.log("Buzz");

    // BONUS 3. Inserisco all'interno dell'elemento "container" il messaggio
    // containerEl.innerHTML += 'Buzz <br>';
    message = "Buzz";
    containerEl.innerHTML += '<div>' + message + '</div>'
  }

  // 5. Stampo a console il messaggio "FizzBuzz" per i multipli di 15
  if (restoMult3===0 && restoMult5===0 && restoMult15===0){
    // console.log(i,"FizzBuzz");
    console.log("FizzBuzz");

    // BONUS 3. Inserisco all'interno dell'elemento "container" il messaggio
    // containerEl.innerHTML += 'FizzBuzz <br>';
    message = "FizzBuzz";
    containerEl.innerHTML += '<div>' + message + '</div>'
  }

  // 6. Stampo a console solo il numero se non è multiplo di 3,5 e 15
  if (restoMult3!==0 && restoMult5!==0 && restoMult15!==0){
    console.log(i);

    // BONUS 3. Inserisco all'interno dell'elemento "container" il non multiplo
    // containerEl.innerHTML += i + '<br>';
    message = i;
    containerEl.innerHTML += '<div>' + message + '</div>'
  }

}