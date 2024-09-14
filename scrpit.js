console.log("Tic Tac Toe") ;
let audio_turn = new Audio("ting.mp3") ;
let game_over = new Audio("gameover.mp3") ;
let turn = "X";
let endgame = false ;

   const turn_option = () =>
    {
        
        return turn === "X" ? "0" : "X" ;
    } 
// function to change the turn 
    /*function turn_option()
    {
       if (turn == "X"){
        return "0" ;
       }
       else{
        return "X" ;
       }
    }
*/
    //function to check for a win
    
    const checkwin = () => {

        let boxtexts = document.getElementsByClassName('boxtext');
        //logic for win 
        let wins = [
            [0,1,2 , 5,5,0],
            [3,4,5,5,15,0] ,
            [6,7,8,5,25,0] ,
            [0,3,6,-5,15,90],
            [1,4,7,5,15,90],
            [2,5,8,15,15,90] ,
            [0,4,8,5,15,45],
            [2,4,6,5,15,135]
        ]
        wins.forEach(e => {
            if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')){
                document.querySelector('.info').innerText = boxtexts[e[0]].innerText + ' Won' ;
                endgame = true ;
                game_over.play() ;
                document.querySelector('.image').getElementsByTagName('img')[0].style.width = '200px' ;

                // transform
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "20vw" ;
            }
        })
    }

    //Game logic
  
   let boxes = document.getElementsByClassName("box") ;
   Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext") ;
    
    // now add event listner
    element.addEventListener('click' , () => {
        if(boxtext.innerText == ''){
            boxtext.innerText = turn ;
            turn = turn_option();
            audio_turn.play() ;
            //music.play() ;
            checkwin() ;
            if(!endgame){
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn ;
        }
        } 
        })
   })   
//Add onclick listener to reset button

reset.addEventListener('click' , () =>{

    let boxtexts = document.querySelectorAll('.boxtext') ;
    Array.from(boxtexts).forEach(element => {
        element.innerText = '' 
    });
    turn = "X" ;
    endgame = false ;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn ;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = '0px' 
    document.querySelector(".line").style.width = "0vw" ;
})


