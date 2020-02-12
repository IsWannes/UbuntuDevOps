import { Component, OnInit } from '@angular/core';
import { BaetenService} from '../baeten3/baeten.service';

//api call https://opentdb.com/api.php?amount=1 waarbij amount bepaald hoeveel vragen er gegenereerd worden

@Component({
  selector: 'app-vanriel3',
  templateUrl: './vanriel3.component.html',
  styleUrls: ['./vanriel3.component.css']
})
export class Vanriel3Component implements OnInit {
  amount: number = 1;
  requestedAmount: number;
  joke: String = null;
  punchline: String = null;
  
  constructor(private service: BaetenService) { 
    this.service.GetRandomNormalJokeFromAPI().subscribe(result => {this.joke = result.setup; this.punchline = result.punchline})
    setInterval(this.Refresh, 100);
  }

  ngOnInit() {
    
  }

  Refresh = () => {
    if(this.amount != null)
    this.requestedAmount = this.amount;
  }
}
