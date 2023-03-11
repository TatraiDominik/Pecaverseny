let ezust_karasz={
    zs_db: Number(),
    zs_kg:parseFloat(Number()) ,
    d_db:Number(),
    d_kg:parseFloat(Number())
};
function ezust_szamolas(){
    
    let versenyzo= prompt("Kérlek add meg a neved kezdőbetűjét!");
    if(versenyzo =="zs"){
        let zs_db_adat= Number(document.getElementById("zs_ezust_db").innerHTML);
        let zs_kg_adat=parseFloat(Number(document.getElementById("zs_ezust_kg").innerHTML)) ;
        ezust_karasz.zs_db=zs_db_adat;
        ezust_karasz.zs_kg=zs_kg_adat;
        let zs_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        ezust_karasz.zs_db+= zs_ujszam_db;
        let zs_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        ezust_karasz.zs_kg+= zs_ujszam_kg;
        Number(document.getElementById("zs_ezust_db").innerHTML= ezust_karasz.zs_db);
        parseFloat(Number(document.getElementById("zs_ezust_kg").innerHTML= ezust_karasz.zs_kg));
    }else{
        let d_db_adat= Number(document.getElementById("d_ezust_db").innerHTML);
        let d_kg_adat=parseFloat(Number(document.getElementById("d_ezust_kg").innerHTML)) ;
        ezust_karasz.d_db=d_db_adat;
        ezust_karasz.d_kg=d_kg_adat;
        let d_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        ezust_karasz.d_db+= d_ujszam_db;
        let d_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        ezust_karasz.d_kg+= d_ujszam_kg;
        Number(document.getElementById("d_ezust_db").innerHTML= ezust_karasz.d_db);
        parseFloat(Number(document.getElementById("d_ezust_kg").innerHTML= ezust_karasz.d_kg));
    }

    
} 



