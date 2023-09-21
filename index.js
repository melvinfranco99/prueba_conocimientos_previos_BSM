let usuarios= [];

let nombre = document.getElementById("nombre");
let pais = document.getElementById("pais");
let tbody_usuarios = document.getElementById("tbody_usuarios");

let i = 0;
let repetido = false;
let id_usuario = [];
function agregar(){
    repetido = false;
    for(let m=0;m<usuarios.length;m++){
        if(usuarios[m].nombre === nombre.value && usuarios[m].pais === pais.value){
            repetido = true;
        }
    }
    if(nombre.value.trim()===""){
        alert("Debe rellenar el nombre.");
    }else if(pais.value==""){
        alert("Debe seleccionar un país.");
    }else if(repetido == true){
        alert("Este usuario ya está registrado.");
    }else{

        
        

        registrarUsuario();
        actualizarTabla();
        i++;
    }

}


function registrarUsuario(){

    usuarios[i]={
        "id": `${calcularID()}`,
        "nombre": `${nombre.value}`,
        "pais": `${pais.value}`,
        "posicion": `${i+1}`
    }
}

let id_calculo = 1;
function calcularID(){
    if(i>1){
        id_calculo += id_calculo;
        return id_calculo;
    }else{
        id_calculo = 1;
        return id_calculo;
    }
    
}


function actualizarTabla(){
    tbody_usuarios.textContent = "";
    for(let m=0;m<usuarios.length;m++){
        tbody_usuarios.innerHTML += `<tr><td>${usuarios[m].id}</td><td>${usuarios[m].nombre}</td><td>${usuarios[m].pais}</td><td>${usuarios[m].posicion}</td><td><button onclick="subir(${m})" class="btn btn-success">SUBIR</button></td><td><button onclick="bajar(${m})" class="btn btn-warning">BAJAR</button></td><td><button class="btn btn-danger" onclick="eliminar(${m})">ELIMINAR</button></td></tr>`;
    }
}


function subir(_i){
    
    if(_i==0){
        alert("No se puede subir el primer elemento");
    }else{
        let aux;
        /*aux = usuarios[_i];
        usuarios[_i] = usuarios[_i-1];
        usuarios[_i-1] = aux;
        */

        aux = usuarios[_i].nombre;
        usuarios[_i].nombre = usuarios[_i-1].nombre;
        usuarios[_i-1].nombre = aux;

        aux = usuarios[_i].pais;
        usuarios[_i].pais = usuarios[_i-1].pais;
        usuarios[_i-1].pais = aux;

        actualizarTabla();

    }
    
}


function bajar(_i){

    if(_i==usuarios.length-1){
        alert("No se puede bajar el último elemento");
    }else{
        let aux;
        /*aux = usuarios[_i];
        usuarios[_i] = usuarios[_i+1];
        usuarios[_i+1] = aux;*/
        aux = usuarios[_i].nombre;
        usuarios[_i].nombre = usuarios[_i+1].nombre;
        usuarios[_i+1].nombre = aux;

        aux = usuarios[_i].pais;
        usuarios[_i].pais = usuarios[_i+1].pais;
        usuarios[_i+1].pais = aux;

        actualizarTabla();
    }
    
}


function eliminar(_i){
    let confirmacion = confirm("¿Seguro que desea eliminar el siguiente elemento?");
    
    if(confirmacion){
        usuarios.splice(_i,1);
        for(let m=_i;m<usuarios.length;m++){
            usuarios[m].posicion--;
        }
        i--;
        actualizarTabla();
    }
    
}