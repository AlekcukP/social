import Vector from './vector';

class Particle {
    constructor(x, y, vx = 0, vy = 0) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(vx, vy);
        this.acc = new Vector(0, 0);
    }

    update(noise) {
        this.pos.add(this.vel);

        let { x, y } = this.pos;
        let dx = noise.getNoise(x, y, 0);
        let dy = noise.getNoise(x, y, 1);

        this.vel.add(new Vector(dx, dy));
        this.vel.mul(0.95);
    }

    draw(ctx) {
        ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
    }
}

export default Particle;
