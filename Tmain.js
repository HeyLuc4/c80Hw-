
convidadoArray = [];
    
function add(){
    let nome= document.getElementById("input").value;
    convidadoArray.push(nome);
    console.log(nome);
    console.log(convidadoArray)

    let lenghtArray = convidadoArray.lenght;
    console.log(lenghtArray);
    document.getElementById("mostrarNome").innerHTML = convidadoArray.toString();
};

function mostrar(){
    let i = convidadoArray.join("<br>");
    console.log(convidadoArray);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("organizar").style.display = "round";

}

function organizar(){
    convidadoArray.sort();
    let i = convidadoArray.join("<br>");
    console.log(convidadoArray);
    document.getElementById("organizado").innerHTML = i.toString();
}

function pesquisar(){
    let a = document.getElementById("s1").value;
    let b = 0;
    for(c=0; c<convidadoArray.lenght; c++){
        if(a==convidadoArray[c]){
            b=b+1;
        }
    }
    document.getElementById("p2").innerHTML="Nome encontrado " + b + " vez(es)";
    console.log("Nome encontrado" + b + "vez(es)");
}
