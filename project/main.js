import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";


//We can use this to load textures or sounds
//export function preload() {

let cam
let grid = []
let position = vector(0, -170, 0);
let veiw = vector(0, 150, 0)
let veiwR = 190.1
const Look_Distance = 100
export function setup() {

    function r() {
        return Math.floor(random(1, 14));
    }

    cam = createCamera()
    grid = [
        [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 3,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [1, 6, 1, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 7,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [6, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [7, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [7, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 7,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [7, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 11,],
        [9, r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), 1,],
        [7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 9, 9, 9, 9, 9, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 12,],

    ];
}

let wall;
let tile;
let floor;
let music;
let theme;
export function preload() {
    wall = loadImage("backroomwall.png");
    floor = loadImage("floor.png");
    tile = loadImage("panel.jpg");
    soundFormats("mp3")
    music = loadSound('wandering.mp3')
    music.setLoop(true);
    music.playMode("untilDone")
    theme = loadSound('memory.mp3')
    theme.setLoop(true)
    theme.playMode("untilDone")

}



export function draw(t, dt) {
    background(198, 197, 139); //Clear the background to dark grey 
    orbitControl(); //Enable mouse movement in the scene
    ambientLight(198, 197, 139);  //Add some ambient light to the scene

    directionalLight(198, 197, 139, 1, 1, -1); //Add a white directional light
if (t >= 27) {
  getAudioContext().resume()
    theme.play();
}
    getAudioContext().resume()
    music.play();
    strokeWeight(0)
    //drawGrid(); //Draw the grid
    // drawAxes(); //Draw the axes

    push()
    translate(-1563, 0, 530)

    backroom()
    pop()
    threshold()

    move(dt)

    checkPosition(t, position);

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
//lights out

function backroom() {
    for (let x = 0; x < 40; x++) {

        for (let z = 0; z < 40; z++) {
            push()
            let roomX = x * 521;
            let roomZ = z * 521;
            translate(roomX, 0, roomZ)

            let dx = Math.abs(roomX - position.x);
            let dz = Math.abs(roomZ - position.z);
           // console.log(dx,dz);
            if (dx < 8000 && dz < 8000) {


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
                if (grid[x][z] == 14) {
                    bb14()
                }
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

    let gridX = position.x / 525;
    let gridZ = position.z / 525



    //console(gridX, gridZ);
}




