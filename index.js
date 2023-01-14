function afficher(nombre){
    document.calculatrice.ecran.value += nombre
}
function egal(){
    document.calculatrice.ecran.value = eval(document.calculatrice.ecran.value)
}