import { Component, OnInit, Input } from '@angular/core';
import { VandenheuvelService } from '../vandenheuvel.service';

@Component({
  selector: 'app-vandenheuvel-child',
  templateUrl: './vandenheuvel-child.component.html',
  styleUrls: ['./vandenheuvel-child.component.css']
})
export class VandenheuvelChildComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  @Input("Today") today: Date;
  @Input("Day") day: number;
  @Input("Month") month: number;
  Randomfact: string = "";
  daytostring: string;
  monthtostring: string;
 
  
  constructor(private service: VandenheuvelService) { 
    this.daytostring = this.day.toString();
    this.monthtostring = this.month.toString();
    this.service.GetDailyFact(this.daytostring, this.monthtostring).subscribe((result => {this.Randomfact = result.text;}))
  }

  
}
