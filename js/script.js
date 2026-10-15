const TOGGLE_BUTTON = document.getElementById("toggle-theme-btn");

//variable_elemento.addEventListener('nombreEvento', function(){
// });
TOGGLE_BUTTON.addEventListener('click', function() {
   // alert('click');
   if(document.body.classList.contains('dark')){
      document.body.classList.remove('dark');
   } else {
      document.body.classList.add('dark');
   }
});
console.log("Hola mundo");
//alert("Hola mundo");
