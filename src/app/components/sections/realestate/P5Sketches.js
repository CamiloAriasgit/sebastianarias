import React from "react";
import Sketch from "react-p5";

const P5Sketches = () => {
    let t = 0;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth * 0.9, 350).parent(canvasParentRef);
        p5.smooth();
    };

    const draw = (p5) => {
        p5.background(0);

        // 1. Grid Minimal (Fase A: Ingeniería)
        p5.stroke(255, 12);
        p5.strokeWeight(0.5);
        for (let x = 0; x < p5.width; x += 60) p5.line(x, 0, x, p5.height);
        for (let y = 0; y < p5.height; y += 60) p5.line(0, y, p5.width, y);

        p5.translate(0, p5.height / 2);

        // 2. Dibujamos las 3 ondas con sus etiquetas centradas
        // Parametros: p5, tiempo, frecuencia, amplitud, etiqueta, opacidad
        drawHarmonicWave(p5, t * 0.01, 0.006, 40, "page_view", 80);
        drawHarmonicWave(p5, t * 0.02, 0.012, 60, "scroll_depth", 150);
        drawHarmonicWave(p5, t * 0.03, 0.018, 90, "click_whatsapp", 255);

        t += 0.8;
    };

    const drawHarmonicWave = (p5, time, freq, amp, label, opacity) => {
        p5.noFill();
        p5.stroke(255, opacity);
        p5.strokeWeight(1);

        const centerX = p5.width / 2;
        let centerY = 0;

        p5.beginShape();
        for (let x = 0; x < p5.width; x += 3) {
            // Movimiento armonioso: Seno + Ruido de Perlin
            let noiseVal = p5.noise(x * 0.005, time);
            let y = p5.sin(x * freq + time) * (amp * noiseVal);
            
            p5.vertex(x, y);

            // Capturamos la posición exacta en el centro
            if (x >= centerX && x < centerX + 4) {
                centerY = y;
            }
        }
        p5.endShape();

        // 3. ETIQUETAS CENTRADAS (Fase C: Conversión)
        p5.push();
        p5.translate(centerX, centerY);
        
        // Punto de anclaje (Micro-data point)
        p5.fill(255, opacity);
        p5.noStroke();
        p5.circle(0, 0, 4);

        // Texto técnico pegado al centro
        p5.textSize(8);
        p5.textAlign(p5.CENTER);
        p5.textStyle(p5.BOLD);
        // Dibujamos el texto un poco arriba del punto para que no se pisen
        p5.text(label.toUpperCase(), 0, -12); 
        
        p5.pop();
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketches;