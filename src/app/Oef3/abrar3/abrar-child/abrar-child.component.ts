import { Component, OnInit, Input } from '@angular/core';
import { AbrarService, IPassword } from '../abrar.service';
import { InputTextModule } from 'primeng/inputtext';
import { YoncalikService } from '../../yoncalik3/yoncalik.service';


@Component({
  selector: 'app-abrar-child',
  templateUrl: './abrar-child.component.html',
  styleUrls: ['./abrar-child.component.css']
})
export class AbrarChildComponent implements OnInit {

  @Input() passwordLength: number;

  public iMath: string;
  public iYear: string;
  public iTrivia: string;
  public iDate: string;
  public iOrg: string = '';
  public iCity: string = '';
  public iPostal: string = '';
  public iCountry: string = '';
  public ipAddress: string = '';
  public iLatitude: string = '';
  public iLongitude: string = '';

  public iPass: string[] = [];
  public Password: IPassword[];

  public check: boolean;
  public showDetails: boolean;

  public passGeneratorUrl: string = "../../../assets/images/pass.png";
  public searchImageUrl: string = "../../../../assets/images/search.png";
  public watchingEye: string = "../../../assets/images/whatchingEye.png";
  public notWatchingEye: string = "../../../../assets/images/notWatchingEye.png";

  constructor(private childService: AbrarService, private ipService: YoncalikService) {
    this.check = false;
    this.showDetails = false;
  }

  showIpData = () => {
    this.ipService.getIpAddress().subscribe(res => {
      this.iOrg = res['org'];
      this.iCity = res['city'];
      this.ipAddress = res['ip'];
      this.iPostal = res['postal'];
      this.iCountry = res['country'];
      this.iLatitude = res['latitude'];
      this.iLongitude = res['longitude'];
      this.showDetails = true;
    })
  }

  hideData = () => {
    this.showDetails = false;
  }

  GetPassword = (passwordLength: number, value: number) => {
    this.childService.GetData(passwordLength, value).subscribe(result => {
      console.log(passwordLength, value);
      this.iPass = [];

      for (var i = 0; i < value; i++) {
        this.iPass.push(result.passwords[i]);
      }

      this.check = true;
    })
  }

  GetYearFacts = () => {
    this.childService.GetIYear().subscribe(jaar => {
      this.iYear = jaar.text;
    })
  }

  GetMathFacts = () => {
    this.childService.GetIMath().subscribe(math => {
      this.iMath = math.text;
    })
  }

  GetTriviaFacts = () => {
    this.childService.GetITrivia().subscribe(trivia => {
      this.iTrivia = trivia.text;
    })
  }

  GetDateFacts = () => {
    this.childService.GetIDate().subscribe(date => {
      this.iDate = date.text;
    })
  }

  ngOnInit() {
  }
}
