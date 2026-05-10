import React from "react";
import Sketch from "react-p5";

const P5Sketches = () => {
    let t = 0;

    const setup = (p5, canvasParentRef) => {
        // Un canvas más estilizado y esbelto
        p5.createCanvas(window.innerWidth * 0.9, 300).parent(canvasParentRef);
        p5.smooth();
        p5.noiseDetail(2, 0.2); // Ruido más suave para armonía máxima
    };

    const draw = (p5) => {
        p5.background(0); // Onyx profundo

        // 1. Grid Minimal de Ingeniería (Base)
        p5.stroke(255, 10);
        p5.strokeWeight(0.3);
        for (let x = 0; x < p5.width; x += 50) p5.line(x, 0, x, p5.height);
        for (let y = 0; y < p5.height; y += 50) p5.line(0, y, p5.width, y);

        p5.translate(0, p5.height / 2);

        // 2. SISTEMA DE INTERFERENCIA ARMÓNICA (Las 3 Ondas)
        p5.noFill();
        p5.stroke(255, 180); // Blanco puro pero suave
        p5.strokeWeight(1.2);

        p5.beginShape();
        for (let x = 0; x < p5.width; x += 2) {
            // -- ONDA 1: Page View (Frecuencia Base Baja, Amplitud Suave) --
            // Representa la entrada constante de tráfico.
            let wave1 = p5.sin(x * 0.005 + t * 0.01) * 30;

            // -- ONDA 2: Scroll Depth (Frecuencia Media, Amplitud Variable) --
            // Representa la profundidad de la navegación.
            let wave2 = p5.sin(x * 0.01 + t * 0.02) * 50 * p5.noise(t * 0.005);

            // -- ONDA 3: WhatsApp Click (Picos de Alta Frecuencia y Amplitud) --
            // Solo ocurre en picos, representando la conversión.
            let n = p5.noise(x * 0.05, t * 0.01);
            let wave3 = n > 0.6 ? (n - 0.6) * -200 * p5.noise(t * 0.05) : 0;

            // INTERFERENCIA: Sumamos las 3 ondas para crear la onda final compleja
            let y = wave1 + wave2 + wave3;

            p5.vertex(x, y);

            // --- 3. DATOS DE CONVERSIÓN INTEGRADOS (Labels Técnicos) ---
            // Solo dibujamos los labels técnicos en los picos de WhatsApp
            if (wave3 < -100 && x % 100 === 0 && p5.frameCount % 2 === 0) {
                p5.push();
                p5.translate(x, y);
                p5.fill(255, 220);
                p5.noStroke();
                p5.textSize(7);
                p5.textAlign(p5.CENTER);
                p5.text(`POS_ID: ${x}`, 0, 15);
                p5.text(`LEAD: +${Math.abs(wave3).toFixed(0)}`, 0, 25);
                p5.pop();
            }
        }
        p5.endShape();

        t += 1;
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketches;