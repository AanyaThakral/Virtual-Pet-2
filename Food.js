class Food{

    constructor(){
        
        this.foodStock = foodS;
        this.lastFed;
        this.image = loadImage("images/Milk.png");
        
    }

    display(){

     var x = 5
     var y = 20
     
     imageMode(CENTER);

     if(this.foodS!== 0){

        for(var i = 0; i < foodS; i++){

            if(i % 10 === 0){

                x = x + 60;
                y = 20

            }

            image(this.image, x, y, 50, 50);
            y = y + 60;

        }

  

     }

    

     

   }

   bedroom(){
       background(bedroom,550,500);
   }
   garden(){
       background(garden,550,500);

   }
   washroom(){
       background(washroom,550,500);
   }
}
