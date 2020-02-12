import { Component, OnInit, Input } from '@angular/core';
import { DejongheService } from '../dejonghe.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dejonghe-child',
  templateUrl: './dejonghe-child.component.html',
  styleUrls: ['./dejonghe-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush    
})
export class DejongheChildComponent implements OnInit {
  @Input('side') side:string;


  constructor(private service:DejongheService) { }

  ngOnChanges(...args: any[]) {
}

  ngOnInit() {}
}
