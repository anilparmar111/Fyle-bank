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
    this.banks=this.tmp;
    if(this.srk=="")
    {
      
    }
    else
    {
      this.srk=this.srk.toLowerCase();
      let tr : Array<Bank> = new Array();

      for(let i=0;i<this.banks.length;i++)
      {
        // console.log(this.banks[i]);
        // console.log(this.banks[i].address);
        if(this.banks[i].address.toLocaleLowerCase().match(this.srk)  || 
        this.banks[i].branch.toLocaleLowerCase().match(this.srk) || this.banks[i].city.toLocaleLowerCase().match(this.srk) ||
        this.banks[i].district.toLocaleLowerCase().match(this.srk) || this.banks[i].ifsc.toLocaleLowerCase().match(this.srk) ||
        this.banks[i].state.toLocaleLowerCase().match(this.srk))
        {
          tr.push(this.banks[i]);
          continue;
        }
        if(this.banks[i].bank_id==this.srk)
        {
          tr.push(this.banks[i]);
        }
      }
      this.banks=tr;
      
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
  }  

  onTableSizeChange(event : any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.banks=this.tmp;
  }  

}

  
