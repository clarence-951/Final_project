import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";

//We can use this to load textures or sounds
//export function preload() {

let grid = []

export function setup(){
  camera(300, -200, 700);
    grid =[
    [2, 2, 2, 2, 2],
    [2, 1, 1, 1, 2],
    [2, 1, 3, 1, 1],
    [2, 1, 1, 3, 2],
    [2, 2, 2, 2, 2],
];
}

let wall;
let tile;
let floor;

export function preload() {
    let w = new URL(import.meta.url).pathname;
    w = w.substring(0, w.lastIndexOf("/") + 1);
    wall = loadImage(w + "backroomwall.png");
    let f = new URL(import.meta.url).pathname;
    f = f.substring(0, f.lastIndexOf("/") + 1);
    floor = loadImage(f + "floor.png");
    let t = new URL(import.meta.url).pathname;
    t = t.substring(0, t.lastIndexOf("/") + 1);
    tile = loadImage(t + "panel.jpg");
}




export function draw(t, dt) {
    background(30, 30, 30); //Clear the background to dark grey 
    orbitControl(); //Enable mouse movement in the scene
    ambientLight(80, 80, 80);  //Add some ambient light to the scene

    directionalLight(255, 255, 255, 1, 1, -1); //Add a white directional light

    //drawGrid(); //Draw the grid
    drawAxes(); //Draw the axes

    push()
    translate(-500, 0, -500)
    backroom()
    pop()

}





//terrain gen test

function bb1() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(510, 1, 510); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(510, -1, 510);
    pop()
    push()
    while (x < 4) {

        push()
        translate(250, -150, 0)
        texture(wall);
        //box(20, 350, 250)
        doorway()
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()
}

function bb2() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(510, 1, 510); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(510, -1, 510);
    pop()
    push()
    while (x < 4) {

        push()
        translate(250, -150, 0)
        texture(wall);
        box(20, 350, 490)
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()
}

function bb3() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(510, 1, 510); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(510, -1, 510);
    pop()

}

function backroom() {
    for (let x = 0; x < 5; x++) {

        for (let z = 0; z < 5; z++) {
            push()
            translate(x * 505, 0, z * 505)
            if (grid[x][z] == 0
            ) { sphere(.1) }
            if (grid[x][z] == 1) {
                bb1()
            }
            if (grid[x][z] == 2) {
                bb2()
            }
            if (grid[x][z] == 3) {
                fill(0, 250, 0)
                bb3()
            }
            pop()
        }
    }
}

function doorway() {
    texture(wall)
    push()
    translate(0, 0, 190)
    box(20, 350, 130)
    pop()
    push()
    translate(0, 0, -190)
    box(20, 350, 130)
    pop()
}
function async() { }