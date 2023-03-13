const player = document.getElementById('player');
const upBtn = document.getElementById('up-btn');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const antagonist = document.getElementById('antagonist');
const startButton = document.getElementById('start-game');
let newScore = 0
let score = document.getElementById('score');


startButton.addEventListener('click',function(){
    console.log("clicked");
   

    
        antagonist.classList.add("attack")

    setTimeout(function(){
        antagonist.classList.remove('attack')
        alert("good job! you score:"+ newScore);
        newScore = 0;
    },50000)



})



let checkCollision = setInterval(function(){
    const enemyStyles = window.getComputedStyle(antagonist);
    


    
        let hero = player.getBoundingClientRect();
        let enenmy = antagonist.getBoundingClientRect();

       /* console.log("hero left:" + hero.left);
        console.log("enemy left:" + enenmy.left);
        console.log("hero top" + hero.top);
        console.log("enemy top" + enenmy.top);
        console.log("hero width:" + hero.width);
        console.log("enemy width:" + enenmy.width);
        console.log("hero height:" + hero.height);
        console.log("enemy height:" + enenmy.height);*/

       
        
        if (hero.left < enenmy.left + enenmy.width  && hero.left + hero.width  > enenmy.left &&
              hero.top < enenmy.top + enenmy.height && hero.top + hero.height > enenmy.top) {
                console.log("chaught");

                
                    score.innerText = newScore++;
                

               
                console.log(enemyStyles.backgroundColor)



                /*antagonist.style.animation = "none";*/
        }
        else{
          
        }
      

},10)
  




/*let checkStatus = setInterval(function(){
let playerTop = parseInt(
    window.getComputedStyle(player).getPropertyValue("top"))
    let antagonistLeft = parseInt(window.getComputedStyle(antagonist).getPropertyValue("left"))


    console.log(getOffset(player).left)
    console.log(getOffset(antagonist).left)

    
if (antagonistLeft <40 && antagonistLeft >0 && playerTop >= 250){
    console.log("chaught");
    antagonist.style.animation = "none";
    
    
} else if(antagonistLeft<40 && antagonistLeft>0 && playerTop <= 250){
   score.innerText = newScore++;
  

}
    
},10)*/


/*let checkPositions = setInterval(function(){


    let playerTops = Math.round(getOffset(player).top);
    let antagnoistTops = Math.round(getOffset(antagonist).top);
    let playersLeft = Math.round(getOffset(player).left);
    let antagonistsLeft = Math.round(getOffset(antagonist).left);


    console.log("rundade" + playersLeft)
    console.log("rundade" + antagonistsLeft)
    console.log("rundad" + playerTops)
    console.log("rundad" + antagnoistTops)

    if(playerTops == antagnoistTops && antagonistsLeft == playersLeft){
        console.log("we are at the same position")
        antagonist.style.animation = "none";
    }
    

},10)*/





function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }






upBtn.addEventListener('click',function(){
    jump(player);
   
})

rightBtn.addEventListener('click', function(){
    let currentLeft = parseFloat(getComputedStyle(player).left);
    currentLeft += 60;  
    player  .style.left = currentLeft + 'px';

   
    
console.log("flytta till höger")
})

leftBtn.addEventListener('click', function(){


    let currentLeft = parseFloat(getComputedStyle(player).left);
    currentLeft -= 60;  
    player  .style.left = currentLeft + 'px';

})




function jump(player){

    if(player.classList!= "animate"){
        player.classList.add("animate")

    }setTimeout(function(){
        player.classList.remove('animate')
    },500)


}





   









