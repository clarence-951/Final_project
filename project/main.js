import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";

//We can use this to load textures or sounds
export function preload() {

}

//Called once when program loads
export function setup() {
    camera(300, -200, 700);
}

//Called every frame
export function draw(t, dt) {
    background(30, 30, 30); //Clear the background to dark grey 
    orbitControl(); //Enable mouse movement in the scene
    ambientLight(80, 80, 80);  //Add some ambient light to the scene

    directionalLight(255, 255, 255, 1, 1, -1); //Add a white directional light

    //drawGrid(); //Draw the grid
    drawAxes(); //Draw the axes




    gen(21)

}





//terrain gen test

function bb1() {
    let x = 0
    push()
    translate(0, 25, 0)
    fill("grey")
    box(500, 1, 500); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    fill("grey")
    box(500, -1, 500); //Draw a box
    pop()
    push()
    while (x < 4) {

        push()
        translate(250, -150, 0)
        fill("yellow")
        box(20, 350, 500)
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()
}

function gen(num) {
    push()
    for (let x = 0; x < num; x++) {
        for (let y = x; y < num; y++) {
            bb1()
            translate(500, 0, 0)
            bb1()
        }

       translate(0,0,500)




    }
}
