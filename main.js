var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  goldPerClickCost2: 50,
  goldPerClickCost3: 150,
  goldPerClickCost4: 400
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

function buyGoldPerClick2() {
  if (gameData.gold >= gameData.goldPerClickCost2) {
    gameData.gold -= gameData.goldPerClickCost2
    gameData.goldPerClick += 4
    gameData.goldPerClickCost2 *= 3
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade2").innerHTML = "Upgrade Cart (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost2 + " Gold"
  }
}
function buyGoldPerClick3() {
  if (gameData.gold >= gameData.goldPerClickCost3) {
    gameData.gold -= gameData.goldPerClickCost3
    gameData.goldPerClick += 12
    gameData.goldPerClickCost3 *= 5
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade3").innerHTML = "Upgrade Cart (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost3 + " Gold"
  }
}
function buyGoldPerClick4() {
  if (gameData.gold >= gameData.goldPerClickCost4) {
    gameData.gold -= gameData.goldPerClickCost4
    gameData.goldPerClick += 50
    gameData.goldPerClickCost4 *= 10
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade4").innerHTML = "Upgrade Cart (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost4 + " Gold"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function(){
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (saveGame !== null) {
  gameData = saveGame
}
