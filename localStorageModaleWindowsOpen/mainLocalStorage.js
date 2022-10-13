
    const input = document.getElementById('inp'); 
    const save = document.getElementById('insertSave');

// console.log( '-> ' + p.textContent);

/*  */
  const key = 'dati;';

  
    function LocalStorage(){

             // localStorage.setItem('dati' , '[1 , 5 , 8 ]') ; 
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key , '[]') ;
        }
        if(  input.value === ""){
            alert('scrivi qulacosa ');
           return ;
           }
           let salvaDati = JSON.parse( localStorage.getItem(key  ) );
           salvaDati.push( input.value );
           localStorage.setItem(key, JSON.stringify(  salvaDati) );   

    }
    

    //
    const _arrayGetLocalStorage = (  )=>{
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key , '[]') ;
        }
    }
// 
    const _controlloStr = ()=> {
        if(  input.value === ""){
             alert('scrivi qulacosa ');
            return ;
            }
        }
//
const _arraySetLocalStorage = ( data )=>{
        let salvaDati = JSON.parse( localStorage.getItem(key  ) );
        salvaDati.push( data );
        localStorage.setItem(key, JSON.stringify(  salvaDati) );   
    }

    // Salva in array 
    
 save.onclick = () => {
        // localStorage.setItem('dati' , '[1 , 5 , 8 ]') ;
        _arrayGetLocalStorage();
        _controlloStr();
        _arraySetLocalStorage( input.value);  
        location.reload(); /*  al posto di,   input.value = ''  */
        
    } ;
    


    let  btn = document.getElementById("myBtn");
// Quando l'utente fa clic sul pulsante, aprire il modale
btn.onclick = function() {
    window.open("./modale.html", "Messaggio_Window", "width=300,height=200");  
        //  modal.style.display = "block";
        //  _arrayGetLocalStorage();
        // _arraySetLocalStorage( paragrafo.textContent )
        input.value = JSON.parse( localStorage.getItem(key ) );
        
        setTimeout( ()=> { input.value = '' ; }, 5000);

}  
 

/*  VEDI  */
    const vedi =  () => {
        if ( localStorage.getItem(key) !== null) {  
            document.getElementById('output').textContent =  JSON.parse( localStorage.getItem(key ) );
       } else {
        document.getElementById('output').textContent ="";
       }
    };
    

    /*  Cancella   */
    document.getElementById('reset').addEventListener('click', () => {   
        if( localStorage.getItem(key) !== null){
            localStorage.clear();
        }
    })

    // ----------------------------------------------------------------

// iife 
const a = document.getElementById("background" );
const backgroundColor = ( () =>{
 
  a.style.backgroundColor = 'rgba(239, 234, 234, 0.7)';
//   a.style.backgroundColor = 'red';
  })(); 

a.addEventListener("onload", backgroundColor );