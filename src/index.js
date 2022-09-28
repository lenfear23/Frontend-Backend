import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

document.addEventListener('DOMContentLoaded',  () => {
    document.getElementById("url").addEventListener('input',url);
    document.getElementById("width").addEventListener('input',szelesseg);
    document.getElementById("thickness").addEventListener('input',magassag);
    document.getElementById("colorborder").addEventListener('input',szin);
    
    function url(){
      let hivat = document.getElementById("url").value;
      console.log(hivat);
      document.getElementById("image").src=hivat;

     
    }

    function szelesseg(){
        
        document.getElementById("image").style.width = document.getElementById("width").value+"px";
    }

    function magassag(){
        document.getElementById("image").style.borderWidth = document.getElementById("thickness").value+"px";
    }

    function szin(){
      let color =  document.getElementById("colorborder").value;
      document.getElementById("image").style.borderColor =color;
    }

    document.getElementById("mode").addEventListener('click', () =>{
        document.body.classList.toggle('bg-dark');
    });


    
});
