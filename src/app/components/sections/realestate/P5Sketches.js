import React from "react";
import Sketch from "react-p5";

const P5Sketches = () => {
    let t = 0;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth * 0.9, 300).parent(canvasParentRef);
        p5.smooth();
    };

    const draw = (p5) => {
        p5.background(0);

        // 1. Grid Minimal de Ingeniería
        p5.stroke(255, 12);
        p5.strokeWeight(0.5);
        for (let x = 0; x < p5.width; x += 60) p5.line(x, 0, x, p5.height);
        for (let y = 0; y < p5.height; y += 60) p5.line(0, y, p5.width, y);

        p5.translate(0, p5.height / 2);

        // 2. ONDAS PURAS SENOIDALES
        drawPureWave(p5, t * 0.01, 0.005, 40, "page_view", p5.width * 0.35, 80);
        drawPureWave(p5, t * 0.02, 0.01, 60, "scroll_depth", p5.width * 0.50, 150);
        drawPureWave(p5, t * 0.03, 0.015, 80, "click_whatsapp", p5.width * 0.65, 255);

        t += 1;
    };

    const drawPureWave = (p5, time, freq, amp, label, labelXOffset, opacity) => {
        p5.noFill();
        p5.strokeWeight(1);

        let labelY = 0;

        // Dibujamos punto por punto para aplicar el degradado en los extremos
        for (let x = 0; x < p5.width; x += 2) {
            let y = p5.sin(x * freq + time) * amp;
            
            // CÁLCULO DEL DEGRADADO:
            // La opacidad cae a 0 cuando x se acerca a 0 o al ancho total (p5.width)
            let edgeFade = p5.sin(p5.map(x, 0, p5.width, 0, p5.PI)); 
            p5.stroke(255, opacity * edgeFade);
            
            p5.point(x, y);

            if (p5.abs(x - labelXOffset) < 1.5) {
                labelY = y;
            }
        }

        // 3. ETIQUETAS TÉCNICAS
        p5.push();
        p5.translate(labelXOffset, labelY);
        
        p5.fill(255, opacity);
        p5.noStroke();
        p5.circle(0, 0, 3);

        p5.textSize(8);
        p5.textAlign(p5.LEFT);
        p5.textStyle(p5.BOLD);
        p5.text(label.toUpperCase(), 8, -8); 
        
        p5.pop();
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketches;