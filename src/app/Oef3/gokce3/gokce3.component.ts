import { Component, OnInit } from '@angular/core';
import { GokceService, IAvatars } from './gokce.service';
import { JsonPipe } from '@angular/common';
import {ColorPickerModule} from 'primeng/colorpicker';

@Component({
  selector: 'app-gokce3',
  templateUrl: './gokce3.component.html',
  styleUrls: ['./gokce3.component.css']
})
export class Gokce3Component implements OnInit {

  // selectOog: string = "eyes1";
  // selectNeus: string = "nose2";
  // selectMond: string = "mouth1";
  // inFace: IFace;

  selectNaam: string = "G";
  selectType: string = "human";
  selectMood: string = "happy";

  showMood: boolean = false;

  inAvatars: IAvatars;
  // imageurl: any;
  // imgurl = `https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895`

  Image = `https://avatars.dicebear.com/v2/male/john.svg?options[mood][]=happy`

  constructor(private service: GokceService) {

    // this.service.GetAPI().subscribe(result => {
    //   this.inFace = result.face;
    //   this.imageurl = `https://api.adorable.io/avatars/face/${this.inFace.eyes[0]}/${this.inFace.nose[0]}/${this.inFace.mouth[0]}/8e8895`
    // })

    this.service.GetAPI().subscribe(result2 => {
      this.LookMood();
      this.inAvatars = result2.avatars;
      this.Image = `https://avatars.dicebear.com/v2/male/john.svg?options[mood][]=happy`
    })

  }

  LookMood() {
    if (this.selectType == "human" || this.selectType == "male" || this.selectType == "female") {
      this.showMood = true;
    }
    else {
      this.showMood = false;
    }
  }

  // ChangeFace(eyes: string, nose: string, mouth: string) {
  //   this.imageurl = `https://api.adorable.io/avatars/face/${eyes}/${nose}/${mouth}/8e8895`
  // }

  ChangeFace(type: string , naam: string,mood: string ) {
    this.LookMood();
    this.Image = this.service.GetAvatar(type,naam,mood);
  }


  ngOnInit() {
  }

}
