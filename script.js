const player = document.getElementById('player');
const upBtn = document.getElementById('up-btn');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const antagonist = document.getElementById('antagonist');
const startButton = document.getElementById('start-game');
const antagonist2 = document.getElementById('antagonist2');
let newScore = 0;
let score = document.getElementById('score');
let img = document.getElementById('antagonist-image');
img.src="apple.png";


//is not used right now:
function fruitChange(){

    let randomThings =["apple.png","bananas.png","watermelon.png","lemon.png","pear.png","cat.png","poison.png","sneakers.png","hot-dog.png","hamburger.png"];
    let randomFruits = Math.floor(Math.random() * 11);
    img.src = randomThings[randomFruits];
}




startButton.addEventListener('click',function(){
    console.log("clicked");
    score.innerText = newScore = 0;
   let fruitChange = setInterval(function(){

    let randomThings =["poison.png","apple.png","bananas.png","watermelon.png","lemon.png","pear.png","cat.png","poison.png","sneakers.png","hot-dog.png","hamburger.png"];
    let randomFruits = Math.floor(Math.random() * 11);
    img.src = randomThings[randomFruits];

   },2300);
  

    
        antagonist.classList.add('attack');
       


    setTimeout(function(){
        antagonist.classList.remove('attack')
       
        alert("good job! you score:"+ newScore);
        newScore = 0;
    },40000)



})

function wrongAntagonist(){
 let newh1 = document.createElement("h1");
newh1.innerHTML = "That is not a fruit"
let parent = document.getElementById("wrong-antagonist");
parent.insertBefore(newh1, parent.children[0]);
}



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
                console.log(img.src)

                
                    if(img.src == "file:///Users/josefinhellgren/Desktop/associtations%20spel/pear.png" || img.src == "file:///Users/josefinhellgren/Desktop/associtations%20spel/lemon.png" || img.src == "file:///Users/josefinhellgren/Desktop/associtations%20spel/bananas.png" || img.src == "file:///Users/josefinhellgren/Desktop/associtations%20spel/watermelon.png" || img.src == "file:///Users/josefinhellgren/Desktop/associtations%20spel/apple.png"){
                        score.innerText = newScore++;
                        //the element disapears
                    } else if(img.src== "file:///Users/josefinhellgren/Desktop/associtations%20spel/poison.png"){
                        score.innerText = newScore--;
                      
                       


                    }


                   
                

               
            


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





   









