import React from "react";
import Sketch from "react-p5";

const P5Sketches = () => {
    let angle = 0;

    const setup = (p5, canvasParentRef) => {
        // Creamos el canvas con WEBGL para que sea 3D
        p5.createCanvas(300, 350, p5.WEBGL).parent(canvasParentRef);
    };

    // Ajustes específicos para que brille sin mockup
    const draw = (p5) => {
        p5.background(0, 0);
        p5.noFill();

        // Línea aún más fina para ese look "retina"
        p5.strokeWeight(0.7);

        p5.rotateY(angle);

        for (let i = 0; i < 60; i++) { // Más líneas para más detalle
            p5.push();

            // Un degradado que se desvanece en los extremos
            let alpha = p5.map(i, 0, 60, 200, 20);
            p5.stroke(65, 105, 225, alpha);

            // Torsión más orgánica
            p5.rotateY(p5.sin(angle + i * 0.05) * 0.6);
            p5.translate(0, i * 3 - 90, 0);

            // Una forma que parece una estructura arquitectónica abstracta
            p5.box(100 - i * 1.5, 1.5, 100 - i * 1.5);

            p5.pop();
        }
        angle += 0.01; // Rotación casi imperceptible, muy elegante
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketches;