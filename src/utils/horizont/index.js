import Noise from './noise';
import Particle from './particle';
import Vector from './vector';
import { random } from 'lodash';

let w = innerWidth * devicePixelRatio;
let h = innerHeight * devicePixelRatio;
let noise;
let particles;
let rid;

const canvasEl = document.createElement('canvas');
const canvasContext = canvasEl.getContext('2d');

canvasEl.width = w;
canvasEl.height = h;

document.body.appendChild(canvasEl);
canvasEl.addEventListener('mousedown', generate);
canvasEl.addEventListener('touchstart', generate);

function init() {
    noise = new Noise(w, h, 8);
    particles = [];

    for (let i = 0; i < 10000; i++) {
        let r1 = w / 4;
        let a1 = random(0, 2 * Math.PI, true);
        let r2 = random(0, 1, true);
        let a2 = random(0, 2 * Math.PI, true);

        let pos = Vector.fromPolar(r1, a1),
            vel = Vector.fromPolar(r2, a2);

        pos.add(new Vector(w / 2, h / 2));
        particles.push(new Particle(pos.x, pos.y, vel.x, vel.y));
    }

    canvasContext.fillStyle = '#000';
    canvasContext.fillRect(0, 0, w, h);
    canvasContext.fillStyle = 'rgba(255, 255, 255, 0.05)';

    animate();
}

function generate() {
    if (rid) {
        window.cancelAnimationFrame(rid);
        rid = 0;
        return null;
    }

    return init();
}

function render() {
    for (let p of particles) {
        p.update(noise);
        p.draw(canvasContext);
    }
}

function animate() {
    render();
    rid = window.requestAnimationFrame(animate);
}

init();

export default generate;
