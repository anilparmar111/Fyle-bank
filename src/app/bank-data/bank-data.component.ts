import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from 'src/shared/model/Bank';
import { BankdetailsService } from "../../shared/service/bankdetails.service";

@Component({
  selector: 'app-bank-data',
  templateUrl: './bank-data.component.html',
  styleUrls: ['./bank-data.component.css']
})
export class BankDataComponent implements OnInit {

  constructor(private bankdetailsService: BankdetailsService,private router: Router,private activatedRoute: ActivatedRoute) { }

  public bank : any;
  public id : any;
  ngOnInit(): void {
    this.bank=this.bankdetailsService.getData();
    if (this.bank == undefined) {
      this.router.navigate(['/'])
    }
    else {
      this.id = this.activatedRoute.snapshot.params.id;
      console.log(this.id);
      if(this.id==this.bank.id)
      {
        console.log("match");
      }
      else
      {
        this.router.navigate(['/']);
      }
      

  }
}

}
