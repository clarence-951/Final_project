import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";


//We can use this to load textures or sounds
//export function preload() {

let grid = []

export function setup() {

    camera(0,-200, 50,0,-100,1000);
    grid = [
        [4, 5, 6, 6, 2, 4, 6],
        [3, 6, 2, 4, 1, 5, 3],
        [2, 1, 1, 6, 2, 3, 1],
        [1, 6, 2, 1, 1, 2, 1],
        [4, 1, 1, 2, 2, 1, 3],
        [7, 6, 1, 5, 2, 2, 5],
        [6, 6, 2, 1, 5, 2, 7],
    ];
}

let wall;
let tile;
let floor;
let music;
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
    soundFormats("mp3")
    music = loadSound('/project/wandering.mp3')
    music.setLoop(true);
    music.playMode("untilDone")



}



export function draw(t, dt) {
    background(198, 197, 139); //Clear the background to dark grey 
    orbitControl(); //Enable mouse movement in the scene
    ambientLight(198, 197, 139);  //Add some ambient light to the scene

    directionalLight(255, 255, 255, 1, 1, -1); //Add a white directional light

    getAudioContext().resume()
    music.play();

    //drawGrid(); //Draw the grid
    drawAxes(); //Draw the axes

    push()
    translate(-1560, 0, 500)
    
    backroom()
    pop()
    threshold()
    
}




//no walls

function threshold() {
    push()
    translate(0,20,-11)
    fill(80,80,80)
    box(500,20,500)
    pop()

    
}
function bb1() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(525, 1, 525); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(525, 1, 525);
    pop()

}
//-x
function bb2() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(525, 1, 525); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(525, 1, 525);
    pop()
    push()
    rotateY(270)
    while (x < 3) {

        push()
        translate(250, -150, 0)
        texture(wall);
        backwall(20, 350, 521)
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()

}
//-z
function bb3() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(525, 1, 525); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(525, 1, 525);
    pop()
    push()
    rotateY(180)
    while (x < 3) {

        push()
        translate(250, -150, 0)
        texture(wall);
        backwall(20, 350, 521)
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()

}
//x
function bb4() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(525, 1, 525); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(525, 1, 525);
    pop()
    push()
    rotateY(90)
    while (x < 3) {

        push()
        translate(250, -150, 0)
        texture(wall);
        backwall(20, 350, 521)
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()
}
//z
function bb5() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(525, 1, 525); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(525, 1, 525);
    pop()
    push()
    while (x < 3) {

        push()
        translate(250, -150, 0)
        texture(wall);
        backwall(20, 350, 521)
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()

}
//door
function bb6() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(525, 1, 525); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(525, 1, 525);
    pop()
    push()
    while (x < 4) {

        push()
        translate(250, -150, 0)
        texture(wall);
        //box(20, 350, 250)
        doorway()
        rotateY(-180)
        translate(-1, 0)
        doorway()
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()
}

function bb7() {
    let x = 0
    push()
    translate(0, 25, 0)
    texture(floor)
    box(525, 1, 525); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(525, 1, 525);
    pop()
    push()
    while (x < 4) {

        push()
        translate(250, -150, 0)
        texture(wall);
        backwall(20, 350, 521)
        pop()
        rotateY(90)
        x = x + 1
    }
    pop()
}



function backroom() {
    for (let x = 0; x < 7; x++) {

        for (let z = 0; z < 7; z++) {
            push()
            translate(x * 521, 0, z * 521)
            if (grid[x][z] == 0) {
            }
            if (grid[x][z] == 1) {
                fill(0, 250, 0)
                bb1()
            }
            if (grid[x][z] == 2) {
                bb2()
            }
            if (grid[x][z] == 3) {
                bb3()
            }
            if (grid[x][z] == 4) {
                bb4()
            }
            if (grid[x][z] == 5) {
                bb5()
            }
            if (grid[x][z] == 6) {
                bb6()
            }
            if (grid[x][z] == 7) {
                bb7()
            }

            pop()
        }
    }
}


function doorway() {
    texture(wall)
    push()
    translate(0, 0, 190)
    box(20, 350, 141.5)
    pop()
    push()
    translate(0, 0, -190)
    box(20, 350, 141.5)
    pop()
}
function async() { }




function backwall(x, y, z) {
    push()
    texture(wall);
    box(x, y, z)
    rotateY(-180)
    translate(-1, 0)
    box(x, y, z + .5)
    pop()
}







function bbox() {
    beginShape()
    vertex(10, 0, -10)
    vertex(-10, 0, -10)
    vertex(10, 0, 10)
    endShape()
    beginShape()
    vertex(10, 0, 10)
    vertex(10, 0, -10)
    vertex(-10, 0, -10)
    endShape()
    beginShape()
    vertex(10, 10, -10)
    vertex(-10, 10, -10)
    vertex(10, 10, 10)
    endShape()
    beginShape()
    vertex(10, 10, 10)
    vertex(10, 10, -10)
    vertex(-10, 10, -10)
    endShape()
    beginShape()
    vertex(10, 10, -10)
    vertex(10, 10, 10)
    vertex(-10, 0, -10)
    endShape()
    beginShape()
    vertex(10, 10, -10)
    vertex(10, 0, -10)
    vertex()
    endShape()

}


