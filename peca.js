//ezustkarasz
let ezust_karasz={
    zs_db: Number(),
    zs_kg:parseFloat(Number()) ,
    d_db:Number(),
    d_kg:parseFloat(Number())
};


function ezust_szamolas(){
    
    let versenyzo= prompt("Kérlek add meg a neved kezdőbetűjét!");
    if(versenyzo =="zs" || versenyzo=="Zs"){
        let zs_db_adat= Number(document.getElementById("zs_ezust_db").innerHTML);
        let zs_kg_adat=parseFloat(Number(document.getElementById("zs_ezust_kg").innerHTML)) ;
        ezust_karasz.zs_db=zs_db_adat;
        ezust_karasz.zs_kg=zs_kg_adat;
        let zs_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        ezust_karasz.zs_db+= zs_ujszam_db;
        let zs_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        ezust_karasz.zs_kg+= zs_ujszam_kg;
        Number(document.getElementById("zs_ezust_db").innerHTML= ezust_karasz.zs_db);
        let ujzsdb=document.getElementById("zs_ezust_db").innerHTML;
        localStorage.setItem("zs_db_input",ujzsdb);
        parseFloat(Number(document.getElementById("zs_ezust_kg").innerHTML= ezust_karasz.zs_kg));
        let ujzskg=document.getElementById("zs_ezust_kg").innerHTML;
        localStorage.setItem("zs_kg_Input",ujzskg);
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
        let ujddb=document.getElementById("zs_ezust_db").innerHTML;
        localStorage.setItem("d_db_input",ujddb);
        parseFloat(Number(document.getElementById("d_ezust_kg").innerHTML= ezust_karasz.d_kg));
        let ujdkg=document.getElementById("zs_ezust_kg").innerHTML;
        localStorage.setItem("d_kg_Input",ujdkg);
    }
    else{
        window.alert("Nincs ilyen versenyző!");
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
        //adatmentés START
        let ujzsdb=document.getElementById("zs_egyb_keszeg_db").innerHTML;
        localStorage.setItem("e_zs_db_input",ujzsdb);
        let ujzskg=document.getElementById("zs_egyb_keszeg_kg").innerHTML;
        localStorage.setItem("e_zs_kg_input",ujzskg);
        //adatmentes END
    }else if(versenyzo =="d"||versenyzo =="D"){
        let d_db_adat= Number(document.getElementById("d_egyb_keszeg_db").innerHTML);
        let d_kg_adat=parseFloat(Number(document.getElementById("d_egyb_keszeg_kg").innerHTML)) ;
        egyebkeszegek.d_db=d_db_adat;
        egyebkeszegek.d_kg=d_kg_adat;
        let d_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        egyebkeszegek.d_db+= d_ujszam_db;
        let d_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        egyebkeszegek.d_kg+= d_ujszam_kg;
        Number(document.getElementById("d_egyb_keszeg_db").innerHTML= egyebkeszegek.d_db);
        parseFloat(Number(document.getElementById("d_egyb_keszeg_kg").innerHTML= egyebkeszegek.d_kg));
        //adatmentés START
        let ujddb=document.getElementById("d_egyb_keszeg_db").innerHTML;
        localStorage.setItem("e_d_db_input",ujddb);
        let ujdkg=document.getElementById("d_egyb_keszeg_kg").innerHTML;
        localStorage.setItem("e_d_kg_input",ujdkg);
        //adatmentés END
    }
    else{
        window.alert("Nincs ilyen versenyző!");
    }
    
}
} 
//egyebkeszegek vege

//JÁSZKESZEG START
let jaszkeszeg={
    zs_db: Number(),
    zs_kg:parseFloat(Number()) ,
    d_db:Number(),
    d_kg:parseFloat(Number())
};

