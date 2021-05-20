import { Component, ViewChild,Input,ChangeDetectionStrategy } from '@angular/core';
import { BankdetailsService } from './bankdetails.service';
import {PaginationInstance} from 'ngx-pagination';

import {Bank} from '../app/bank';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent  {
  title = 'fyle-bank-app';
  // banks : Bank[]=[];
  @Input('data') banks: Bank[] = [];

  constructor(private bankdetailsService: BankdetailsService) {

   }
  
  tmp : Bank[]=[];
  srk : any;
  st: any;
  ngOnInit(): void {

  }

  cityselect(e:any)
  {
  // console.log(e.target.value);
    // this.st=e.target.value;
    this.bankdetailsService.fetchdata(e.target.value).subscribe((data) =>
    {
      // console.log(data);
      this.banks=data;
      this.tmp=data;
    },(error) => 
    {
        console.log(error);
    })
  }

  Search()
  {
    console.log(this.srk);
    this.banks=this.tmp;
    if(this.srk=="")
    {
      
    }
    else
    {
      this.srk=this.srk.toLowerCase();
      this.banks=this.banks.filter(res =>{
        return res.ifsc.toLocaleLowerCase().match(this.srk.toLocaleLowerCase());
      })
    };

  }
  // for pagination
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [10,3,5,15,25,50,100,200];
  onTableDataChange(event : any){
    this.page = event;
    this.banks=this.tmp;
    // this.fetchPosts();
  }  

  onTableSizeChange(event : any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.banks=this.tmp;
    // this.fetchPosts();
  }  

}

  
