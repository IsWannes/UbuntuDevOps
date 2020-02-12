import { Component, OnInit, Input } from '@angular/core';
import { AouragheService, } from '../aouraghe.service';

@Component({
  selector: 'app-aouraghe-child',
  templateUrl: './aouraghe-child.component.html',
  styleUrls: ['./aouraghe-child.component.css']
})
export class AouragheChildComponent implements OnInit {
 
  public Data :string = "";
  public display:boolean = false;
  ArticleInfo: IArticleDisplay;
  
  constructor(private service: AouragheService) { }
  toggle(){
    this.display = !this.display;
  }

  get Location() {
    return this.Data;
  }

  @Input('Location')
  set Location(value :string)
  {
    this.Data = value;
    this.service.GetApiCall(this.Data).subscribe((result) => {
        console.log(result);
       this.ArticleInfo = {
          Title: result.articles[0].title,
          Source: result.articles[0].source.name,
          Status: result.status,
          Description: result.articles[0].description,
        } 
        
    },(error => {
      console.log("niet gevonden")
      this.ArticleInfo = {
        Title: "niet gevonden",
          Source: "niet gevonden",
          Status: "niet gevonden",
          Description: "niet gevonden",
      };
    }))
  }

  ngOnInit() {
  }

}
export interface IArticleDisplay {
  Source: string;
  Title: string;
  Status: string;
  Description: string;
}
