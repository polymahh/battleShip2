import './css/normalize.css';
import './css/style.css';
import boardFactory  from "./board";
import playerFactory from "./player"
import {getHit, checkForShip, shipFire} from "./ship"
import { container } from 'webpack';

let currentPlayer
let gamePlay = {
    starting : true,
    direction : 'hor',
    size : 3,

    Init (){
        this.casheDom()
        this.bindEvents()
        renderBoard(this.playerOneContainer)
        renderBoard(this.playerTwoContainer)
        renderBoard(this.playerStart)
        this.playerOne = playerFactory()
        this.playerTwo = playerFactory()


    
    },

    casheDom (){
        this.containner = document.getElementsByClassName('content')
        this.playerOneContainer = this.container.getElementById('playerOne')
        this.playerTwoContainer = this.container.getElementById('playerTwo')
        this.playerStart = this.container.getElementById('playerStart')
        
    
    },

    bindEvents (){
        this.playerOneContainer.addEventListener("click" ,(e) => {
            let cords = e.target.id 
    
            if(this.starting){
                if(currentPlayer == this.playerOne){
                    this.playerOne.placeShip(this.currentPlayer , cords, this.size, this.direction)
                    this.switchPlayer()
                }else if(currentPlayer == this.playerTwo){
                    this.playerTwo.placeShip(this.currentPlayer , cords, this.size, this.direction)
                    this.switchPlayer()
                }
            }else if (!this.starting){
                shipFire(this.currentPlayer,cords)
                this.switchPlayer()

            }
    
        })
    
    },

    switchPlayer () {

        if(currentPlayer == this.playerOne){
            currentPlayer = this.playerTwo
        }else currentPlayer = this.playerOne
        
    
    }

}









function renderBoard (element){
    console.log(element)
    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <=9; y++) {
            let div = document.createElement('div')
            div.classList.add('box');
            div.id = `${x},${y}`;
            element.appendChild(div);
        }
        
    }

}

function palyerMove ( currentPlayer , click, size, direction){
    if(starting){

        playerFactory.placeShip(currentPlayer , click, size, direction)

    } else if (!starting){
        shipFire(currentPlayer,click)
    }

}



gamePlay.Init()
console.log('working')

export {palyerMove}