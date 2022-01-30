class Player {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight, gameSize, lifes) {
        this.ctx = ctx
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerInitialPos = { x: playerPosX, y: 520 * 1.8 }
        this.playerSize = { w: playerWidth, h: playerHeight }
        // la velocidad de caida es constante
        this.playerVel = { x: 5, y: 1 }


        this.gameSize = gameSize
        this.imageInstance = undefined
        this.attackImageInstance = undefined
        this.jumpImageInstance = undefined
        this.attackOne = []
        this.initialMaxAttackOne = 10
        this.maxAttackOne = this.initialMaxAttackOne
        this.canShoot = true            // ataque larga distancia
        this.attackTwo = false          // ataque a corta distancia
        this.lifes = lifes
        this.isMovingUp = false

        this.init()
    }
    /////INICIALIZAR//
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `./img/player_walking.png`
        this.imageInstance.frames = 3
        this.imageInstance.framesIndex = 0
        this.attackImageInstance = new Image()
        this.attackImageInstance.src = './img/punch.png'
        this.jumpImageInstance = new Image()
        this.jumpImageInstance.src = `./img/jump.png`

    }
    ///CREAR///
    draw(framesCounter) {

        if (!this.attackTwo && !this.isMovingUp) {
            this.ctx.drawImage(
                this.imageInstance,
                this.imageInstance.framesIndex * (this.imageInstance.width / this.imageInstance.frames),
                0,
                this.imageInstance.width / this.imageInstance.frames,
                this.imageInstance.height,
                this.playerPos.x,
                this.playerPos.y,
                this.playerSize.w,
                this.playerSize.h
            )

        } else if (this.attackTwo) {
            this.ctx.drawImage(
                this.attackImageInstance,
                this.playerPos.x,
                this.playerPos.y,
                this.playerSize.w,
                this.playerSize.h
            )
        } else if (this.isMovingUp) {
            this.ctx.drawImage(
                this.jumpImageInstance,
                this.playerPos.x,
                this.playerPos.y,
                this.playerSize.w,
                this.playerSize.h
            )
        }

        this.animate(framesCounter)
        this.dropDiver()

    }
    //ANIMATE DIVER
    animate(framesCounter) {
        if (framesCounter % 9 == 0) {
            this.imageInstance.framesIndex++;
        }
        if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
            this.imageInstance.framesIndex = 0;
        }
    }
    //DROP FOR DEFAULT
    dropDiver() {
        if (this.playerPos.y < this.playerInitialPos.y) {   // player on top from its initial position
            this.playerPos.y += this.playerVel.y;           // SUM velocity for a constant drop
        } else {
            this.playerPos.y = this.playerInitialPos.y;
            this.playerVel.y = 1;
        }
    }
    //MOVES inside the SCREEN
    moveRight() {
        if (this.playerPos.x + this.playerSize.w < this.gameSize.w) {
            this.playerPos.x += 70
        }
    }
    moveLeft() {
        if (this.playerPos.x >= 0) {
            this.playerPos.x -= 70
        }
    }
    moveUp() {
        if (this.playerPos.y >= 0) {
            this.playerPos.y -= 150
        }
    }
    moveDown() {
        this.playerPos.y += 50
    }
    resetShoot() {
        return this.maxAttackOne = this.initialMaxAttackOne
    }
    shoot() {
        if (this.canShoot) {
            this.attackOne.push(new AttackOne(this.ctx, this.playerPos.x + this.playerSize.w, this.playerPos.y + this.playerSize.h / 2, this.playerSize.w * .75, this.playerSize.h / 4, this.gameSize))
            this.maxAttackOne--
        }

        return this.maxAttackOne
    }

    loseLife() {
        this.lifes--;
        //return this.lifes;
    }

    clearAttackOne() {
        this.attackOne = this.attackOne.filter(elm => elm.attackOnePos.x <= this.gameSize.w)
    }
}

