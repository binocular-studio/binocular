var w, h;
var nc, ra, rb, na;
var ncc, rd, rc;

var divTit;
var divMenu;
var pM1, pM2, pM3;

function setup() {
    divTit = createDiv("<h2>BINOCULAR STUDIO</h2>");
    divTit.addClass("tit");
    w = 1280;
    h = 720;
    canvas = createCanvas(w, h);
    ra = 160;
    na = 5;
    rb = 500;
    nc = 1;
    rd = 100;
    nd = 1;

    divMenu = createDiv("");
    divMenu.addClass("cont");

    pM1 = createSpan(" GALLERY ");
    pM2 = createSpan(" ABOUT ");
    pM3 = createSpan(" CONTACT ");
    pM1.addClass("elem")
    pM2.addClass("elem")
    pM3.addClass("elem")
    pM1.parent(divMenu);
    pM2.parent(divMenu);
    pM3.parent(divMenu);
}

function draw() {
    background(0, 255);
    noFill();
    stroke(255, 255);
    strokeWeight(5);

    // center arcs
    arc(640, 510, 500, 500, -PI * 7 / 8, -PI * 1 / 8);
    arc(640, 210, 500, 500, -PI * 7 / 8 + PI, -PI * 1 / 8 + PI);
    // eyes arcs
    arc(640, 610, 320, 700, -PI * 7 / 8, -PI * 1 / 8);
    arc(640, 110, 320, 700, -PI * 7 / 8 + PI, -PI * 1 / 8 + PI);
    // big circle
    ellipse(640, 360, rb, rb);

    for (var i = 0; i < na; i++) {
        if (nc == 1) {
            ellipse(640, 360, ra + 30 * i, ra + 30 * i);
        } else if (nc == 2) {
            strokeWeight(2);
            ellipse(560, 360, ra + 30 * i, ra + 30 * i);
            ellipse(720, 360, ra + 30 * i, ra + 30 * i);
        }
    }

    // vertical circles
    if (nc == 1) {
        for (var i = 0; i < nd; i++) {
            strokeWeight(1);
            ellipse(640, 410, 50 - rd + 10 * i, 50 - rd + 10 * i);
            ellipse(640, 310, 50 - rd + 10 * i, 50 - rd + 10 * i);
        }
    } else {
        for (var i = 0; i < nd / 2; i++) {
            strokeWeight(2);
            ellipse(640, 410, 100 - rd + 20 * i, 100 - rd + 20 * i);
            ellipse(640, 310, 100 - rd + 20 * i, 100 - rd + 20 * i);
        }
    }

}


function mouseDragged() {
    console.log("[new.ps]: ");
    ra = floor(random(1, 6) * 60);
    rb = floor(random(5, 10) * 70);
    nc = floor(random(1, 3));
    na = floor(random(1, 5));
    rd = floor(random(0, 4) * 10);
    nd = floor(random(0, 6));
    console.log(ra, ",", rb, ",", nc, ",", na, ",", rd, ",", nd);
}