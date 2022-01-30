
class Token {
    constructor(ctx, tokenPosX, tokenPosY, tokenWidth, tokenHeight, gameSize) {

        this.ctx = ctx
        this.tokenPos = { x: tokenPosX, y: tokenPosY }
        this.tokenSize = { w: tokenWidth, h: tokenHeight }
        //this.tokenVel = { x: 10, y: 1 }
        //this.tokenPhysics = { gravity: .4 }
        this.gameSize = gameSize
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/token.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.tokenPos.x, this.tokenPos.y, this.tokenSize.w, this.tokenSize.h)
    }

    move() {
        //this.tokenPos.x += this.tokenVel.x

        //this.tokenVel.y += this.tokenPhysics.gravity
        //this.tokenPos.y += this.tokenVel.y

        this.checkCollision()
    }

    //checkCollision() {}

}