import { Component, OnInit, Input } from '@angular/core';
import { VanopstalService } from '../../vanopstal3/vanopstal.service';

@Component({
  selector: 'app-minta-child',
  templateUrl: './minta-child.component.html',
  styleUrls: ['./minta-child.component.css']
})
export class MintaChildComponent implements OnInit {
 
  BCInfo: BCService;
  @Input() ParentMessage: string;




  constructor(private BitcoinService: VanopstalService) { 
    
      this.BitcoinService.GetData().subscribe((result) => {
        this.BCInfo = {
        usdCode: result.bpi.USD.code,
        usdSymbol: result.bpi.USD.symbol,
        usdDescription: result.bpi.USD.description,
        usdRate: result.bpi.USD.rate,
        usdFloat: result.bpi.USD.rate_float,
        gbpCode: result.bpi.GBP.code,
        gbpSymbol: result.bpi.GBP.symbol,
        gbpDescription: result.bpi.GBP.description,
        gbpRate: result.bpi.GBP.rate,
        gpbFloat: result.bpi.GBP.rate_float,
        eurCode: result.bpi.EUR.code,
        eurSymbol: result.bpi.EUR.symbol,
        eurDescription: result.bpi.EUR.description,
        eurRate: result.bpi.EUR.rate,
        eurFloat: result.bpi.EUR.rate_float,
        }
      })
    
  }
  

  ngOnInit() {
  }

}

export interface BCService{
  usdCode: string;
  usdSymbol: string;
  usdDescription: string;
  usdRate: string;
  usdFloat: number;
  gbpCode: string;
  gbpSymbol: string;
  gbpDescription: string;
  gbpRate: string;
  gpbFloat: number;
  eurCode: string;
  eurSymbol: string;
  eurDescription: string;
  eurRate: string;
  eurFloat: number;
}