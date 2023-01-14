function ezustkaraszadat(){
    var kivagy= prompt("Kinek írod az adatokat?")
    if(kivagy=="Zsolti" || kivagy=="Zsüli") {
        var ezustkarasz_kg= parseInt(prompt("Hozzáadandó(kg):"));
        var ezustkarasz_db= parseInt(prompt("Hozzáadandó(db):"));
        var ezustkarasz_ki= document.getElementById("ezustkarasz_kg").textContent += ezustkarasz_kg;
    }
    
    
}




