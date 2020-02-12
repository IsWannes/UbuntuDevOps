import { Component, OnInit } from '@angular/core';
import { MartensService, Memes, Meme } from './martens.service';


@Component({
  selector: 'app-martens3',
  templateUrl: './martens3.component.html',
  styleUrls: ['./martens3.component.css']
})
export class Martens3Component implements OnInit {

  Memes : Memes;
  MemeList : Meme[];
  SelectedMeme:Number;
  MemeUrl:String;

  constructor(private svcmemes:MartensService) { 

    this.svcmemes.getMeme().subscribe(x=> {
      this.Memes = x;
    })

    }

    MemeTonen(index: number){
      console.log(index);
      this.MemeUrl=this.Memes.data.memes[index].url;
    }
    


  ngOnInit() {
    }

}
