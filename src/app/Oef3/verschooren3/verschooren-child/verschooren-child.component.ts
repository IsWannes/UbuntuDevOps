import { Component, OnInit, Input } from '@angular/core';
import { MintaService } from '../../minta3/minta.service';

@Component({
  selector: 'app-verschooren-child',
  templateUrl: './verschooren-child.component.html',
  styleUrls: ['./verschooren-child.component.css']
})
export class VerschoorenChildComponent implements OnInit {

  @Input() ParentString: string;

  constructor(private service: MintaService) { }

  ngOnInit() {
  }

}
