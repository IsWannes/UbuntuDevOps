import { Component, OnInit, Input } from '@angular/core';
import { BaetenService, IJoke_API} from '../baeten.service';
import { BoeckxService, IRandomNameAPI} from '../../boeckx3/boeckx.service';

@Component({
  selector: 'app-baeten-child',
  templateUrl: './baeten-child.component.html',
  styleUrls: ['./baeten-child.component.css']
})
export class BaetenChildComponent implements OnInit {

  @Input("ShowJokes") showjokes: boolean

  joke: String = null;
  punchline: String = null;
  position: Number = 2;
  reactionString: String = ""
  textbtn1 = "Progamming jokes"
  textbtn2 = "Normal jokes"
  name: String;

  constructor(private service: BaetenService, private otherService: BoeckxService) { }

  ngOnInit() {
  }

  getProgrammerJoke()
  {
    this.joke = "Loading ...";
    this.punchline = "Loading ...";
    this.position = 2;
    this.reaction();
    this.textbtn1 = "Get new programmer joke";
    this.textbtn2 = "Normal jokes";
    this.service.GetRandomProgrammerJokeFromAPI().subscribe(result => {this.joke = result[0].setup; this.punchline = result[0].punchline})   
  }

  getNormalJoke()
  {
    this.joke = "Loading ...";
    this.punchline = "Loading ...";
    this.position = 2;
    this.reaction();
    this.textbtn1 = "Programmer jokes";
    this.textbtn2 = "Get new normal joke";
    this.service.GetRandomNormalJokeFromAPI().subscribe(result => {this.joke = result.setup; this.punchline = result.punchline})  
  }

  reaction()
  {
    if(this.position == 1)
    {
      this.reactionString = "Now you're happy 😉";
    }
    else if(this.position == 2)
    {
      this.reactionString = "";
    }
    else if(this.position == 3)
    {
      this.reactionString = "I'm sorry, take another joke 😥";
    }
  }

  getRandomName()
  {      
      this.otherService.GetRandomnameBelgiumFromAPI().subscribe(result => {this.name = result.name})
  }

}
