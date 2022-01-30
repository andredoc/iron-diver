class Waves {

    constructor(ctx, wavePosX, wavePosY, waveWidth, waveHeight, gameSize, waveVelX) {
        this.ctx = ctx;
        this.wavePos = { x: wavePosX, y: wavePosY };
        this.waveVelX = waveVelX;
        this.gameSize = gameSize;
        this.imgURl = `./img/ondas.png`
        this.waveSize = { w: waveWidth, h: waveHeight };
        this.imageInstance = undefined,

            this.init()
    }
    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = this.imgURl

    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.wavePos.x, this.wavePos.y, this.waveSize.w, this.waveSize.h);
        this.ctx.drawImage(this.imageInstance, this.wavePos.x + this.waveSize.w, this.wavePos.y, this.waveSize.w, this.waveSize.h);
        console.log(`surfsurf`)
        this.move()

    }
    move() {
        if (this.wavePos.x <= -this.waveSize.w) {
            this.wavePos.x = this.gameSize.w - 130;
        }
        this.wavePos.x -= this.waveVelX;
    }
}