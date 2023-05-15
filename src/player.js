import {getHit, checkForShip, shipFire} from './ship'

function playerFactory (player , cordinates){

    let shipCordinates = []
    // let board = [[9,9]]
    function checkSpot (player, cordinates){

        let xSpot = cordinates[0]
        let ySpot = cordinates[1]

        let availbaleSpot = !checkForShip(player, cordinates)

        if ((xSpot <= 9 && xSpot >=0) && (ySpot <= 9 && ySpot >=0)){
            return availbaleSpot 
        }else return false

    }

    function checkSpots ( player ,cordinates, direction, size){

        

        for (let i = 0; i < size; i++) {
            if(direction == 'hor'){
                shipCordinates.push([cordinates[0]+i , cordinates[1]])
            }else if(direction == 'ver'){
                shipCordinates.push([cordinates[0] , cordinates[1] + i])
            }
            
        }

        return shipCordinates.every(element => checkSpot(player,element))



    }

    function placeShip(player, cordinates, direction, size){

        if(checkSpots(player ,cordinates, direction, size)){
            player.ships.push({
                size:size,
                location:shipCordinates,
                direction:direction
            })
        }else {
            console.log("something went worng")
        }
        
    }

    

    return {checkSpot, checkSpots, placeShip}
}

export default playerFactory