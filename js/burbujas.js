class Bubbles {

    constructor(ctx, bubblesPosX, bubblesPosY, bubblesWidth, bubblesHeight, gameSize, bubblesVelY) {
        this.ctx = ctx;
        this.bubblesPos = { x: bubblesPosX, y: bubblesPosY };
        this.bubblesVelY = bubblesVelY;
        this.gameSize = gameSize;
        this.imgsArr = ['./img/burbuja.png', './img/burbuja2.png']
        this.imgURl = this.getRandomImg();
        this.bubblesSize = { w: bubblesWidth, h: bubblesHeight };
        this.imageInstance = undefined,

            this.init()
    }
    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = this.imgURl

    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.bubblesPos.x, this.bubblesPos.y, this.bubblesSize.w, this.bubblesSize.h);
        this.move()

    }
    move() {
        this.bubblesPos.y -= this.bubblesVelY;
    }
    getRandomImg() {
        //return Math.floor(Math.random() * (max - min + 1) + min)
        const imageindex = Math.floor(Math.random() * ((this.imgsArr.length + 1) - 1))
        console.log(imageindex)
        return this.imgsArr[imageindex]
    }

}