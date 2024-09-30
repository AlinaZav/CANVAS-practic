const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const c = canvas.getContext('2d');


class Circle {
    constructor(x, y, radius, dx, dy, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false);
        c.strokeStyle = 'black';
        c.fillStyle = this.color;
        c.fill();
        c.stroke();

        this.update();
    }
    update(){
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0 ){

            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0 ){
    
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const colorArray = [
    '#ED89B8',
    '#0C2F9E',
    '#68E086',
    '#41D98F',
    '#C826EF'
];
const circlesArray = [];

for (let i = 0; i < 1000; i++){
    let radius = 10;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3; 
    let dy = (Math.random() - 0.5) * 3;
    
    const colorIn = random(0, colorArray.length - 1);
    circlesArray.push( new Circle(x, y, radius, dx, dy, colorArray[colorIn]))
}

  function animate (){
    requestAnimationFrame(animate);

    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < circlesArray.length; i++){
    circlesArray[i].draw();
  }

  }

  animate();
