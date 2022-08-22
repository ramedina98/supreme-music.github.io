//En este JS cambiaremos el precio y el periodo del pago
function showNext(){

      document.getElementById('opcion').style.display = "none";
      document.getElementById('opcion2').style.display = 'flex';
}

function showNext2(){

      document.getElementById('opcion2').style.display = "none";
      document.getElementById('opcion1').style.display = "flex";
}

function showNext3(){

      document.getElementById('opcion1').style.display = "none"; 
      document.getElementById('opcion').style.display = "flex";
}