const fnValidar01 = () => {
    let xTexto = document.getElementById("txtTexto").value;
    if(xTexto==""|| /^\s+$/.test(xTexto)) {
        alert("Falta TEXTO...");
        return false;
    }
    
    let xNumero = document.getElementById("txtTexto").value;
    if(xNumero==""){
        alert("Falta Numero...");
        return false;
    }

    /// caso contrario///
    return true;
}





    
    