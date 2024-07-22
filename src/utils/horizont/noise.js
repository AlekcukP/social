import { random } from 'lodash';

class Noise {
    constructor(w, h, oct) {
        this.width = w;
        this.height = h;
        this.octaves = oct;
        this.canvas = Noise.compositeNoise(w, h, oct);
        let ctx = this.canvas.getContext('2d');
        this.data = ctx.getImageData(0, 0, w, h).data;
    }

    static noise(w, h) {
        let cv = document.createElement('canvas'),
            ctx = cv.getContext('2d');

        cv.width = w;
        cv.height = h;

        let img = ctx.getImageData(0, 0, w, h),
            data = img.data;

        for (let i = 0, l = data.length; i < l; i += 4) {
            data[i + 0] = random(0, 255);
            data[i + 1] = random(0, 255);
            data[i + 2] = random(0, 255);
            data[i + 3] = 255;
        }

        ctx.putImageData(img, 0, 0);
        return cv;
    }

    // create composite noise with multiple octaves
    static compositeNoise(w, h, oct) {
        let cv = document.createElement('canvas'),
            ctx = cv.getContext('2d');

        cv.width = w;
        cv.height = h;

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = 1 / oct;

        for (let i = 0; i < oct; i++) {
            let noise = Noise.noise(w >> i, h >> i);
            ctx.drawImage(noise, 0, 0, w, h);
        }

        return cv;
    }

    getNoise(x, y, ch) {
        let i = (~~x + ~~y * this.width) * 4;
        return this.data[i + ch] / 127 - 1;
    }
}

export default Noise;
