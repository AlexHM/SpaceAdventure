function checkResult(){
    var isChecked1 = document.getElementById('r').checked;
    var isChecked2 = document.getElementById('i').checked;

    if(isChecked1 && !isChecked2 && !isChecked3){
        alert('correcto');
        
        // FUNCION QUE HAGA SUMAR UN DIGITO A LA RESPUESTA CORRECTA
    } else{
        alert('incorrecto');

        // FUNCION QUE HAGA RESTAR UN CORAZON DE LA VIDA
    }
}