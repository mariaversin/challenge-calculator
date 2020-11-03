
window.onload = function(){ 
    pantalla=document.getElementById("textoPantalla"); 
    }

// definir variables

var num = "0";
var numInicio = 1;
var punto = 0;
var numPendiente = 0;
var opEnCurso = "no";


// numeros no decimales

function numero(xx) {
    if (num== '0' || numInicio==1){
        pantalla.innerHTML = xx;
        num = xx;
        numInicio = 0;
    }
    else {
        pantalla.innerHTML += xx;
            num += xx;
    }
    numInicio = 0;
}

// numeros decimales

function numero(x){
    if (num=='0' || numInicio==1) {
        pantalla.innerHTML = x;
        num = x;
        if (x == '.') {
            num = x;
            punto = 1;
        }
    }
    else {
        if (x=='.' && punto == 0) {
            pantalla.innerHTML += x;
            num += x;
            punto = 1;
        }
        else if (x=='.' && punto ==1) {}
        else {
            pantalla.innerHTML += x;
            num += x;
        }
    }

    numInicio = 0;  
}

// funcion calcular operaciones

function operar (s) {
    pantalla.innerHTML += s;
    numPendiente = num;
    opEnCurso = s;
    numInicio= 1;
    
}

// funcion igualar

function igualar () {
    if (opEnCurso =="no") {
        pantalla.innerHTML=num;
    } else {
        solucion = numPendiente + opEnCurso + num;
        solucion = eval(solucion);
        pantalla.innerHTML = solucion;
        num = solucion;
        opEnCurso ="no";
        numInicio = 1;
    }
}

function clean() {
    num = '0';
    numInicio = 1;
    opEnCurso = "no";
    numPendiente = 0;
    pantalla.innerHTML = num;
}


