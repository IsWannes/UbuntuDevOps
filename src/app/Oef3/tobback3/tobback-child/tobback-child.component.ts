import { Component, OnInit, Input } from '@angular/core';
import { TobbackService, Holiday } from '../tobback.service';

@Component({
  selector: 'app-tobback-child',
  templateUrl: './tobback-child.component.html',
  styleUrls: ['./tobback-child.component.css']
})
export class TobbackChildComponent implements OnInit {

holidays:Holiday[];
name:string;
descr:string;
date:string;

  @Input('Location')HLocation:String;
  @Input('Year')HYear:number;
  constructor(private TobbackService:TobbackService) { }
   
  ngOnInit() {
  }
  Get(){
    this.TobbackService.GetHolidays(this.HLocation,this.HYear).subscribe(
      result => this.holidays = result.response.holidays
    )    
   }
}
