class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static fromPolar(r, t) {
        return new Vector(r * Math.cos(t), r * Math.sin(t));
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    mul(value) {
        this.x *= value;
        this.y *= value;
        return this;
    }

    dist(vector) {
        const dx = this.x - vector.x;
        const dy = this.y - vector.y;
        return Math.sqrt(dx * dx, dy * dy);
    }

    make() {
        const mag = this.mag;
        return new Vector(this.x / mag, this.y / mag);
    }

    get mag() {
        return Math.sqrt(this.x * this.x, this.y * this.y);
    }

    set mag(value) {
        const vector = this.make();
        this.x = vector.x * value;
        this.y = vector.y * value;
    }
}

export default Vector;
