import { Component, Output, Input} from '@angular/core';

import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = this.fb.group({});
  
  submitted = false;

  constructor(private fb: FormBuilder) {}

  addChildForm(name: string, group: FormGroup) {
    this.form.addControl(name, group);
  }
  
  firstname : string = "";
  lastname : string= "";
  email : string= "";
  year : number = 0;
  month : number = 0;
  day : number = 0;
  time : string = "";
  impact : string = "";
  explaination : string = "";

  catchChildEvent(e : any)
  {
    //const { personal, bug } = this.form.value;
    //const message = `Hello ${personal.firstname} ${personal.lastname} (${bugdetails.details}) ${bugdetails.bugimpact}`;
    //alert(message);
    this.submitted = true;
    const { personal, bugdetails } = this.form.value;
   
    this.firstname = personal.firstname;
    this.lastname = personal.lastname;
    this.email = personal.email;
    this.year = bugdetails.bugdate.year;
    this.month = bugdetails.bugdate.month;
    this.day = bugdetails.bugdate.day;
    this.time = bugdetails.bughours + " : " +bugdetails.bugminutes + " : "+ bugdetails.bugseconds;
    this.impact = bugdetails.bugimpact;
    this.explaination = bugdetails.details;

 }
}
