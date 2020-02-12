import { Component, OnInit, Input } from '@angular/core';
import { Vandriel3Component } from '../../vandriel3/vandriel3.component';
import { VandrielService, IFuck } from '../../vandriel3/vandriel.service';

@Component({
  selector: 'app-vandriel-child',
  templateUrl: './vandriel-child.component.html',
  styleUrls: ['./vandriel-child.component.css']
})

export class VandrielChildComponent implements OnInit {
  // @Input() test: Vandriel3Component;
  @Input('ToName')    inputName: string;
  @Input('FromName') inputFrom: string;
  pressed:boolean=false;

  @Input() fuckoff;
  showFuck(){
    this.inputName = this.fuckoff;
  }

  constructor(private service: VandrielService) {
    service.GetFuckOffFromAPI(this.inputName, this.inputFrom).subscribe(_fuckoff => {
      this.fuckoff = _fuckoff;
    });

    this.pressed = false;
  }

  getInput = () => {
    this.service.GetFuckOffFromAPI(this.inputName, this.inputFrom).subscribe(_fuckoff => {
      this.fuckoff = _fuckoff;
      this.pressed = true;
    });
  }



  ngOnInit() {
  }


}
