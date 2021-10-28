
var S1 
var S2

function setup() {
  createCanvas(400,400);
 S1 = new Student("Student1",10,7)
 S2 = new Student("Student2",11,7)
}

function draw() 
{
  background(30);
  S1.show()
  S2.show()
}

