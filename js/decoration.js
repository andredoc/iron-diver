class Decoration {

    constructor(ctx, plantPosX, plantPosY, plantWidth, plantHeight, gameSize, plantVelX) {
        this.ctx = ctx;
        this.plantPos = { x: plantPosX, y: plantPosY };
        this.plantVelX = plantVelX;
        this.gameSize = gameSize;
        this.imgsArr = ['./img/plantas1.png', './img/plantas2.png', `./img/stone.png`]
        this.imgURl = this.getRandomImg();
        this.plantSize = { w: plantWidth, h: plantHeight };
        this.imageInstance = undefined,

            this.init()
    }
    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = this.imgURl

    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.plantPos.x, this.plantPos.y, this.plantSize.w, this.plantSize.h);
        this.move()

    }
    move() {
        this.plantPos.x -= this.plantVelX;
    }

    getRandomImg() {
        const imageindex = Math.floor(Math.random() * ((this.imgsArr.length + 1) - 1))
        console.log(imageindex)
        return this.imgsArr[imageindex]
    }
}