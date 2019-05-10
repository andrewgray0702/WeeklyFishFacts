import { Component, OnInit } from '@angular/core';
import { FactService } from 'src/app/services/fact.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {
  suggestion: string;
  suggested: boolean = false;
  constructor(private factServ: FactService) { }

  suggest(){
    this.factServ.suggestFact({
      "fact": this.suggestion,
      "userID": localStorage.getItem('user') 
    })
    this.suggested = true;
    console.log(this.suggested)
  }
  ngOnInit() {
  }

}