function jaszkeszeg_szamolas(){
    
    let versenyzo= prompt("Kérlek add meg a neved kezdőbetűjét!");
    if(versenyzo =="zs" || versenyzo=="Zs"){
        let zs_db_adat= Number(document.getElementById("zs_jasz_db").innerHTML);
        let zs_kg_adat=parseFloat(Number(document.getElementById("zs_jasz_kg").innerHTML)) ;
        jaszkeszeg.zs_db=zs_db_adat;
        jaszkeszeg.zs_kg=zs_kg_adat;
        let zs_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        jaszkeszeg.zs_db+= zs_ujszam_db;
        let zs_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        jaszkeszeg.zs_kg+= zs_ujszam_kg;
        Number(document.getElementById("zs_jasz_db").innerHTML= jaszkeszeg.zs_db);
        parseFloat(Number(document.getElementById("zs_jasz_kg").innerHTML= jaszkeszeg.zs_kg));
        //adatmentés START
        let ujzsdb=document.getElementById("zs_jasz_db").innerHTML;
        localStorage.setItem("j_zs_db_input",ujzsdb);
        let ujzskg=document.getElementById("zs_jasz_kg").innerHTML;
        localStorage.setItem("j_zs_kg_input",ujzskg);
        //adatmentes END
    }else if(versenyzo =="d"||versenyzo =="D"){
        let d_db_adat= Number(document.getElementById("d_jasz_db").innerHTML);
        let d_kg_adat=parseFloat(Number(document.getElementById("d_jasz_kg").innerHTML)) ;
        jaszkeszeg.d_db=d_db_adat;
        jaszkeszeg.d_kg=d_kg_adat;
        let d_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        jaszkeszeg.d_db+= d_ujszam_db;
        let d_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        jaszkeszeg.d_kg+= d_ujszam_kg;
        Number(document.getElementById("d_jasz_db").innerHTML= jaszkeszeg.d_db);
        parseFloat(Number(document.getElementById("d_jasz_kg").innerHTML= jaszkeszeg.d_kg));
        //adatmentés START
        let ujddb=document.getElementById("d_jasz_db").innerHTML;
        localStorage.setItem("j_d_db_input",ujddb);
        let ujdkg=document.getElementById("d_jasz_kg").innerHTML;
        localStorage.setItem("j_d_kg_input",ujdkg);
        //adatmentés END
    }
    else{
        window.alert("Nincs ilyen versenyző!");
    }
    
}
//JÁSZKESZEG END

//DÉVÉR START
let dever={
    zs_db: Number(),
    zs_kg:parseFloat(Number()) ,
    d_db:Number(),
    d_kg:parseFloat(Number())
};

function dever_szamolas(){
    
    let versenyzo= prompt("Kérlek add meg a neved kezdőbetűjét!");
    if(versenyzo =="zs" || versenyzo=="Zs"){
        let zs_db_adat= Number(document.getElementById("zs_dever_db").innerHTML);
        let zs_kg_adat=parseFloat(Number(document.getElementById("zs_dever_kg").innerHTML)) ;
        dever.zs_db=zs_db_adat;
        dever.zs_kg=zs_kg_adat;
        let zs_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        dever.zs_db+= zs_ujszam_db;
        let zs_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        dever.zs_kg+= zs_ujszam_kg;
        Number(document.getElementById("zs_dever_db").innerHTML= dever.zs_db);
        parseFloat(Number(document.getElementById("zs_dever_kg").innerHTML= dever.zs_kg));
        //adatmentés START
        let ujzsdb=document.getElementById("zs_dever_db").innerHTML;
        localStorage.setItem("d_zs_db_input",ujzsdb);
        let ujzskg=document.getElementById("zs_dever_kg").innerHTML;
        localStorage.setItem("d_zs_kg_input",ujzskg);
        //adatmentes END
    }else if(versenyzo =="d"||versenyzo =="D"){
        let d_db_adat= Number(document.getElementById("d_dever_db").innerHTML);
        let d_kg_adat=parseFloat(Number(document.getElementById("d_dever_kg").innerHTML)) ;
        dever.d_db=d_db_adat;
        dever.d_kg=d_kg_adat;
        let d_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        dever.d_db+= d_ujszam_db;
        let d_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        dever.d_kg+= d_ujszam_kg;
        Number(document.getElementById("d_dever_db").innerHTML= dever.d_db);
        parseFloat(Number(document.getElementById("d_dever_kg").innerHTML= dever.d_kg));
        //adatmentés START
        let ujddb=document.getElementById("d_dever_db").innerHTML;
        localStorage.setItem("d_d_db_input",ujddb);
        let ujdkg=document.getElementById("d_dever_kg").innerHTML;
        localStorage.setItem("d_d_kg_input",ujdkg);
        //adatmentés END
    }
    else{
        window.alert("Nincs ilyen versenyző!");
    }
    
}
//DÉVÉR END

//SÜGÉR START

let suger={
    zs_db: Number(),
    zs_kg:parseFloat(Number()) ,
    d_db:Number(),
    d_kg:parseFloat(Number())
};

