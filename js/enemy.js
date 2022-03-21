class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemyWidth, enemyHeight, gameSize, keys, enemyVelX, imgUrl) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPosX, y: enemyPosY }
        this.enemySize = { w: enemyWidth, h: enemyHeight }
        this.imgUrl = imgUrl
        this.enemyVel = undefined
        this.enemyPhysics = { gravity: .4 }
        this.gameSize = gameSize
        this.imageInstance = undefined
        this.keys = keys
        this.attackOne = 0
        this.attackTwo = []
        this.enemyVelX = enemyVelX
        this.hitPlayer = false // No he golpeado al jugador
        this.init()
    }
    //INICIALIZAR
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.imgUrl
        this.imageInstance.frames = 3
        this.imageInstance.framesIndex = 0
    }

    //CREAR
    draw(framesCounter) {
        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.framesIndex * (this.imageInstance.width / this.imageInstance.frames),
            0,
            this.imageInstance.width / this.imageInstance.frames,
            this.imageInstance.height,
            this.enemyPos.x,
            this.enemyPos.y,
            this.enemySize.w,
            this.enemySize.h)
        this.move()
        this.animate(framesCounter)
    }
    move() {
        if (this.enemyPos.x <= -this.gameSize.w) {
            this.enemyPos.x = this.gameSize.w - 130;
        }
        this.enemyPos.x -= this.enemyVelX;
    }
    //ANIMATE ENEMY
    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
            this.imageInstance.framesIndex++;
        }
        if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
            this.imageInstance.framesIndex = 0;
        }
    }
}