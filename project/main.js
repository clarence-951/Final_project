import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";


//We can use this to load textures or sounds
//export function preload() {

let cam
let grid = []
let position = vector(0, -170, 0);
let veiw = vector(0, 150,0)
let veiwR = 0
const Look_Distance = 100
export function setup() {

    cam = createCamera()
    grid = [
        [4, 10, 10, 10, 10, 10, 4, 10, 10, 10, 10, 10, 7, 10, 4, 10, 10, 10, 10, 3],
        [9, 8, 10, 9, 8, 1, 6, 9, 13, 6, 2, 13, 8, 0, 2, 1, 8, 9, 2, 11],
        [5, 11, 13, 6, 1, 1, 3, 0, 1, 3, 5, 7, 1, 12, 1, 2, 1, 13, 6, 3],
        [1, 6, 1, 1, 1, 1, 1, 12, 6, 6, 3, 2, 1, 6, 4, 2, 1, 3, 1, 11],
        [4, 9, 1, 8, 1, 13, 1, 1, 9, 1, 1, 8, 1, 10, 12, 1, 9, 2, 1, 11],
        [5, 1, 13, 1, 8, 7, 1, 1, 8, 0, 1, 11, 13, 9, 7, 1, 1, 1, 1, 11],
        [7, 8, 6, 3, 6, 1, 5, 1, 6, 12, 9, 3, 1, 2, 2, 1, 3, 4, 6, 3],
        [9, 13, 1, 11, 1, 1, 1, 1, 7, 1, 6, 8, 5, 1, 10, 13, 6, 7, 1, 11],
        [4, 1, 8, 1, 1, 3, 1, 1, 13, 2, 1, 2, 9, 10, 13, 1, 6, 0, 2, 11],
        [9, 1, 1, 4, 12, 6, 6, 13, 5, 1, 11, 1, 6, 1, 3, 1, 1, 12, 1, 3],
        [0, 11, 13, 3, 1, 1, 1, 1, 6, 1, 3, 4, 1, 1, 2, 13, 6, 13, 13, 11],
        [12, 6, 11, 8, 1, 13, 3, 4, 1, 5, 1, 7, 1, 9, 10, 1, 13, 3, 1, 11],
        [5, 1, 1, 3, 6, 8, 1, 2, 1, 1, 9, 1, 10, 13, 1, 7, 1, 9, 10, 11],
        [9, 13, 1, 9, 1, 1, 13, 7, 8, 9, 1, 3, 1, 2, 6, 1, 2, 1, 4, 11],
        [2, 7, 1, 2, 1, 1, 10, 10, 1, 8, 3, 2, 1, 7, 9, 7, 3, 0, 1, 7],
        [9, 1, 0, 1, 3, 8, 1, 7, 1, 3, 13, 2, 1, 1, 1, 8, 1, 12, 1, 11],
        [9, 6, 12, 1, 11, 1, 10, 1, 13, 1, 9, 1, 8, 7, 1, 3, 1, 1, 6, 11],
        [9, 1, 8, 5, 12, 2, 1, 8, 13, 1, 5, 4, 2, 8, 12, 7, 6, 6, 9, 11],
        [5, 1, 8, 1, 13, 1, 1, 2, 1, 6, 1, 8, 7, 3, 2, 10, 11, 2, 11, 0],
        [2, 8, 8, 8, 8, 2, 8, 8, 13, 8, 8, 2, 8, 3, 8, 8, 8, 3, 8, 12],

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
    translate(-1563, 0, 530)

    backroom()
    pop()
    threshold()

    move(dt)
}




//no walls

function threshold() {
    push()
    translate(0, 20, -11)
    fill(80, 80, 80)
    box(500, 20, 600)
    pop()
    push()
    for (let x = 0; x < 3; x++) {

        push()
        translate(250, -150, 0)
        fill(100, 100, 100)
        box(25, 350, 500)
        pop()
        rotateY(90)

    }
    pop()
    push()
    rotateY(90)
    translate(-280, -150,)
    doorway()
    push()
    translate(28, 0, -180)
    fill(90, 90, 90)
    box(30, 350, 150)
    pop()
    push()
    translate(28, 0, 180)
    fill(90, 90, 90)
    box(30, 350, 150)
    pop()
    push()
    translate(28, 10, -180)
    rotateY(-24)
    fill(90, 90, 90)
    box(30, 310, 140)
    pop()
    push()
    translate(28, 10, 180)
    rotateY(24)
    fill(90, 90, 90)
    box(30, 310, 140)
    pop()
    pop()
    push()
    translate(0, -625)
    rotateX(180)
    push()
    translate(0, 20, -11)
    fill(80, 80, 80)
    box(500, 20, 500)
    pop()
    push()
    for (let x = 0; x < 4; x++) {

        push()
        translate(250, -150, 0)
        fill(100, 100, 100)
        box(30, 350, 500)
        pop()
        rotateY(90)

    }
    pop()
    pop()

}


//nowall
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
//4walls
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
//1 wall x
function bb8() {
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
    translate(250, -150, 0)
    texture(wall);
    backwall(20, 350, 521)

    pop()
}
//1wall
function bb9() {
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
    translate(250, -150, 0)
    texture(wall);
    backwall(20, 350, 521)

    pop()
}
//1wall
function bb10() {
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
    translate(250, -150, 0)
    texture(wall);
    backwall(20, 350, 521)

    pop()
}
//1wall
function bb11() {
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
    translate(250, -150, 0)
    texture(wall);
    backwall(20, 350, 521)

    pop()
}
//long room
function bb12() {
    push()
    translate(-269, 0)
    push()
    translate(0, 25, 0)
    texture(floor)
    box(1025, 1, 525); //Draw a box
    pop()
    push()
    translate(0, -325, 0)
    texture(tile)
    box(1025, 1, 525);
    pop()
    push()
    rotateY(270)
    translate(250, -150, 252)
    texture(wall);
    backwall(20, 350, 521)
    translate(0, 0, -516)
    backwall(20, 350, 510)
    pop()
    push()
    rotateY(-270)
    translate(250, -150, 252)
    texture(wall);
    backwall(20, 350, 521)
    translate(0, 0, -516)
    backwall(20, 350, 510)
    pop()
    push()
    translate(519, -150)
    backwall(20, 350, 521)
    pop()
    push()
    translate(250, -150, 0)
    texture(wall);

    translate(-50, 100,)
    backwall(20, 150, 500)
    translate(0, -70)
    fill(150, 75, 0)
    box(30, 20, 500)

    pop()
    pop()
}

//halfwall
function bb13() {
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
    translate(250, -150, 0)
    texture(wall);
    backwall(20, 350, 521)
    rotateY(90)
    translate(-50, 100, -150)
    backwall(20, 150, 300)
    translate(0, -70)
    fill(150, 75, 0)
    box(30, 20, 310)

    pop()
}

function backroom() {
    for (let x = 0; x < 20; x++) {

        for (let z = 0; z < 20; z++) {
            push()
            translate(x * 521, 0, z * 521)
            if (grid[x][z] == 0) {
                sphere(.0001)
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
            if (grid[x][z] == 8) {
                bb8()
            }
            if (grid[x][z] == 9) {
                bb9()
            }
            if (grid[x][z] == 10) {
                bb10()
            }
            if (grid[x][z] == 11) {
                bb11()
            }
            if (grid[x][z] == 12) {
                bb12()
            }
            if (grid[x][z] == 13) {
                bb13()
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


function backwall(x, y, z) {
    push()
    texture(wall);
    box(x, y, z)
    rotateY(-180)
    translate(-1, 0)
    box(x, y, z + .5)
    pop()
    
}

//if (move)



function move(dt) {

//a
   // if (keyIsDown(65)) {
  //      position.z += 5 * Math.cos(veiwR);
    //    position.x += 5 * Math.sin(veiwR);

    //}
//d
  //  if (keyIsDown(68)) {
   //     position.z -= 5 * Math.cos(veiwR)
   //     position.x -= 5 * Math.sin(veiwR);

  //  }
//w
    if (keyIsDown(83)) {
        position.x -= 7 * Math.cos(veiwR);
        position.z -= 7 * Math.sin(veiwR);

    }
//s
    if (keyIsDown(87)) {
        position.x += 7 * Math.cos(veiwR);
        position.z += 7 * Math.sin(veiwR);

    }

    if (keyIsDown(65)) {
        veiwR -= 1.6 * dt;

    }

    if (keyIsDown(68)) {
        veiwR += 1.6 * dt;
    }

    veiw.x = 50 * Math.cos(veiwR)
    veiw.z = 50 * Math.sin(veiwR)


    push();
    fill(255, 64, 255);
    translate(position.x, -15, position.z);
    sphere(30);
    pop();


    cam.setPosition(position.x, position.y, position.z)
    cam.lookAt(veiw.x + position.x, position.y, veiw.z + position.z);

}




