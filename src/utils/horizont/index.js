import Noise from './noise';
import Particle from './particle';
import Vector from './vector';
import { random } from 'lodash';

const canvasEl = document.getElementById('horizont');
const canvasContext = canvasEl.getContext('2d');
const width = (canvasEl.width = innerWidth * devicePixelRatio);
const height = (canvasEl.height = innerHeight * devicePixelRatio);

let particles = [];
let noise;
let frameId;

const createNoise = () => (noise = new Noise(width, height, 8));

const generateParticles = () => {
    for (let i = 0; i < 10000; i++) {
        const r1 = width / 4;
        const r2 = random(0, 1, true);
        const a1 = random(0, 2 * Math.PI, true);
        const a2 = random(0, 2 * Math.PI, true);

        const pos = Vector.fromPolar(r1, a1);
        const vel = Vector.fromPolar(r2, a2);

        pos.add(new Vector(width / 2, height / 2));
        particles.push(new Particle(pos.x, pos.y, vel.x, vel.y));
    }
};

const fillCanvas = () => {
    canvasContext.fillStyle = Noise.FILL_STYLE;
    canvasContext.fillRect(0, 0, width, height);
    canvasContext.fillStyle = 'rgba(255, 255, 255, 0.05)';
};

const stopHoriont = () => {
    window.cancelAnimationFrame(frameId);
    frameId = 0;
};

const createHorizont = () => {
    particles.forEach((particle) => {
        particle.update(noise);
        particle.draw(canvasContext);
    });

    frameId = window.requestAnimationFrame(createHorizont);
};

const renderHorizont = () => {
    if (frameId) return stopHoriont();

    createNoise();
    generateParticles();
    fillCanvas();
    createHorizont();
};

export default renderHorizont;