function suger_szamolas(){
    
    let versenyzo= prompt("Kérlek add meg a neved kezdőbetűjét!");
    if(versenyzo =="zs" || versenyzo=="Zs"){
        let zs_db_adat= Number(document.getElementById("zs_suger_db").innerHTML);
        let zs_kg_adat=parseFloat(Number(document.getElementById("zs_suger_kg").innerHTML)) ;
        suger.zs_db=zs_db_adat;
        suger.zs_kg=zs_kg_adat;
        let zs_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        suger.zs_db+= zs_ujszam_db;
        let zs_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        suger.zs_kg+= zs_ujszam_kg;
        Number(document.getElementById("zs_suger_db").innerHTML= suger.zs_db);
        parseFloat(Number(document.getElementById("zs_suger_kg").innerHTML= suger.zs_kg));
        //adatmentés START
        let ujzsdb=document.getElementById("zs_suger_db").innerHTML;
        localStorage.setItem("s_zs_db_input",ujzsdb);
        let ujzskg=document.getElementById("zs_suger_kg").innerHTML;
        localStorage.setItem("s_zs_kg_input",ujzskg);
        //adatmentes END
    }else if(versenyzo =="d"||versenyzo =="D"){
        let d_db_adat= Number(document.getElementById("d_suger_db").innerHTML);
        let d_kg_adat=parseFloat(Number(document.getElementById("d_suger_kg").innerHTML)) ;
        suger.d_db=d_db_adat;
        suger.d_kg=d_kg_adat;
        let d_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        suger.d_db+= d_ujszam_db;
        let d_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        suger.d_kg+= d_ujszam_kg;
        Number(document.getElementById("d_suger_db").innerHTML= suger.d_db);
        parseFloat(Number(document.getElementById("d_suger_kg").innerHTML= suger.d_kg));
        //adatmentés START
        let ujddb=document.getElementById("d_suger_db").innerHTML;
        localStorage.setItem("s_d_db_input",ujddb);
        let ujdkg=document.getElementById("d_suger_kg").innerHTML;
        localStorage.setItem("s_d_kg_input",ujdkg);
        //adatmentés END
    }
    else{
        window.alert("Nincs ilyen versenyző!");
    }
    
}

//SÜGÉR END

//KŐSÜLLŐ START

let kosullo={
    zs_db: Number(),
    zs_kg:parseFloat(Number()) ,
    d_db:Number(),
    d_kg:parseFloat(Number())
};

function kosullo_szamolas(){
    
    let versenyzo= prompt("Kérlek add meg a neved kezdőbetűjét!");
    if(versenyzo =="zs" || versenyzo=="Zs"){
        let zs_db_adat= Number(document.getElementById("zs_kosullo_db").innerHTML);
        let zs_kg_adat=parseFloat(Number(document.getElementById("zs_kosullo_kg").innerHTML)) ;
        kosullo.zs_db=zs_db_adat;
        kosullo.zs_kg=zs_kg_adat;
        let zs_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        kosullo.zs_db+= zs_ujszam_db;
        let zs_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        kosullo.zs_kg+= zs_ujszam_kg;
        Number(document.getElementById("zs_kosullo_db").innerHTML= kosullo.zs_db);
        parseFloat(Number(document.getElementById("zs_kosullo_kg").innerHTML= kosullo.zs_kg));
        //adatmentés START
        let ujzsdb=document.getElementById("zs_kosullo_db").innerHTML;
        localStorage.setItem("k_zs_db_input",ujzsdb);
        let ujzskg=document.getElementById("zs_kosullo_kg").innerHTML;
        localStorage.setItem("k_zs_kg_input",ujzskg);
        //adatmentes END
    }else if(versenyzo =="d"||versenyzo =="D"){
        let d_db_adat= Number(document.getElementById("d_kosullo_db").innerHTML);
        let d_kg_adat=parseFloat(Number(document.getElementById("d_kosullo_kg").innerHTML)) ;
        kosullo.d_db=d_db_adat;
        kosullo.d_kg=d_kg_adat;
        let d_ujszam_db= parseInt(prompt("Kérlek add meg a darabszámot!"));
        kosullo.d_db+= d_ujszam_db;
        let d_ujszam_kg=parseFloat(Number(prompt("Kérlek add meg a fogott hal kg-ját!"))) ;
        kosullo.d_kg+= d_ujszam_kg;
        Number(document.getElementById("d_kosullo_db").innerHTML= kosullo.d_db);
        parseFloat(Number(document.getElementById("d_kosullo_kg").innerHTML= kosullo.d_kg));
        //adatmentés START
        let ujddb=document.getElementById("d_kosullo_db").innerHTML;
        localStorage.setItem("k_d_db_input",ujddb);
        let ujdkg=document.getElementById("d_kosullo_kg").innerHTML;
        localStorage.setItem("k_d_kg_input",ujdkg);
        //adatmentés END
    }
    else{
        window.alert("Nincs ilyen versenyző!");
    }
    
}

//KŐSÜLLŐ END



