class attackTwo {   // ataque de corta distancia
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight, gameSize) {
        this.ctx = ctx
        this.attackTwoPos = { x: playerPosX, y: playerPosY }
        this.attackTwoSize = { w: playerWidth, h: playerHeight }
        this.gameSize = gameSize
        this.imageInstance = undefined

        this.init()
    }
    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = `./img/punch.png`
    }
    draw() {

        this.ctx.drawImage(this.imageInstance, this.attackTwoPos.x, this.attackTwoPos.y, this.attackTwoSize.w, this.attackTwoSize.h)

    }


}