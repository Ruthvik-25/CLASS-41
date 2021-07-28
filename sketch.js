var gameState = 0, playerCount = 0
var form, game, player
var database
var allPlayers
var cars,car1,car2,car3,car4
function preload() {
  track=loadImage("images/track.jpg")
  ground=loadImage("images/ground.png")
  car1_image=loadImage("images/car 777.png")
  car2_image=loadImage("images/car2.png")
  car3_image=loadImage("images/car3.png")
  car4_image=loadImage("images/car4.png")
}
function setup() {
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
if(playerCount===4){
  game.update(1)
}
if(gameState===1){
  clear()
  game.play()
}
  if(gameState===2){
    game.end()
  }
}