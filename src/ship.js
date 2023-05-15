let hitShip

function checkForShip (player, cordinates) {

    // check for ship inside the player ships 
    let ship 
    let shipPresent 
    for(let i=0; i<player.ships.length; i++){
       ship = player.ships[i]
       shipPresent = ship.location.filter((cords) => {
           return (cords[0] === cordinates[0]) && (cords[1] === cordinates[1])})[0]

        if(shipPresent){ 
            hitShip = player.ships[i]
            return true 
        }
    }
   
    if(!shipPresent){
        return false;
    }
}

function shipFire (player,hit){

    if(checkForShip(player, hit) || !hitShip.damage.includes[hit]){
        getHit(hitShip, hit)
    }else return

    
    

}

function getHit (ship, hit){
    ship.damage.push(hit)
    
}



function isSunked (){
    if (shipHits.length === shipLength){
         return  true
    } else  return  false 
    
}


export  {getHit, checkForShip, shipFire} 