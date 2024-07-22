class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static fromPolar(r, t) {
        return new Vector(r * Math.cos(t), r * Math.sin(t));
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    mul(x) {
        this.x *= x;
        this.y *= x;
        return this;
    }

    dist(v) {
        let dx, dy;
        return Math.sqrt((dx = this.x - v.x) * dx, (dy = this.y - v.y) * dy);
    }

    get mag() {
        return Math.sqrt(this.x * this.x, this.y * this.y);
    }

    set mag(v) {
        let n = this.norm();
        this.x = n.x * v;
        this.y = n.y * v;
    }

    norm() {
        let mag = this.mag;
        return new Vector(this.x / mag, this.y / mag);
    }
}

export default Vector;
