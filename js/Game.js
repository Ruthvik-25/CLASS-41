class Game {
    constructor() { }

    getState() {
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value", function (data) {
            gameState = data.val()
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    start() {
        if (gameState === 0) {
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }

        car1 = createSprite(100, 200)
        car1.addImage(car1_image)
        car1.scale=0.2
        car2 = createSprite(300, 200)
        car2.addImage(car2_image)
        car3 = createSprite(500, 200)
        car3.addImage(car3_image)
        car4 = createSprite(700, 200)
        car4.addImage(car4_image)
        cars = [car1, car2, car3, car4]
    }

    play() {
        form.hide()
        textSize(30)
        text("Game Start", 120, 100)
        background(ground)
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        Player.getPlayerInfo()
        player.getCarsAtEnd()
        var y = 0, x = 200, index = 0

        for (var p in allPlayers) {
            index = index + 1
            x = x + 235
            y = displayHeight - allPlayers[p].distance

            cars[index - 1].x = x
            cars[index - 1].y = y
    
            if (index === player.index) {
            fill("red")
            ellipse(x,y,70,70)
             camera.position.x=displayWidth/2
             camera.position.y=cars[index-1].y
            }


        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 50
            player.update()
        }

        if(player.distance>displayHeight*5){
            gameState=2
            player.rank+=1
            Player.updateCarsAtEnd(player.rank)
        }
        drawSprites()
    }

    end(){
        console.log("GAME ENDED")
        console.log("rank :"+player.rank)
        if(player.rank===1)
        alert("🥇\n"+"you have got a rank "+player.rank)
        else if(player.rank===2)
        alert("🥈\n"+"you have got a rank "+player.rank)
        else if(player.rank===3)
        alert("🥉\n"+"you have got a rank "+player.rank)
        else 
        alert("better luck next time😐")
    }
}