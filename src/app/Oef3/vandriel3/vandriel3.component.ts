import { Component, OnInit } from '@angular/core';
import { BaetenService, IJoke_API} from '../baeten3/baeten.service';

@Component({
  selector: 'app-vandriel3',
  templateUrl: './vandriel3.component.html',
  styleUrls: ['./vandriel3.component.css']
})

export class Vandriel3Component implements OnInit {

  joke: String = null;
  punchline: String = null;
  position: Number = 2;
  reactionString: String = ""
  textbtn1 = "Progamming jokes"
  textbtn2 = "Normal jokes"

  constructor(private service: BaetenService) {
  }  

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

  
}