import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  @Output()
  formReady = new EventEmitter<FormGroup>();

  PersonalInfoForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder)
  {}
  
  ngOnInit() {
    this.formReady.emit(this.PersonalInfoForm);
    
  }
}
