
var splashScreen, play, next, bgimg
var gameState = "wait"
var playbutton, musicbutton, mutebutton, nextbutton, bgSound, player

function preload() {
    // splashScreen = loadImage("splash.gif")
    // bgimg = loadImage("bgImg2.png")

    // bgSound = loadSound("backgroundmusic.mp3")


    splashScreen=loadImage("lemon.gif")
appleimg=loadImage("apple.gif")
orangeimg=loadImage("orange1.gif")
watermelonimg=loadImage("watermelon.gif")
pie=loadImage("orange-unscreen.gif")
bgimg=loadImage("background.png")

}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("apple.gif")
    playbutton.position(width / 2 - 200, height - 200)
    playbutton.size(150, 150)

    musicbutton = createImg("watermelon.gif")
    musicbutton.position(playbutton.x + 200, height - 200)
    musicbutton.size(160, 150)
    // musicbutton.mouseClicked(mute)

    // musicbutton.hide()

    mutebutton = createImg("orange1.gif")
    mutebutton.position(playbutton.x + 200, height - 200)
    mutebutton.size(160, 150)
    // mutebutton.mouseClicked(mute)


    push()
    // imageMode(CENTER)
    // ground = createSprite(width / 4, height / 150)
    ground = createSprite(width/2,height-100)

    // ground.x = ground.width /2;
    ground.addImage("ground", bgimg)
    ground.scale =1.75
    ground.x=width/2
    ground.visible = false
    pop()


    invisibleGround = createSprite(width / 2, height - 10, width, 20)
    invisibleGround.visible = false

    mutebutton.hide()
    player = new Player()


}

function draw() {

    if (gameState == "wait") {
        background(splashScreen)
    }

    playbutton.mousePressed(() => {
        gameState = "about"
    })


    if (gameState == "about") {
        popabout()
        playbutton.hide()
        musicbutton.hide()
    }


    if (gameState == "level1") {
        background(bgimg)
        spawnFruits()
        ground.visible = true
        ground.velocityX = -4
        if (ground.x < 0) {
            ground.x = ground.width / 2;
        }
        player.show()
        player.move()


        if(player.x >width-20){
            player.x=100
        }
    }


    drawSprites()

}



class Player {
    constructor() {
        this.x = width / 2
        this.y = height - 250
        this.image = loadImage("lemon-player.gif")
    }


    move() {
        if (keyIsDown(LEFT_ARROW) && this.x > 0) {
            this.x -= 5
        }

        if (keyIsDown(RIGHT_ARROW) && this.x < width) {
            this.x += 5
        }

        if (keyIsDown(UP_ARROW) && this.x <= height-100) {
            this.velocityY = -5
        }
    }

    show() {
        fill(0, 0, 255)
        image(this.image, this.x, this.y, 250, 250)
    }
}



function popabout() {
    swal({
        title: "The Lemon Rush!!!",
        text: "Let the Lemon Survive all the ODDs ..\n and Reach the King!!",
        imageUrl: "mango.gif",
        imageSize: "300x300",
        confirmButtonText: "START ",
        confirmButtonColor: "green"

    },
        function () {
            gameState = "level1"
        })


}


function spawnFruits(){

if(frameCount%80==0){
randy=Math.round(random(100-height-100))
fruit=createSprite(width,randy)

rand=Math.round(random(1,4))
fruit.velocityX=-2

// appleimg=loadImage("apple.gif")
// orangeimg=loadImage("orange1.gif")
// watermelonimg=loadImage("watermelon.gif")
// pie


switch(rand){

case 1: fruit.addImage(appleimg)
break;

case 2: fruit.addImage(orangeimg)
break;

case 3: fruit.addImage(watermelonimg)
break;

case 3: fruit.addImage(pie)
break;

default:break

}


}


}

// function mute() {
//     if (bgSound.isPlaying()) {
//         bgSound.stop();
//         musicbutton.show();
//         mutebutton.hide();
//         console.log("mute")
//     }
//     else {
//         mutebutton.show()
//         musicbutton.hide();
//         bgSound.play();
//         console.log("unmute")
//     }
// }