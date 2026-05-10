import React from "react";
import Sketch from "react-p5";

const P5Sketches = () => {
    let t = 0;

    const setup = (p5, canvasParentRef) => {
        // Ajuste dinámico al ancho del contenedor
        p5.createCanvas(p5.windowWidth * 0.9, 350).parent(canvasParentRef);
        p5.smooth();
    };

    const draw = (p5) => {
        p5.background(0);

        // 1. Grid de fondo (Sutil y técnico)
        p5.stroke(255, 15);
        p5.strokeWeight(0.5);
        for (let x = 0; x < p5.width; x += 50) p5.line(x, 0, x, p5.height);
        for (let y = 0; y < p5.height; y += 50) p5.line(0, y, p5.width, y);

        p5.translate(0, p5.height / 2);

        // --- ONDA 1: PAGE_VIEW (La más lenta y constante) ---
        drawVisualWave(p5, t * 0.01, 0.005, 30, "page_view", 100, 0.4);

        // --- ONDA 2: SCROLL (Ritmo medio) ---
        drawVisualWave(p5, t * 0.02, 0.01, 50, "scroll_depth", 250, 0.6);

        // --- ONDA 3: CLICK_WHATSAPP (La más enérgica/Phase C) ---
        drawVisualWave(p5, t * 0.03, 0.02, 70, "click_whatsapp", 400, 1.0);

        t += 1;
    };

    // Función para dibujar cada onda con su etiqueta
    const drawVisualWave = (p5, time, freq, amp, label, labelX, weight) => {
        p5.noFill();
        p5.stroke(255, 255 * (weight * 0.7)); // Diferente intensidad de blanco
        p5.strokeWeight(weight);

        p5.beginShape();
        let labelY = 0;

        for (let x = 0; x < p5.width; x += 5) {
            // Combinación de Seno y Ruido para fluidez orgánica
            let y = p5.sin(x * freq + time) * (amp * p5.noise(time * 0.5));
            p5.vertex(x, y);

            // Guardamos la altura de la onda en el punto donde queremos la etiqueta
            if (p5.floor(x) === labelX) {
                labelY = y;
            }
        }
        p5.endShape();

        // Dibujar la etiqueta y el punto de anclaje
        p5.push();
        p5.translate(labelX, labelY);
        
        // Punto de datos
        p5.fill(255);
        p5.noStroke();
        p5.circle(0, 0, 3);

        // Línea conectora vertical sutil
        p5.stroke(255, 50);
        p5.line(0, 0, 10, -15);

        // Texto de la etiqueta
        p5.fill(255, 200);
        p5.noStroke();
        p5.textSize(9);
        p5.textAlign(p5.LEFT);
        p5.text(label.toUpperCase(), 15, -15);
        
        p5.pop();
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketches;