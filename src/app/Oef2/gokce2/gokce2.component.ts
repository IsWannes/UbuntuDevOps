import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-gokce2',
  templateUrl: './gokce2.component.html',
  styleUrls: ['./gokce2.component.css']
})
export class Gokce2Component implements OnInit {

  blokken: string[];
  VolgendeSP:boolean;
  winnaar:string;
  OScore:number = 0;
  XScore:number = 0;
  showScore=false;
  xPos : number;
  yPos : number;

  // Button [disabled] werkt niet.
  
  NotPlaying:boolean = true;

  constructor() { 
    //this.Start();
  }

  ngOnInit() {
  }

  Start(){
  this.UpdateScore();
    

    this.blokken=Array(9).fill(null);
   // this.NotPlaying=true;
    // if(this.winnaar !=null){
    //   this.winnaar=null;
    // }
    // this.winnaar=null;
    this.VolgendeSP=true;
    
  }

  UpdateScore(){
    this.showScore=true;
    if(this.winnaar=="O"){
      this.OScore++;
      this.winnaar=null;
      this.Start();
    }
    else if(this.winnaar=="X"){
      this.XScore++;
      this.winnaar=null;
      this.Start();
    }
    else;
    

  }

   getStyle(val : string){
    if(val == "X"){
      return {'color':'red'};
    }
    else{
      return {'color':'white'};
    }
  }

  get VolgendeSpeler(){
    if(this.VolgendeSP){
      return 'X';
    }
    else if(!this.VolgendeSP){
      return 'O';
    }
  }

  VolgendeMove(move:number){
    if(!this.blokken[move] && this.winnaar==null){
      this.blokken.splice(move,1,this.VolgendeSpeler);
      this.VolgendeSP= !this.VolgendeSP;

      
      
    }
    
    this.winnaar=this.Bereken();

   
    
  }

  MuisPos(event: MouseEvent): void{
    this.xPos=event.clientX;
    this.yPos=event.clientY;

  }

  Bereken(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.blokken[a] &&
        this.blokken[a] === this.blokken[b] &&
        this.blokken[a] === this.blokken[c]
      ) {
        return this.blokken[a];
      }
    }
    return null;


  }


  



}

