function validarForm(){
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    alert(usuario + password);
    if(usuario != null){
        alert("Se ingreso correctamente el usuario:" + usuario);
    }
}