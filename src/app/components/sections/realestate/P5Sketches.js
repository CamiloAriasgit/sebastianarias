import React from "react";
import Sketch from "react-p5";

const P5Sketches = () => {
    let t = 0;

    const setup = (p5, canvasParentRef) => {
        // Canvas esbelto y Retina-ready
        p5.createCanvas(p5.windowWidth * 0.9, 300).parent(canvasParentRef);
        p5.smooth();
    };

    const draw = (p5) => {
        p5.background(0); // Onyx profundo

        // 1. Grid Minimal de Ingeniería (Base)
        p5.stroke(255, 12);
        p5.strokeWeight(0.5);
        for (let x = 0; x < p5.width; x += 60) p5.line(x, 0, x, p5.height);
        for (let y = 0; y < p5.height; y += 60) p5.line(0, y, p5.width, y);

        p5.translate(0, p5.height / 2);

        // 2. SISTEMA DE ONDAS PURAS (Sin ruido/vibración)
        // Dibujamos las 3 líneas independientes y suaves.
        
        // --- ONDA 1: Page View (Lenta, anclada a la izquierda) ---
        drawPureWave(p5, t * 0.01, 0.005, 40, "page_view", p5.width * 0.2, 80);

        // --- ONDA 2: Scroll Depth (Media, anclada al centro) ---
        drawPureWave(p5, t * 0.02, 0.01, 60, "scroll_depth", p5.width * 0.5, 150);

        // --- ONDA 3: WhatsApp Click (Rápida, anclada a la derecha) ---
        drawPureWave(p5, t * 0.03, 0.015, 80, "click_whatsapp", p5.width * 0.8, 255);

        t += 1; // Velocidad de la animación
    };

    // Función para dibujar una onda puramente matemática y su etiqueta
    const drawPureWave = (p5, time, freq, amp, label, labelXOffset, opacity) => {
        p5.noFill();
        p5.stroke(255, opacity);
        p5.strokeWeight(1);

        let labelY = 0;

        p5.beginShape();
        for (let x = 0; x < p5.width; x += 2) {
            // MATEMÁTICA PURA: Solo Seno, sin ruido. Esto elimina la vibración.
            let y = p5.sin(x * freq + time) * amp;
            p5.vertex(x, y);

            // Guardamos la altura de la onda en el punto de anclaje de la etiqueta
            if (p5.abs(x - labelXOffset) < 1) {
                labelY = y;
            }
        }
        p5.endShape();

        // 3. ETIQUETAS DE DATOS SEPARADAS (Phase C)
        p5.push();
        p5.translate(labelXOffset, labelY);
        
        // Punto de anclaje (Micro-data point)
        p5.fill(255, opacity);
        p5.noStroke();
        p5.circle(0, 0, 3);

        // Texto técnico separado
        p5.textSize(8);
        p5.textAlign(p5.LEFT);
        p5.textStyle(p5.BOLD);
        p5.text(label.toUpperCase(), 10, -10); // Un poco a la derecha y arriba del punto
        
        p5.pop();
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketches;