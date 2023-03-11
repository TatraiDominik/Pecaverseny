let ezust_karasz={
    zs_db: Number(),
    zs_kg: Number(),
    d_db:Number(),
    d_kg:Number()
};
function ezust_szamolas(){
    
    let adat= Number(document.getElementById("zs_ezust_db").innerHTML);
    ezust_karasz.zs_db=adat;
    let ujszam= parseInt(prompt("Kérlek add meg a darabszámot!"));
    ezust_karasz.zs_db+= ujszam;
    Number(document.getElementById("zs_ezust_db").innerHTML= `${ezust_karasz.zs_db} db`);
    
} 



