
var ca;
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  //createCanvas(600, 600);
  
  stroke(0); 
  fill(150);
  
 

  ca = new Ca;
  
  frameRate(100);
  

}

function draw() {
 
  
  ca.display();
    
  ca.generate();
    
  if (ca.finished()){
    //background(0);
    ca.randomize();
    ca.restart();
  }
 
  
}

function windowResized() {
    
  resizeCanvas(windowWidth, windowHeight);

}

function Ca () {
 
  this.generation = 0;
  this.w = 20;
  
  this.tam = parseInt(windowWidth/this.w);
  
    this.cells = [this.tam]; 
  
  this.ruleset = [ 0, 1, 0, 1, 1, 0, 1, 0];
  
  //this.ruleset = [ 0, 1, 1, 0, 1, 0, 1, 0];
      
  for (var i = 0; i < this.tam; i++) {
    
    this.cells[i] = 0;
    
  }


  this.cells[parseInt(this.tam/2)] = 1;
  
  println (this.cells.length);
  println(this.cells);
  
  println(this.ruleset);
  
  this.generate=function () {
    
   
   var nextGen = [this.tam];
      
  for (var i = 0; i < this.tam; i++) {
    
    nextGen[i] = 0;
  // this.cells[i] = int(random(2));
  }
    
    for (var i = 1; i < this.tam-1; i++) {
      var left   = this.cells[i-1];
      var me     = this.cells[i];
      var right  = this.cells[i+1];
      nextGen[i] = this.rules(left, me, right);
    }

    this.cells = nextGen;
   
   
    
  };
 

   this.rules = function( a,  b, c) {
    var s = "" + a + b + c;
 
    var index = parseInt(s,2);

    return this.ruleset[index];
    
 
  };
  
   this.display = function () {
       
    for (var j = 1; j <= this.tam-1; j++) {
      if (this.cells[j] == 1) fill(0);
      else               fill(255);
      noStroke();
        var t = random(1);
        /*if (t>0.5){rect(j*this.w, this.generation*this.w, this.w, this.w);}
        else
        ellipse(j*this.w, this.generation*this.w, this.w, this.w)*/
        rect(j*this.w, this.generation*this.w, this.w, this.w);
        
        /*beginShape();
        vertex(30, 20);
        vertex(85, 20);
        vertex(85, 75);
        vertex(30, 75);
        endShape(CLOSE);*/
    }
        this.generation++;
  };
  
  this.randomize = function() {
    for (var i = 0; i < 8; i++) {
      this.ruleset[i] = int(random(2));
    }
  }
  this.finished = function() {
    
    if (this.generation > windowHeight/this.w) {
      return true;
    } 
    else {
      return false;
    }
  };
  
  this.restart = function(){
     
     //check this out
     this.tam = parseInt(windowWidth/this.w);
      
     this.cells = [this.tam];
     
     for (var i = 0; i < this.tam; i++) {
    
    //this.cells[i] = 0;
    this.cells[i] = int(random(2));
  }

    //this.cells[this.tam/2] = 1;   // We arbitrarily start with just the middle cell having a state of "1"
    this.generation = 0;
      
    //  this.w = int(random(10,20));
    
      this.tam = parseInt(windowWidth/this.w);
  }
};

