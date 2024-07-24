import Vector from './vector';

class Particle {
    constructor(x, y, vectorX = 0, vectorY = 0) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(vectorX, vectorY);
        this.acc = new Vector(0, 0);
    }

    update(noise) {
        this.pos.add(this.vel);

        const { x, y } = this.pos;
        const dx = noise.getNoise(x, y, 0);
        const dy = noise.getNoise(x, y, 1);

        this.vel.add(new Vector(dx, dy));
        this.vel.mul(0.95);
    }

    draw(ctx) {
        ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
    }
}

export default Particle;
