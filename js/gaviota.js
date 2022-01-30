class Seagul {

    constructor(ctx, seagulPosX, seagulPosY, seagulWidth, seagulHeight, gameSize, seagulVelX) {
        this.ctx = ctx;
        this.seagulPos = { x: seagulPosX, y: seagulPosY };
        this.seagulVelX = seagulVelX;
        this.gameSize = gameSize;
        this.imgl = `./img/gaviotas.png`
        this.seagulSize = { w: seagulWidth, h: seagulHeight };
        this.seImageInstance = undefined,

            this.init()
    }
    init() {
        this.seImageInstance = new Image();
        this.seImageInstance.src = this.imgl

    }
    draw() {
        this.ctx.drawImage(this.seImageInstance, this.seagulPos.x, this.seagulPos.y, this.seagulSize.w, this.seagulSize.h);
        this.move()

    }
    move() {
        if (this.seagulPos.x <= -this.gameSize.w) {
            this.seagulPos.x = this.gameSize.w - 130;
        }
        this.seagulPos.x -= this.seagulVelX;
    }


}