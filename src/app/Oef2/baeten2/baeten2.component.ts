import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baeten2',
  templateUrl: './baeten2.component.html',
  styleUrls: ['./baeten2.component.css']
})
export class Baeten2Component implements OnInit {

  public arr : number[];
  public hasClicked :boolean[]; 
  public class_btn : string = "btn";
  
  private counter : number;
  private orderArray : number[] = [8];

  public bgcl : string;
  public mouseX :number = 0;
  public mouseY :number = 0;
  public LastmouseX :number = 0;
  public LastmouseY :number = 0;

  constructor() {
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8];
    this.hasClicked = [false, false, false, false, false, false, false, false];
    this.counter = 0;
    this.bgcl = "white";
   }

  ngOnInit() {
  }

  HasClicked(nr :number, lastevent: MouseEvent)
  {
    this.hasClicked[nr] = true; 
    this.orderArray[this.counter] = nr;    
    this.counter++; 
    this.checkCounter(); 
    this.LastmouseX = lastevent.offsetX;
    this.LastmouseY = lastevent.offsetY;
  }

 andere() : string {
   return "andereClass";
 } 

 Reset()
 {
   this.hasClicked = [false, false, false, false, false, false, false, false];
   this.counter = 0;
   this.bgcl = "white";
   this.class_btn = "btn";
 }

 checkCounter()
 {   
   if(this.counter == 8)
   {     
     // Check array
     for(let x = 0; x < this.arr.length; x++)
     {       
       if(this.arr[x] != this.orderArray[x])
       {
         this.bgcl = "red";
         this.class_btn = "red";        
         break;
       }
       else
       {         
          this.bgcl = "green";
          this.class_btn = "green";
       }
     }
   }
 }

 ReadMouse(event: MouseEvent)
  {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
  }
  
}
