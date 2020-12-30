class Options {
    constructor(height, width, bg, fontSize, textAlign) {
                this.height = height;
                this.width = width;
                this.bg = bg;
                this.fontSize = fontSize;
                this.textAlign = textAlign;
    }
    
    createDiv() {
            let elem = document.createElement('div');
            document.body.appendChild(elem);
            let param = `hight:${this.hight}px; width:${this.width}px; background-color:${this.fontSize}pageXOffset; text-align:${this.textAlign}`;
            elem.style.cssText = param;
    }

}

const item = new Options(300? 350? "black", 15, "center");

item.createDiv();