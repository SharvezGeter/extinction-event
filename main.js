//1. querySelectorAll

let dinoList = document.querySelectorAll("#ordered-dino-list li");

function olStrikeThrough(){
    for(let i = 0; i < dinoList.length; i++){
            dinoList[i].style.textDecoration = "line-through";
        }
    }

    for(let i = 0; i < dinoList.length; i++){

        dinoList[i].addEventListener("click", function(){
            console.log(dinoList[i].innerText)
            dinoList[i].style.textDecoration = "line-through"
            })
    }

    
//olStrikeThrough();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//#unordered-dinos - parent div


let dinoList2 = document.querySelectorAll("#unordered-dinos li");
function fade(){
    for(let i = 0; i < dinoList2.length; i++){
            dinoList2[i].style.opacity = "0"
        }
    }

    for(let i = 0; i < dinoList2.length; i++){
        dinoList2[i].addEventListener("click", function(){
            dinoList2[i].style.opacity = "0"
            })
    }
    
//fade();

// let dinoList2 = document.querySelector("#unordered-dinos");
// dinoList2.addEventListener("click", function(event){
//     console.log("Parent Clicked");
//     console.log(event.target);

//     let listItem = event.target;                     //BUBBLES
//     console.log(listItem.innerText)

//     listItem.style.opacity = "0";
// })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let dinoImages = document.querySelectorAll("#row img");
function collapseImg(){
    for(let i = 0; i < dinoImages.length; i++){
        dinoImages[i].style.width = "0px";
        }
    }

    for(let i = 0; i < dinoImages.length; i++){
    dinoImages[i].addEventListener("click", function(){
    dinoImages[i].style.width = "0px";
    })
    }
//collapseImg();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function meteorMe(dinoList,dinoList2,dinoImages){

    for(let i = 0; i < dinoList.length; i++){
        dinoList[i].style.textDecoration = "line-through"
        }
    for(let i = 0; i < dinoList2.length; i++){
        dinoList2[i].style.opacity = "0";
        }
    for(let i = 0; i < dinoImages.length; i++){
        dinoImages.style.width = "0px"
    }
}
let meteor = document.querySelector("#destroy-all")
meteor.addEventListener("click", function(){
    olStrikeThrough();
    fade();
    collapseImg();
})







