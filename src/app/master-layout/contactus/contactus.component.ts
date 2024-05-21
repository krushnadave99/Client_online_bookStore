
import { Component } from "@angular/core";
import { ContactUs } from "../../common";
import { CommonserviceService } from "../../commonservice.service";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrl: "./contactus.component.scss",
})
export class ContactusComponent {
  contactUsList =new ContactUs();
  strErr:any;
  constructor(    
    public Commonservice: CommonserviceService
    
  ){}
  onSubmit() {
    if(!this.contactUsList.email){
      this.strErr ="email is required";
    }
    if(!this.contactUsList.mobileno){
      this.strErr ="Mobileno is required";
    }
    if(!this.contactUsList.name){
      this.strErr ="Username is required";
    }
    if(!this.contactUsList.message){
      this.strErr ="Message is required";
    }
    if(this.contactUsList){
        console.log(this.contactUsList);
        this.Commonservice.contactus(this.contactUsList).subscribe(e=>{
          if(e){
            console.log(e);
          }
        })
    }
  }
}
