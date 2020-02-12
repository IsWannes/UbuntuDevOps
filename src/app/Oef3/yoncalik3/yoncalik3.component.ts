import { Component, OnInit } from '@angular/core';
import {YoncalikService} from './yoncalik.service';
import { TobbackChildComponent } from '../tobback3/tobback-child/tobback-child.component';
import { AbrarService, IPassword } from '../../Oef3/abrar3/abrar.service';

@Component({
  selector: 'app-yoncalik3',
  templateUrl: './yoncalik3.component.html',
  styleUrls: ['./yoncalik3.component.css']
})
export class Yoncalik3Component implements OnInit {


  name = 'Angular';

   ipaddress:string = '';
   latitude:string= '';
   longitude:string= '';
   currency:string = '';
   city:string = '';
   country:string ='';
in_eu:string = '';
languages:string=''; 
region:string='';
region_code:string='';
country_name:string='';
continent_code:string='';
postal:string='';
timezone:string='';
utc_offset:string='';
country_calling_code='';
org:string='';

answer:string='';
gif:string='';

iPass: string [] = []; 
public check: boolean;
public passGeneratorUrl: string = "../../../assets/images/pass.png"
public searchImageUrl: string = "../../../../assets/images/search.png"



iMath : string; 
iYear: string;
iTrivia: string;
iDate: string;

   constructor(private visitorsService:YoncalikService,private childService: AbrarService){
   }

   ngOnInit(){

      this.visitorsService.getIpAddress().subscribe(res => {

        this.ipaddress = res['ip'];
          this.latitude = res['latitude'];
          this.longitude = res['longitude'];
          this.currency = res['currency'];
        
         // this.currencysymbol = res['currency']['symbol'];
          this.city = res['city'];
          this.country = res['country'];
         // this.isp = res['isp'];
          this.in_eu = res['in_eu'];
         // this.calling_code = res['calling_code'];
         // this.country_tld = res['country_tld'];
          this.languages = res['languages'];
         // this.country_flag = res['country_flag'];
         this.region = res['region'];
         this.region_code= res['region_code'];
         this.country_name= res['country_name'];
         this.continent_code= res['continent_code'];
         this.postal=res['postal'];
         this.timezone=res['timezone'];
         this.utc_offset=res['utc_offset'];
         this.country_calling_code=res['country_calling_code'];
         this.org= res['org'];





          console.log(res);
        });
    
        this.visitorsService.getYesNoData().subscribe(res => {
  
  this.answer = res['answer'];
  this.gif = res['image'];
            console.log(res);
          });
    
   }



   GetPassword = (passwordLength: number, value:number) => {
    this.childService.GetData(passwordLength, value).subscribe(result => {
      console.log(passwordLength, value);
      this.iPass = [];
      
       for(var i = 0; i < value;i++){
        this.iPass.push(result.passwords[i]);
      } 
     
      this.check= true;
    })
  }


  GetYearFacts = () => {
    this.childService.GetIYear().subscribe(jaar => {
      this.iYear = jaar.text;
    })
  }

  GetMathFacts = () => {
    this.childService.GetIMath().subscribe(math => {
      this.iMath = math.text;
    })
  }

  GetTriviaFacts = () => {
    this.childService.GetITrivia().subscribe(trivia => {
      this.iTrivia = trivia.text;
    })
  }

  GetDateFacts = () => {
    this.childService.GetIDate().subscribe(date => {
      this.iDate = date.text;
    })
  }




}

