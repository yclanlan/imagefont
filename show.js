function show(){
 
    background(0);
   let val = slider.value();
   rotate(sin(frameCount)*2);
   for (let i = 0; i < cols; i++) {
     for (let j = 0; j < rows; j++) {
       let y = i * res;
       let x = j * res;
       rotate(sin(frameCount)/5);
       if (grid[i][j] == 1) {
         // noFill();
         noStroke();
         fill(255);
         ellipse(x + res * 0.5, 
                 y + res * 0.5, 
                 val+25*sin(frameCount),
                 val + y / 10 + 25*cos(frameCount*2));
         
       }
     }
   }
   
 }