let epilogChar = 0;
const storyBegin = document.getElementsByClassName("storyBegin")
const main = document.getElementsByClassName("main")
const imageStart = document.getElementById("imageStart")
const game = document.getElementById("game");
const game2 = document.getElementById("game2");
const job = document.getElementById("job");
const job2 = document.getElementById("job2");
const swordman = document.getElementById("swordman");
const magician = document.getElementById("magician");
const spell = document.getElementById("spell")
const fight = document.getElementById("fight")
const gameOver = document.getElementById("gameOver")
var life = document.getElementById("life");  
let level = 1
const epilog = `Selamat datang Warrior!               
Uji keberuntunganmu pada tebasan terakhir melawan BOSS             `;
const speed = 80;

function attack(level) {
   let critical = Math.floor(Math.random() * 5)  
   if(level == 1) {
      attack = Math.floor(Math.random() * 50) + 5;
   } 
   /* else if(level == 2) {
      attack = Math.floor(Math.random() * 12) + 4;
   } else if(level == 3) {
      attack = Math.floor(Math.random() * 15) + 6;
   } else if(level == 4) {
      attack = Math.floor(Math.random() * 18) + 8;
   } else if(level == 5) {
      attack = Math.floor(Math.random() * 25) + 12;
   } else {
      attack = 50
   }
   */
   if(critical >= 3) {
      let criticalMultiply = Math.floor(Math.random() * 5) + 2
      switch(criticalMultiply) {
         case 2:
            attack *= 2
            break;
         case 3:
            attack *= 3
            break;
         case 4:
            attack *= 4
            break;
         case 5:
            attack *= 5
            break
      }
   }
   
   return attack
}

function attackAttack(level) {
   let serang = attack(level)
   width = 1
   var id = setInterval(lifeCondition, 10);
   function lifeCondition() {
      if (width <= 0) {
         alert(`Damage yang anda keluarkan adalah ${serang}`);
         if(serang >= 20) {
            alert(`Boss telah kalah, anda menang`)
         } else {
            alert(`Boss masih hidup dan telah menyerang anda dengan serangan mematikan`)
            game2.classList.add("hide")
            removeClass("gameOver", "hide2")
         }
         removeClass("exitFight", "hide")
         fight.classList.add("hide")
        clearInterval(id);
      } else {
        width--; 
        life.style.width = width - serang; 
        life.innerHTML = width - serang; 
      }
      
    }
}

function magic(spell) {
   
}

function attackMagic() {
   let spellUse = magic(spell)
   alert('maaf masih dalam tahap pengembangan')
   game2.classList.add("hide")
   removeClass("underConstruction", "hide")
}

function tellStory() {
   storyBegin[0].classList.add("hide")
   if (epilogChar < epilog.length) {
      document.getElementById("story").innerHTML += epilog.charAt(epilogChar);
      epilogChar++;
      setTimeout(tellStory, speed);
   } else {
      removeElement("mainEnd")
      removeClass("game", "hide")
   }
}

function home() {
   window.location = "index.html"
}

function exit() {
   // window.open('', '_self', ''); 
   window.close();
}

/*
function selectLevel(idName) {
   const level = document.getElementById(idName);
   const selectedLevel = level.selectedIndex;
   const levelNow = level.option[selectedLevel].text
   return levelNow
}
*/

function heroName() {
   game.classList.add("hide")
   let hero = document.getElementById("hero").value;
   document.getElementById("yourHeroName").innerHTML = hero;
   //let level = selectLevel("mySelect")
   removeClass("game2", "hide2")
   let jobChoose = job.getAttribute("value")
   let jobChoose2 = job2.getAttribute("value")
   if(job.checked) {
      document.getElementById("yourHeroJob").innerHTML = jobChoose + ', level: ' + level
      removeClass("magician", "hide2")      
   } else {
      document.getElementById("yourHeroJob").innerHTML = jobChoose2 + ', level: ' + level
      removeClass("swordman", "hide2")
   }
}

function fightAttack() {
   fightSword.classList.add("hide")
   removeClass("fight", "hide2") 
   removeElement("giveUp")
}

function spellAttack() {
   spellMagic.classList.add("hide")
   removeClass("spell", "hide2")
}


function giveUp() {
   let confirmChecked = confirm("Apakah anda menyerah ?")
   if(confirmChecked) {
      let confirmChecked2 = confirm(`Hei warrior, apakah anda benar-benar ingin menyerah ?`)
      if(confirmChecked2) {
         alert(`Baiklah, terimakasih telah bermain`)
         game2.classList.add("hide")
         removeClass("gameOver", "hide2")
      } else {
         alert("Warrior yang baik tidak akan pernah menyerah, ulangi perjalananmu")
      }
   } else {
      alert("Mengapa anda mencoba menyerah warrior, ulangi perjalananmu")
   }
}


function removeClass(elementId, classElement) {
   let element = document.getElementById(elementId)
   element.classList.remove(classElement)
}

function removeClassByClass(elementClass, classDelete) {
   let element = document.getElementsByClassName(elementClass)
   element.classList.remove(classDelete)
}

function addClass(elementId, elementClass) {
   let element = document.getElementById(elementId)
   element.classList.add(elementClass)
}

function removeElement(elementId) {
   let element = document.getElementById(elementId)
   element.parentNode.removeChild(element)
}

