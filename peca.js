//ezustkarasz
let ezust_karasz={
    zs_db: Number(),
    zs_kg:parseFloat(Number()) ,
    d_db:Number(),
    d_kg:parseFloat(Number())
};
{
function ezust_szamolas(){
    
    let versenyzo= prompt("Kérlek add meg a neved kezdőbetűjét!");
    if(versenyzo =="zs" || a_versenyzo=="Zs"){
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
    }else if(versenyzo =="d"||versenyzo =="D"){
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
    else{
        window.alert("Nincs ilyen versenyző!");
    }
    
} 
}
// ezustkarasz vege

//egyebkeszegek
{
let egyebkeszegek={
    zs_db: Number(),
    zs_kg:parseFloat(Number()) ,
    d_db:Number(),
    d_kg:parseFloat(Number())
};
function egyebkeszeg_szamolas(){
    
    let versenyzo= prompt("Kérlek add meg a neved kezdőbetűjét!");
    if(versenyzo =="zs" || versenyzo=="Zs"){
        let zs_db_adat= Number(document.getElementById("zs_egyb_keszeg_db").innerHTML);
        let zs_kg_adat=parseFloat(Number(document.getElementById("zs_egyb_keszeg_kg").innerHTML)) ;
        egyebkeszegek.zs_db=zs_db_adat;
        egyebkeszegek.zs_kg=zs_kg_adat;
        let zs_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        egyebkeszegek.zs_db+= zs_ujszam_db;
        let zs_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        egyebkeszegek.zs_kg+= zs_ujszam_kg;
        Number(document.getElementById("zs_egyb_keszeg_db").innerHTML= egyebkeszegek.zs_db);
        parseFloat(Number(document.getElementById("zs_egyb_keszeg_kg").innerHTML= egyebkeszegek.zs_kg));
    }else if(versenyzo =="d"||versenyzo =="D"){
        let d_db_adat= Number(document.getElementById("d_egyb_keszeg_db").innerHTML);
        let d_kg_adat=parseFloat(Number(document.getElementById("d_egyb_keszeg_db").innerHTML)) ;
        egyebkeszegek.d_db=d_db_adat;
        egyebkeszegek.d_kg=d_kg_adat;
        let d_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        egyebkeszegek.d_db+= d_ujszam_db;
        let d_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        egyebkeszegek.d_kg+= d_ujszam_kg;
        Number(document.getElementById("d_egyb_keszeg_db").innerHTML= egyebkeszegek.d_db);
        parseFloat(Number(document.getElementById("d_egyb_keszeg_kg").innerHTML= egyebkeszegek.d_kg));
    }
    else{
        window.alert("Nincs ilyen versenyző!");
    }
    
}
} 
//egyebkeszegek vege
