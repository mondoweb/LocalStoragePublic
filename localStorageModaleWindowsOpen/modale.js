

let modal = document.getElementById("myModal");


// Ottieni l'elemento <span> che chiude il modale
let span = document.getElementsByClassName("close")[0];

/*
let  btn = document.getElementById("myBtn");
// Quando l'utente fa clic sul pulsante, aprire il modale
btn.onclick = function() {
  modal.style.display = "block";

}
*/
    

const input = document.getElementById('inp'); 
const key = 'dati;'
    
    //
    const _arrayGetLocalStorage = (  )=>{
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key , '[]') ;
        }
      
    }
// 
 
//
const _arraySetLocalStorage = ( data )=>{
    let salvaDati = JSON.parse( localStorage.getItem(key  ) );
    salvaDati.push( data )
    localStorage.setItem(key, JSON.stringify(  salvaDati) )
   
    }

    // Salva in array 
  
            //  modal.style.display = "block";
             _arrayGetLocalStorage();
            _arraySetLocalStorage( paragrafo.textContent )
            // input.value = paragrafo.textContent;
    
    
//  clic su <span> (x), chiude il modale
span.onclick = function() {
  // modal.style.display = "none";
  window.close();
}



//  clic in un punto qualsiasi al di fuori del modale, chiudilo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}