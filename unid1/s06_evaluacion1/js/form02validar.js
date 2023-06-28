const fnValidar02 = () => {
    let xTexto = document.getElementById("tdIzq").value;
    if(xTexto==""|| /^\s+$/.test(xTexto)) {
        alert("FALTA");
        return false;
    }
    
    let xNumero = document.getElementById("tdDer").value;
    if(xNumero==""){
        alert("Falta .......");
        return false;
    }

    /// caso contrario///
    return true;
}



	



