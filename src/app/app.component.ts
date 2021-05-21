import { Component, Input,ChangeDetectionStrategy } from '@angular/core';
import { BankdetailsService } from "../shared/service/bankdetails.service";
import { Bank } from "../shared/model/Bank";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent  {
  title = 'fyle-bank-app';
  
}

  
