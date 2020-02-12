import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinken2',
  templateUrl: './vinken2.component.html',
  styleUrls: ['./vinken2.component.css']
})
export class Vinken2Component implements OnInit {
  //Images
  public imageLsOff : string = "../../../assets/images/vinken2/LightsaberOff.png";
  public imageLsBlueOn : string = "../../../assets/images/vinken2/LightsaberBlueOn.png";
  public imageLsRedOn : string = "../../../assets/images/vinken2/LightsaberRedOn.png";
  public imageLsGreenOn : string = "../../../assets/images/vinken2/LightsaberGreenOn.png";
  public imageLsPurpleOn : string = "../../../assets/images/vinken2/LightsaberPurpleOn.png";
  
  //Variables
  public ready : boolean = false;
  public TurnedOn : boolean = false;
  public choiceBlue : boolean = false;
  public choiceRed : boolean = false;
  public choiceGreen : boolean = false;
  public choicePurple : boolean = false;
  public name : string = "Wannes Vinken";

  public option : string = "";
  public colors = [
    {color: 'Blue'},
    {color: 'Red'},
    {color: 'Green'},
    {color: 'Purple'}
  ]


  readyToBuild = () =>{
    this.ready = true;
  }
  TurnOff = () =>{
    this.TurnedOn = false;
    this.choiceBlue = false;
    this.choiceRed = false;
    this.choiceGreen = false;
    this.choicePurple = false;
  }
  Ignite = () =>{
    this.TurnedOn = true;
    this.option = (<HTMLSelectElement>document.getElementById('PickColor')).value;
    if(this.option == 'Blue'){
      this.choiceBlue = true;
      this.choiceRed = false;
      this.choiceGreen = false;
      this.choicePurple = false;
    }
    else if(this.option == 'Red'){
      this.choiceBlue = false;
      this.choiceRed = true;
      this.choiceGreen = false;
      this.choicePurple = false;
    }
    else if(this.option == 'Green'){
      this.choiceBlue = false;
      this.choiceRed = false;
      this.choiceGreen = true;
      this.choicePurple = false;
    }
    else{
      this.choiceBlue = false;
      this.choiceRed = false;
      this.choiceGreen = false;
      this.choicePurple = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
