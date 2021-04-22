class Log extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("ss.png");
  }

  display()
  {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(2);
    stroke('black');
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }

};
