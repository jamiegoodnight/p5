import React, {useState} from "react";
import Sketch from "react-p5";
 
export default (props) => {

 
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);  
        p5.background(255);
    };

    let count = 0
    const draw = (p5) => {
        if (count < 10){
            // p5.background(0) 

            const drawSquare = (origin, size, randomness) => {
                // randomness = [0,10]
                let originX = origin[0]
                let originY = origin[1]
                let outerX = originX + size
                let outerY = originY + size
                let randomRange = ((size/2)/10)*randomness
    
                let x1 = p5.random(originX, (originX + randomRange));
                let y1 = p5.random(originY, originY + randomRange);
                
                let x2 = p5.random(outerX - randomRange, outerX)
                let y2 = p5.random(originY, originY + randomRange);
    
                let x3 = p5.random(outerX - randomRange, outerX)
                let y3 = p5.random((outerY - randomRange), outerY)
    
                let x4 = p5.random(originX, originX + randomRange);
                let y4 = p5.random((outerY - randomRange), outerY)
    
                p5.stroke(0)
                p5.line(x1, y1, x2, y2)
                p5.line(x2, y2, x3, y3)
                p5.line(x3, y3, x4, y4)
                p5.line(x4, y4, x1, y1)
            }
    
    
            let gridSize = 10
    
            let origin = [0,0]
            let canvasWidth = 500
            let rowIt = 1
            let columnIt = 1
            let size = canvasWidth/gridSize
            for (let i = 0; i < gridSize*gridSize; i++){
                drawSquare(origin, size, rowIt-1)
                if (columnIt !== gridSize){
                    columnIt ++
                    origin[0] += size
                } else {
                    columnIt = 1
                    origin[0] = 0
                    origin[1] += size
                    rowIt += 1
                }
            }
            

        }
        count ++
        
    };
 
    return <Sketch setup={setup} draw={draw} />;
};

