function displaytime()
    {
        document.getElementById("demo").innerHTML = Date();
    }

    function eliminar_fila(button)
    {
        var fila = button.parentNode.parentNode;
        var tabla = fila.parentNode;
        tabla.removeChild(fila);
    }

    var numeroincrementable = 1;

    function agregar_texto()
    {
        var num = innerHTML = numeroincrementable;
        var nombre = document.getElementById("nombres").value;
        var mensaje = document.getElementById("mensajes").value;

        var fila="<tr><td>"+num+"</td><td>"+nombre+"</td><td>"+mensaje+"</td><td><button onclick='eliminar_fila(this)'>Eliminar</button></td></tr>";
        
        var btn = document.createElement("TR");
            btn.innerHTML=fila;
        document.getElementById("tabla").appendChild(btn);
        var nombre = document.getElementById("nombres").value = "";
        var mensaje = document.getElementById("mensajes").value = "";
        numeroincrementable ++;
    }