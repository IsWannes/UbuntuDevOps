import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

export class Information {
  firstName: string;
  lastName: string;
  birthPlace: string;
  dorp: string;
  postcode: string;
  loonperuur: number;
}

export class Mens{
  constructor(public voornaam: string, public achternaam: string, public geboorteplaats: string, public dorp: string, public postcode: string, public loonperuur: number){
  }
}

@Component({
  selector: 'app-boeckx2',
  templateUrl: './boeckx2.component.html',
  styleUrls: ['./boeckx2.component.css']
})

export class Boeckx2Component implements OnInit {

  public information: Information = new Information();
  public showInformation;
  mensen: Mens[] = [];
  mensenvorige: Mens[] = [];
  message: string | null;
  verhoogd: number;  
  pictogram: String;
  windrichting: string;

  constructor() { 
    this.pictogram = "►";
    this.windrichting = "oost";
    this.showInformation = false;
  }

  ControlInformation(){    
    if(this.information.firstName == null || this.information.lastName == null || this.information.birthPlace == null || this.information.dorp == null || this.information.postcode == null || this.information.loonperuur == null){
      this.message = "Je bent vergeten een waarde te geven voor alle velden, probeer opnieuw!";      
    }
    else{
      this.message = "";
      this.PassInformation();
    }
  }

  NewInformation(){    
    this.information.firstName = null;
    this.information.lastName = null;
    this.information.birthPlace = null;
    this.information.dorp= null;
    this.information.loonperuur = null;
    this.information.postcode = null;

    this.showInformation = false;
  }

  PassInformation = () =>{
    this.mensen.push(new Mens(this.information.firstName, this.information.lastName, this.information.birthPlace, this.information.dorp, this.information.postcode, this.information.loonperuur));
    this.showInformation = true;    
  }

  IncreaseMoney(value:number): void{
    value++;
    this.verhoogd = value;
  }

  Move(event: KeyboardEvent):void{
    if(this.pictogram == "►"){
      this.pictogram ="▼";
      this.windrichting = "zuid"
    }
    else{
      if(this.pictogram == "▼"){
        this.pictogram = "◄";
        this.windrichting = "west"
      }
      else{
        if(this.pictogram == "◄"){
          this.pictogram = "▲";
          this.windrichting = "noord"
        }
        else{
          if(this.pictogram == "▲")
          this.pictogram = "►";
          this.windrichting = "oost"
        }
      }
    }          
  }

  ngOnInit() {
    
  }
}