
let home = document.getElementById("home")


function opcoesHome(){ 
    let criandoLi =document.createElement("li")
    home.appendChild(criandoLi)
    criandoLi.innerHTML = "opção1"


}
function sair(){
    
}

home.addEventListener("mouseOver", opcoesHome)
home.addEventListener("mouseout", sair)