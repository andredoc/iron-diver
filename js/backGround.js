class Background {

    constructor(ctx, backGroundPosX, backGroundPosY, backGroundWidth, backGroundHeight, gameSize) {
        this.ctx = ctx;
        this.backGroundPos = { x: backGroundPosX, y: backGroundPosY }
        this.gameSize = gameSize
        this.backGroundPos.x = 0;
        this.backGroundPos.y = 0;
        this.backGroundVelX = 5;
        this.backGroundSize = { w: backGroundWidth, h: backGroundHeight }
        this.imageInstance = undefined,

            this.init()
    }
    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = `./img/fondov1.png`;

    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.backGroundPos.x, this.backGroundPos.y, this.backGroundSize.w, this.backGroundSize.h);
        this.ctx.drawImage(this.imageInstance, this.backGroundPos.x + this.backGroundSize.w, this.backGroundPos.y, this.backGroundSize.w, this.backGroundSize.h);
        this.move()
    }

    move() {
        if (this.backGroundPos.x <= -this.backGroundSize.w) {
            this.backGroundPos.x = 0;
        }
        this.backGroundPos.x -= this.backGroundVelX;
    }
}


