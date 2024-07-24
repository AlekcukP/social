import { random } from 'lodash';

class Noise {
    static FILL_STYLE = '#000';
    static OPERATION = 'lighter';

    constructor(width, height, octaves) {
        this.width = width;
        this.height = height;
        this.octaves = octaves;
        this.canvas = Noise.compositeNoise(width, height, octaves);
        this.data = this.getContextData();
    }

    static noise(width, height) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const img = context.getImageData(0, 0, width, height);
        const data = img.data;

        canvas.width = width;
        canvas.height = height;

        for (let i = 0, l = data.length; i < l; i += 4) {
            data[i + 0] = random(0, 255);
            data[i + 1] = random(0, 255);
            data[i + 2] = random(0, 255);
            data[i + 3] = 255;
        }

        context.putImageData(img, 0, 0);
        return canvas;
    }

    // create composite noise with multiple octaves
    static compositeNoise(width, height, octaves) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;

        context.fillStyle = Noise.FILL_STYLE;
        context.fillRect(0, 0, width, height);
        context.globalCompositeOperation = Noise.OPERATION;
        context.globalAlpha = 1 / octaves;

        for (let i = 0; i < octaves; i++) {
            const noise = Noise.noise(width >> i, height >> i);
            context.drawImage(noise, 0, 0, width, height);
        }

        return canvas;
    }

    getContextData() {
        return this.canvas.getContext('2d').getImageData(0, 0, this.width, this.height).data;
    }

    getContext() {
        return this.canvas.getContext('2d');
    }

    getNoise(x, y, ch) {
        const index = (~~x + ~~y * this.width) * 4 + ch;
        return this.data[index] / 126 - 1;
    }
}

export default Noise;