//ADATMENTÉS
function adatmentes(){
    //Ezüstkárász START
    let zs_db_ki = localStorage.getItem("zs_db_input");
    if (zs_db_ki) {
        document.getElementById("zs_ezust_db").innerHTML = zs_db_ki;
    }
    let zs_kg_ki = localStorage.getItem("zs_kg_Input");
    if (zs_kg_ki) {
        document.getElementById("zs_ezust_kg").innerHTML = zs_kg_ki;
    }
    let d_db_ki = localStorage.getItem("d_db_input");
    if (d_db_ki) {
        document.getElementById("d_ezust_db").innerHTML = d_db_ki;
    }
    let d_kg_ki = localStorage.getItem("d_kg_Input");
    if (d_kg_ki) {
        document.getElementById("d_ezust_kg").innerHTML = d_kg_ki;
    }
    //Ezüstkárász START

    //Egyéb keszegfélék START
    let e_zs_db_ki = localStorage.getItem("e_zs_db_input");
    if (e_zs_db_ki) {
        document.getElementById("zs_egyb_keszeg_db").innerHTML = e_zs_db_ki;
    }
    let e_zs_kg_ki = localStorage.getItem("e_zs_kg_input");
    if (e_zs_kg_ki) {
        document.getElementById("zs_egyb_keszeg_kg").innerHTML = e_zs_kg_ki;
    }
    let e_d_db_ki = localStorage.getItem("e_d_db_input");
    if (e_d_db_ki) {
        document.getElementById("d_egyb_keszeg_db").innerHTML = e_d_db_ki;
    }
    let e_d_kg_ki = localStorage.getItem("e_d_kg_input");
    if (e_d_kg_ki) {
        document.getElementById("d_egyb_keszeg_kg").innerHTML = e_d_kg_ki;
    }
    //Egyéb keszegfélék END

    //JÁSZKESZEG START
    let j_zs_db_ki = localStorage.getItem("j_zs_db_input");
    if (j_zs_db_ki) {
        document.getElementById("zs_jasz_db").innerHTML = j_zs_db_ki;
    }
    let j_zs_kg_ki = localStorage.getItem("j_zs_kg_input");
    if (j_zs_kg_ki) {
        document.getElementById("zs_jasz_kg").innerHTML = j_zs_kg_ki;
    }
    let j_d_db_ki = localStorage.getItem("j_d_db_input");
    if (j_d_db_ki) {
        document.getElementById("d_jasz_db").innerHTML = j_d_db_ki;
    }
    let j_d_kg_ki = localStorage.getItem("j_d_kg_input");
    if (j_d_kg_ki) {
        document.getElementById("d_jasz_kg").innerHTML = j_d_kg_ki;
    }
    //JÁSZKESZEG END

    //DÉVÉRKESZEG START
    let d_zs_db_ki = localStorage.getItem("d_zs_db_input");
    if (d_zs_db_ki) {
        document.getElementById("zs_dever_db").innerHTML = d_zs_db_ki;
    }
    let d_zs_kg_ki = localStorage.getItem("d_zs_kg_input");
    if (d_zs_kg_ki) {
        document.getElementById("zs_dever_kg").innerHTML = d_zs_kg_ki;
    }
    let d_d_db_ki = localStorage.getItem("d_d_db_input");
    if (d_d_db_ki) {
        document.getElementById("d_dever_db").innerHTML = d_d_db_ki;
    }
    let d_d_kg_ki = localStorage.getItem("d_d_kg_input");
    if (d_d_kg_ki) {
        document.getElementById("d_dever_kg").innerHTML = d_d_kg_ki;
    }
    //DÉVÉRKESZEG END

    //SÜGÉR START
    let s_zs_db_ki = localStorage.getItem("s_zs_db_input");
    if (s_zs_db_ki) {
        document.getElementById("zs_suger_db").innerHTML = s_zs_db_ki;
    }
    let s_zs_kg_ki = localStorage.getItem("s_zs_kg_input");
    if (s_zs_kg_ki) {
        document.getElementById("zs_suger_kg").innerHTML = s_zs_kg_ki;
    }
    let s_d_db_ki = localStorage.getItem("s_d_db_input");
    if (s_d_db_ki) {
        document.getElementById("d_suger_db").innerHTML = s_d_db_ki;
    }
    let s_d_kg_ki = localStorage.getItem("s_d_kg_input");
    if (s_d_kg_ki) {
        document.getElementById("d_suger_kg").innerHTML = s_d_kg_ki;
    }
    //SÜGÉR END

    //KOSULLO START

    let k_zs_db_ki = localStorage.getItem("k_zs_db_input");
    if (k_zs_db_ki) {
        document.getElementById("zs_kosullo_db").innerHTML = k_zs_db_ki;
    }
    let k_zs_kg_ki = localStorage.getItem("k_zs_kg_input");
    if (k_zs_kg_ki) {
        document.getElementById("zs_kosullo_kg").innerHTML = k_zs_kg_ki;
    }
    let k_d_db_ki = localStorage.getItem("k_d_db_input");
    if (k_d_db_ki) {
        document.getElementById("d_kosullo_db").innerHTML = k_d_db_ki;
    }
    let k_d_kg_ki = localStorage.getItem("k_d_kg_input");
    if (k_d_kg_ki) {
        document.getElementById("d_kosullo_kg").innerHTML = k_d_kg_ki;
    }

    //KOSULLO END
}