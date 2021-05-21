export class Bank {

    ifsc : string;
    bank_id : string;
    branch : string;
    address : string;
    city : string;
    district : string;
    state : string;

    constructor(ifsc : any,bank_id : any,branch : any,address : any,city : any,district : any,state : any) {
        this.address=address;
        this.bank_id=bank_id;
        this.branch=branch;
        this.city=city;
        this.district=district;
        this.ifsc=ifsc;
        this.state=state;
        
    }
    

}
