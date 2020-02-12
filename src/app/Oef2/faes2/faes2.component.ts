import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faes2',
  templateUrl: './faes2.component.html',
  styleUrls: ['./faes2.component.css']
})
export class Faes2Component implements OnInit {

  buttonClicked : boolean = false;

  buttonValue : String = "DONT COME HERE! >:(";
  otherButtonValue : String = "IM SHY! DONT CLICK ME! :'("
  switchValue : String;
  imgUrl : String = "https://laverdadnoticias.com/export/sites/laverdad/img/2019/11/16/5897a8c3cba9841eabab6156.png_1082659321.png";


  anime : Anime[] = [];
  animeButtonValue : String = "Add!";

  mousePosX : number;
  mousePosY : number;

  ngOnInit() {
  }

  constructor(){
    this.anime.push(new Anime("Kimetsu No Yaiba","Ufotable","Shounen"));
  }

  changeButton = () =>{
    this.switchValue = this.buttonValue;
    this.buttonValue = this.otherButtonValue;
    this.otherButtonValue = this.switchValue;
  }

  sth = (event : MouseEvent) =>{
    
  }

  buttonClick = () =>{
    this.buttonClicked = true;

  }

  newAnime(titleIn : String, studioIn : String, genreIn : String){
    this.anime.push(new Anime(titleIn, studioIn, genreIn));
  }

  emojiShy = (event : MouseEvent) =>{
    this.mousePosX = event.clientX;
    this.mousePosY = event.clientY;
    console.log(this.mousePosX);

    if(this.mousePosX >= 707 && this.mousePosX <= 805){
      this.imgUrl = "https://i.kym-cdn.com/photos/images/original/001/318/758/bbe.png"
    }
    else{
      this.imgUrl = "https://laverdadnoticias.com/export/sites/laverdad/img/2019/11/16/5897a8c3cba9841eabab6156.png_1082659321.png";
    }

  }

}

export class Anime {
  title: String;
  studio: String;
  genre: String;

  constructor(public titleIn : String, public studioIn : String, public genreIn : String) {
      this.title = titleIn;
      this.studio = studioIn;
      this.genre = genreIn;
  }
}