//Indhu Kanth @2023

let gridTopX;
let gridTopY;
let canvas1;
let canvas2;
let wSlider;
let hSlider;
let sSlider;
let rSlider;
let nSlider;
let mSlider;
let sid1000h=10;
let a=3;
let b=2;
let c=0.1;
let d=0.8;
let saveButton; // Declare the save button
let randomizeButton;
let button1;
let saveIT = false;

const hexagons = [];


        function preload() {
               font = loadFont('PoliteType-Regular.ttf')
          

      }

function setup() {
  
  
      
canvas1=createCanvas(800, 800, SVG);
canvas1.position(300,0);
  
  
  gridTopX = width / 2;
  gridTopY = height / 2;
  noStroke();
  
  
      
let g1 = createP('P O C K E T S');
g1.style('font-size', '32px');
g1.style('fon', font);
g1.position(38, 52);
g1.style('color', '#202020');
  
  
let img = createImg("BeeBec.png");
img.position(28, 28);
img.size(118, 66);

  
  let a = createP('Becoming:');
a.style('font-size', '16px');
a.position(40, 140);
a.style('color', '#000000');
input = createInput();
input.position(40, 184);
input.style('font-size', '20px');
input.size(200,30)
  
  
let b = createP('Spread:');
b.style('font-size', '16px');
b.position(40, 232);
b.style('color', '#000000');
wSlider = createSlider(1, 6, 1, 0.1);
wSlider.position(40,272)
wSlider.style("width","180px")
wSlider.addClass("mySliders"); 
  
  
  let c = createP('Stack:');
c.style('font-size', '16px');
c.position(40, 302);
c.style('color', '#000000');
hSlider = createSlider(1, 6, 1,0.1);
hSlider.position(40,342)
hSlider.style("width","180px")
hSlider.addClass("mySliders"); 
  
  
  
    let d = createP('Scale:');
d.style('font-size', '16px');
d.position(40, 372);
d.style('color', '#000000');
sSlider = createSlider(10, 50, 10, 1);
sSlider.position(40,412)
sSlider.style("width","180px")
sSlider.addClass("mySliders"); 

  
let e = createP('Spin:');
e.style('font-size', '16px');
e.position(40, 442);
e.style('color', '#000000');
rSlider = createSlider(3, 30, 3, 2);
rSlider.position(40,482)
rSlider.style("width","180px")
rSlider.addClass("mySliders"); 
  
    
  
randomizeButton = createButton("M O D I F Y");
randomizeButton.class('custom-button'); // Add a custom class
randomizeButton.position(40, 550);
randomizeButton.size(140, 26);
randomizeButton.elt.style.lineHeight = '4px'; // Align text vertically
randomizeButton.elt.addEventListener('click', randomizeHexagons);


// Save button 
button = createButton("D O W N L O A D ");
button.class('custom-button.save'); // Add a custom class
button.position(40, 678);
button.size(200, 26);
button.elt.style.lineHeight = '4px'; // Align text vertically
button.elt.addEventListener('click', savePressed);
  
 
// button1 = createButton("?");
// button1.style('font-size', '14px', 'color', '0,255,255');
// button1.position(122, 2);
// button1.size(3,3)
// button.elt.addEventListener('click', myFunction);  
  
  
  
 let o = createP('Click to regenerate');  
o.style('font-size', '14px');
o.position(50, 510); 
o.style('color', '#000000'); 
  
let x = createP('A Generative Graphics of <a href="http://www.become.team">BECOME</a>');  
x.style('font-size', '14px');
x.position(40, 710); 
x.style('color', '#000000');

  hexagons.push(new Hexagon(0, 0));

  while (hexagons.length < 50) {
    addRandomHexagon();
  }

  // Sort so the hexagons are drawn in the right order
  hexagons.sort((a, b) => {
    return a.getSortString().localeCompare(b.getSortString());
      });

}


function draw() {
  background(255);
  

  for (const hexagon of hexagons) {
    hexagon.draw();
  }
 
  
  if (saveIT) {
 save("mySVG.svg")
    print('SVG saved');
  
  noLoop(); // Stop the draw loop after exporting once
 
  }
  //reset();
}



// //Example: Save SVG when mouse is pressed
// function mousePressed() {
//   saveIT = true;
// }


function randomizeHexagons() {
  hexagons.length = 0; // Clear the array
  hexagons.push(new Hexagon(0, 0));

  while (hexagons.length < 50) {
    addRandomHexagon();
  }

  hexagons.sort((a, b) => {
    return a.getSortString().localeCompare(b.getSortString());
  });

  redraw(); // Redraw the canvas
}


function savePressed() {
  
   var name = input.value();

save("my" + name+wSlider.value()+hSlider.value()+ ".svg");
  print('SVG saved');
  noLoop(); // Stop the draw loop after exporting once
}

// function reset() {
//   saveIT = false;
// }



function addRandomHexagon() {
  let hexagonAdded = false;

  while (!hexagonAdded) {
    const randomHexagon = random(hexagons);

    let newHexagonC = randomHexagon.c;
    let newHexagonR = randomHexagon.r;
    
     var name = input.value();
   let steps1 = name.length;

    const r = random(1);
    if (r < c) {
      newHexagonC++;
    } else if (r > d) {
      newHexagonR++;
    }

    const spotTaken = hexagons.some((hexagon) => {
      return hexagon.c == newHexagonC &&
        hexagon.r == newHexagonR;
    });

    if (!spotTaken) {
      hexagons.push(new Hexagon(newHexagonC, newHexagonR));
      hexagonAdded = true;
    }
  }
}

class Hexagon {
  constructor(c, r) {
    this.c = c;
    this.r = r;
    this.red = random(0, 10);
    this.green = random(0, 10);
    this.blue = random(0, 10);
  }

  draw() {
    
    
   var name = input.value();
   let steps1 = name.length;
  let lan=steps1*wSlider.value()/2;
  let gan=steps1/hSlider.value()/2;
    
    let ang=rSlider.value();

    sid1000h=sSlider.value();

    const x = gridTopX + (this.c - this.r) * sid1000h *
      sqrt(lan) / 2;
    const y = gridTopY + (this.c + this.r) * sid1000h / gan;

    const points = [];
    for (let angle = PI / ang; angle < PI * 2; angle += PI / 3) {
      points.push(
        createVector(x + cos(angle) * sid1000h,
          y + sin(angle) * sid1000h)
      );
    }

    fill(this.red * 0.75, this.green * 0.75, this.blue * 0.75);
    beginShape();
    for (let i = 0; i < 6; i++) {
      vertex(points[i].x, points[i].y);
    }
    endShape(CLOSE);

    fill(this.red * 0.9, this.green * 0.9, this.blue * 0.9);
    beginShape();
    vertex(points[0].x, points[0].y);
    vertex(points[1].x, points[1].y);
    vertex(points[2].x, points[2].y);
    endShape(CLOSE);

    fill(this.red, this.green, this.blue);
    beginShape();
    vertex(points[2].x, points[2].y);
    vertex(points[3].x, points[3].y);
    vertex(points[4].x, points[4].y);
    vertex(points[5].x, points[5].y);
    endShape(CLOSE);
  }

  getSortString() {
    return this.r + '.' + this.c;
  }
}



function myFunction() {
            alert("Hello Peeps!\n\nBECOGRAPHY is a generative graphics experience built for the typography treatment for Become. We believe every word has the right to be a verb, creating a ripple in time that shapes our communication and continue to create futures. Play with the controls to dance with the world of words. \n\nv1.1\nIndhu Kanth\n2023.Become™\n\n");
        }


