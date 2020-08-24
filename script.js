// Fonctionnalité 1

let pageFooter = document.getElementsByTagName("footer");
let count = 0

pageFooter[0].addEventListener("click", function(){ 
  count += 1;
  console.log("clique numéro " + count);
});


// Fonctionnalité 2


let hamburgerMenu = document.querySelector(".navbar-toggler");
let navbarHeader = document.getElementById("navbarHeader");

hamburgerMenu.addEventListener("click", function(){
    navbarHeader.classList.toggle("collapse");
});

// Fonctionnalité 3


let card1 = document.getElementsByClassName("card")[0]
let editButtons = document.getElementsByClassName("btn-outline-secondary")


editButtons[0].addEventListener("click", function(){ 
  cards[0].style.color = "red";
});


// Fonctionnalité 4


let card2 = document.getElementsByClassName("card")[1]


editButtons[1].addEventListener("click", function(){ 
  if (card2.style.color === 'green'){
    card2.style.color = 'black' ;
    } else {
      card2.style.color = "green";
    }
});


// Fonctionnalité 5

let link = document.querySelector("link")
let header = document.getElementsByTagName("header")[0];

header.addEventListener("dblclick", function(){ 
  if (link.rel === "stylesheet"){
    link.removeAttribute("rel");
  } else {
      link.setAttribute("rel", "stylesheet") ;
  }
});


// Fonctionnalité 6

let viewButtons =  document.getElementsByClassName("btn-success")
let cardImages = document.getElementsByClassName("card-img-top")
let cardTexts = document.getElementsByClassName("card-text")



for (let i= 0; i < viewButtons.length; i++) {
  viewButtons[i].addEventListener("mouseover", function(){
    if (cardTexts[i].style.visibility === ""){
      cardImages[i].style.width = "20%"; 
      cardTexts[i].style.visibility = "hidden";
    } else {
      cardImages[i].style.width = ""; 
      cardTexts[i].style.visibility = "";
    }
  })};



// Fonctionnalité 7

let cardParent = document.getElementsByClassName("row")[1]
let switchButton = document.getElementsByClassName("btn-secondary")[0]


switchButton.addEventListener("click", function(){
  cardParent.insertBefore(cardParent.lastElementChild, cardParent.firstElementChild);
});



// Fonctionnalité 8


let leftSwitchButton = document.getElementsByClassName("btn-primary")[0]

leftSwitchButton.addEventListener("click", function(e){
  e.preventDefault();
  cardParent.insertBefore(cardParent.firstElementChild, cardParent.lastElementChild.nextSibling)
});



// Fonctionnalité 9


let logo = document.getElementsByClassName("navbar-brand")[0]
let body = document.getElementsByTagName("body")[0]

logo.addEventListener("keypress", function(e) {
  if (e.key === "a") {
    body.className = "col-4";
  } else if (e.key === "y") {
    body.className = "col-4 offset-md-4";
  } else if (e.key === "p") {
    body.className = "col-4 offset-md-8";
  } else if (e.key === "b") {
    body.className = "";
  }
});
