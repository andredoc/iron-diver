class Starter {

    constructor(ctx, starterPosX, starterPosY, starterWidth, starterHeight, gameSize, imagePath) {
        this.ctx = ctx;
        this.starterPos = { x: starterPosX, y: starterPosY };
        this.gameSize = gameSize;
        this.starterSize = { w: starterWidth, h: starterHeight };
        this.seImageInstance = new Image();
        this.seImageInstance.src = imagePath;
    }

    draw() {
        this.ctx.drawImage(this.seImageInstance, this.starterPos.x, this.starterPos.y, this.starterSize.w, this.starterSize.h);

    }


}