var pos;
var divisionsHeight=300;
var particles=[];
var plinkos=[];
var divisions=[];



function setup() {
  createCanvas(700,600);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground (200,600,1700,10);

  for( var j = 40; j<= width; j=j+50){
    plinkos.push(new plinkos(j,75))
  }

  for( var j = 15; j<= width-10; j=j+50){
    plinkos.push(new plinkos(j,125))
  }

  for( var j = 40; j<= width-10; j=j+50){
    plinkos.push(new plinkos(j,175))
  }

  for( var j = 15; j<= width-10; j=j+50){
    plinkos.push(new plinkos(j,225))
  }

  for( var j = 40; j<= width-10; j=j+50){
    plinkos.push(new plinkos(j,275))
  }

  for( var j = 15; j<= width-10; j=j+50){
    plinkos.push(new plinkos(j,325))
  }

  for( var j = 40; j<= width-10; j=j+50){
    plinkos.push(new plinkos(j,375))
  }

  for( var j = 40; j<= width-10; j=j+50){
    plinkos.push(new plinkos(j,425))
  }

  for( var k = 0; k<= width; k=k+80){
    rows.push(new Rows(k,525,10,150));
  }
 
}

function draw() {
  background("black");
  Engine.update(engine,25);

  if (frameCount % 90 === 0){
    particles.push(new Particles.random(120,500),0,7);
  }

  for (var k = 0; k<rows.length;i++){
    particles[1].display();
  }

  for(var k = 0; k<rows.length;k++){
    rows[k].display();
  }
ground.display
  drawSprites();
}