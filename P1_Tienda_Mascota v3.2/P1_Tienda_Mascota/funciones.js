var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-\.]+$/;

function saludo(){
    var nombre = $("#nombre").val();
    alert("Bienvenid@ " + nombre+" esperamos ansiosas a que encuentres los productos que buscas <3");
}

$(document).ready(function(){
    $("#enviar").click(function(){
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var contraseña = $("#contraseña").val();
        var contraseña2 = $("#contraseña2").val();
        var check = $("#checkbox").prop("checked");

        if(nombre === ""){
            $("#mensaje1").fadeIn(); 
            return false;
        }else{
            $("#mensaje1").fadeOut();
            if(correo === "" || !expr.test(correo)){ 
                $("#mensaje2").fadeIn();
                return false;
            }else{
                $("#mensaje2").fadeOut();
                if(contraseña === ""){
                    $("#mensaje3").fadeIn();
                    return false;
                }else{
                    $("#mensaje3").fadeOut();
                    if(contraseña2 === ""){
                        $("#mensaje4").fadeIn();
                        return false;
                    }else{
                        $("#mensaje4").fadeOut();
                        if(check === false){
                            $("#mensaje5").fadeIn();
                            return false;
                        }else{
                            $("#mensaje5").fadeOut();
                        }
                    }
                }
            }
        }
        saludo();
    })
    $('#exampleModal').on('hide.bs.modal', function() {
        $("input").val('');
    });
});

