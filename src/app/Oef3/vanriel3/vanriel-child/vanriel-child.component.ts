import { Component, OnInit, Input } from '@angular/core';
import { VanRielService, ITheQuestion } from '../vanriel.service';

@Component({
  selector: 'app-vanriel-child',
  templateUrl: './vanriel-child.component.html',
  styleUrls: ['./vanriel-child.component.css'],
  
})

export class VanrielChildComponent implements OnInit {
  
  @Input("aantalVragen") aantal: number
  vragen: ITheQuestion[] = [];
  constructor(private service: VanRielService) {   }

  ngOnInit() {
  }

  GenereerVragen(){
    this.vragen = [];
    if(this.aantal <= 0){
      alert("minimum aantal vragen is 1")
    }
    else{
      this.vragen.length = 0;
      for(let i=0; i<this.aantal; i++){
        this.service.GetQuestionFromAPI().subscribe(result =>{
          this.vragen.push(result.results[0]);          
        });
      }
    }
  }
}