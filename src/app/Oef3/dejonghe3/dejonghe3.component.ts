import { Component, OnInit } from '@angular/core';
import { DejongheService } from './dejonghe.service';
import { BaetenService } from '../baeten3/baeten.service';

@Component({
  selector: 'app-dejonghe3',
  templateUrl: './dejonghe3.component.html',
  styleUrls: ['./dejonghe3.component.css']
})
export class Dejonghe3Component implements OnInit {
  searchTerm:string;
  infoArray:Array<Iinfo> = new Array<Iinfo>();

  setup:String;
  punchline:String;

  side:string;

  constructor(private service:DejongheService, private joke:BaetenService) { }

  ngOnInit() {
    this.joke.GetRandomProgrammerJokeFromAPI().subscribe(result=>{
      this.setup = result[0].setup;
      this.punchline = result[0].punchline;
    })
  }

  update(){
    this.service.getDetail(this.searchTerm).subscribe(result=>{
      this.infoArray = [];
      this.infoArray = result.results;
    })
  }
}

interface Iinfo{
  name:string;
  height:number;
  mass:number;
  hair_color:string;
  skin_color:string;
  eye_color:string;
  birth_year:number;
  gender:string;
}
