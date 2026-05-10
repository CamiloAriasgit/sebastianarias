import React from "react";
import Sketch from "react-p5";

const P5Sketches = () => {
    let t = 0;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 400).parent(canvasParentRef);
        p5.smooth();
    };

    const draw = (p5) => {
        p5.background(0); 

        // 1. Cuadrícula técnica (Blueprint feel)
        p5.stroke(255, 20); 
        p5.strokeWeight(0.5);
        for (let x = 0; x < p5.width; x += 30) {
            p5.line(x, 0, x, p5.height);
        }
        for (let y = 0; y < p5.height; y += 30) {
            p5.line(0, y, p5.width, y);
        }

        p5.translate(p5.width / 2, p5.height / 2);
        
        // 2. El Plano Arquitectónico
        p5.stroke(255, 220); 
        p5.noFill();
        p5.strokeWeight(1.2);
        p5.rectMode(p5.CENTER);

        // Corregido: Variable sin espacio
        let nExteriores = p5.noise(t * 0.01) * 15;
        
        // Dibujamos la estructura principal
        p5.rect(0, 0, 260 + nExteriores, 160 + nExteriores, 2);

        // Muros internos estáticos pero con estilo técnico
        p5.strokeWeight(0.8);
        p5.line(-130, 0, 0, 0);       // Muro horizontal medio
        p5.line(40, -80, 40, 80);    // Muro vertical divisorio
        p5.line(-40, -80, -40, -20); // Muro pequeño superior

        // 3. Escaneo de Datos (Línea que recorre el plano)
        let scannerY = p5.sin(t * 0.02) * 80;
        p5.stroke(255, 100);
        p5.strokeWeight(0.5);
        p5.line(-130, scannerY, 130, scannerY);

        // 4. Micro-coordenadas (Datos flotantes)
        p5.fill(255, 150);
        p5.noStroke();
        p5.textSize(8);
        for (let i = 0; i < 3; i++) {
            let nx = p5.noise(i, t * 0.005) * 200 - 100;
            let ny = p5.noise(i + 5, t * 0.005) * 160 - 80;
            p5.text(`POS_ID: ${Math.abs(nx).toFixed(0)}`, nx, ny);
            p5.rect(nx - 5, ny - 3, 2, 2); // Un pequeño "pixel" de sensor
        }

        t += 1;
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketches;