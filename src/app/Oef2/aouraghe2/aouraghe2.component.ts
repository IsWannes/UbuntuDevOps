import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-aouraghe2',
  templateUrl: './aouraghe2.component.html',
  styleUrls: ['./aouraghe2.component.css']
})
export class Aouraghe2Component implements OnInit {
  public text:string = "";
  public displayname:boolean = false;
  public Merken: VliegtuigMerken[] = [];

  public placeholder:string = "Other aircrafts";
  public placeholder1:string = "Price";
  
  public title: string = "Aircraft buy order";
  public list: string[] = [];
  public item: string = "";
  public B1:string = "View available aircrafts"
  public check:boolean = true;
  public check2:boolean = true;
  public num:string = "";

  public naam:string = "";
  public Voornaam:string = "";
  public Comp:string = "";
  public Vat:number;
  public Airport:string = "";
  public var1:string;
  public var2:string;
  public var3:string;
  public var4:number;
  public var5:string;


  constructor() {  
    this.Vliegtuig();
  }

  ngOnInit() {
    
  }

  Vliegtuig(){
    this.Merken.push(new VliegtuigMerken("Boeing","707,30050","717,308769","727,3076876","737,76576","747,307868","757,30786576","767,30050657865","777,300507987","787,300506"));
    this.Merken.push(new VliegtuigMerken("Airbus","A220,30050876","A300,30050768","A310,300506787","A318,98","A319,30050897","A320,30050987","A321,3005069876","A330,30050","A340,30050","A350,30050","A380,30050"));
    this.Merken.push(new VliegtuigMerken("Bombardier","Challenger 650,30050","CRJ100/200,30050","Global 6000/6500,30050","Global 5000/5500,30050","CRJ700,30050","CRJ900,30050","CRJ1000,30050","Global 7500,30050","Global 8000,30050"));
    this.Merken.push(new VliegtuigMerken("Embraer","E170,30050","E175,30050","E190,30050","E195,30050","E175-E2,30050","E190-E2,30050","E195-E2,30050"));
  }

  toggle(){
    this.displayname = !this.displayname;
  }
  info(event){
    this.var1= this.naam;
    this.var2= this.Voornaam;
    this.var3= this.Comp;
    this.var4= this.Vat;
    this.var5= this.Airport;
    this.check = !this.check;
    console.log(event.type);

  }

  

  get items()
  {
    return this.list;
  }

  public AddBox(type:string)
  {
 
    this.item = type;
    if(!this.items.includes(this.item)){
      this.items.push(this.item)
    }
    
    this.item = ""; 
  }

  Add()
  {
    this.items.push(this.item + " custom price $" + this.num)
    this.num = "";
    this.item = "";
  }

  Delete(i: number)
  {
    this.items.splice(i, 1)
  }
  Begin(){
    this.check2 = true;
    this.list = [];
  }
  Einde(){
    this.check2 = false;
    
  }
}

class VliegtuigMerken
{
  Typs: string[] = [];

  Prijzen: string[] = [];
  vName:string[] = [];

  Totaal:string[] = [];

  constructor(public Name: string, ...typs: string[])
  {
    this.Typs = typs;
    this.Getprijs();
    
  }

  Getprijs(){
    for (let index = 0; index < this.Typs.length; index++) {
      var element = this.Typs[index].split(",");
      
      this.vName.push(element[0]);
      this.Prijzen.push(element[1]);
      
    }
    this.SamenVoegen();
  }

  SamenVoegen(){
    for (let index = 0; index < this.vName.length; index++){
      this.Totaal.push(this.vName[index]+" preset price $"+this.Prijzen[index]);

    }


  }
}