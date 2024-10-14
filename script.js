var button = document.querySelector(".button");
const chiffre = document.querySelector(".texte");
const infos = document.querySelector(".infos");


button.onclick = () =>{
    
    if(isNaN(chiffre.value)){
        infos.textContent = "LE CARACTERE SAISIS N'ES PAS UN NOMBRE"
    }
    const nombre = parseInt(chiffre.value) ;

function factoriel(nbr){
        var i, fact ;
        fact=1;
        for(i=1; i<=nbr;i++){
            fact=i*fact ;
        }
        return fact;
    }


factoriel(nombre);




    infos.textContent = "LE FACTORIEL DU NOMBRE " + parseInt(chiffre.value) + " EST : "+ factoriel(nombre) ;
}

chiffre.addEventListener('keydown', function(){
    if (event.key === "Enter") {
        
    
        const nombre = parseInt(chiffre.value) ;
    
    function factoriel(nbr){
            var i, fact ;
            fact=1;
            for(i=1; i<=nbr;i++){
                fact=i*fact ;
            }
            return fact;
        }
    
    
    factoriel(nombre);
    
    
    
    
    
    
        infos.textContent = "LE FACTORIEL DU NOMBRE " + parseInt(chiffre.value) + " EST : "+ factoriel(nombre) ;
}})




const restart = document.querySelector(".restart")



restart.onclick = () =>{
    chiffre.value = "" ;
    infos.textContent = "" ;
}