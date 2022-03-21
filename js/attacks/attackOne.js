class AttackOne {   // larga distancia
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight, gameSize) {
        this.ctx = ctx
        this.attackOnePos = { x: playerPosX, y: playerPosY }
        this.attackOneSize = { w: playerWidth, h: playerHeight }
        this.gameSize = gameSize
        this.imageInstance = undefined
        this.attackOneVelX = 10

        this.init()
    }
    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = `./img/ancher.png`

    }
    draw() {

        this.ctx.drawImage(this.imageInstance, this.attackOnePos.x, this.attackOnePos.y, this.attackOneSize.w, this.attackOneSize.h)
        this.move()
    }

    move() {
        this.attackOnePos.x += this.attackOneVelX
    }
}